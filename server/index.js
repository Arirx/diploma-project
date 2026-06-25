require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const express = require('express');
const cors    = require('cors');
const https   = require('https');
const pool    = require('./db');

function sendTelegram(text) {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const body = JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' });
  const req  = https.request({
    hostname: 'api.telegram.org',
    path:     `/bot${token}/sendMessage`,
    method:   'POST',
    headers:  { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
  });
  req.on('error', err => console.error('Telegram error:', err.message));
  req.write(body);
  req.end();
}

const app = express();

const CORS_ORIGINS = ['http://localhost:3000', 'https://elskles.by'];
const corsOptions  = {
  origin: CORS_ORIGINS,
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // preflight
app.use(express.json());

/* ─── POST /api/inquiries ────────────────────────────────────
   Сохраняет заявку с сайта в таблицу inquiries.
   Пытается найти subject_id по тексту темы.             */
app.post('/api/inquiries', async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Заполните обязательные поля: имя, телефон, сообщение.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO inquiries (name, phone, email, subject, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [name.trim(), phone.trim(), email?.trim() || null, subject?.trim() || null, message.trim()]
    );

    const { id, created_at } = result.rows[0];

    const msg = [
      `<b>Новая заявка #${id}</b>`,
      `Имя: ${name.trim()}`,
      `Телефон: ${phone.trim()}`,
      email?.trim() ? `Email: ${email.trim()}` : null,
      subject?.trim() ? `Тема: ${subject.trim()}` : null,
      `Сообщение: <i>${message.trim()}</i>`,
      `${new Date(created_at).toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`,
    ].filter(Boolean).join('\n');

    sendTelegram(msg);

    res.status(201).json({ ok: true, id });
  } catch (err) {
    console.error('Ошибка при сохранении заявки:', err.message);
    res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
});

/* ─── GET /api/inquiries ─────────────────────────────────────
   Возвращает все заявки (для просмотра в инструментах).  */
app.get('/api/inquiries', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
         i.id,
         i.name,
         i.phone,
         i.email,
         i.subject,
         i.message,
         i.status,
         i.created_at,
         m.full_name AS manager
       FROM inquiries i
       LEFT JOIN managers m ON i.manager_id = m.id
       ORDER BY i.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
});

/* ─── PATCH /api/inquiries/:id ───────────────────────────────
   Обновляет статус заявки: new → read → done              */
app.patch('/api/inquiries/:id', async (req, res) => {
  const { id } = req.params;
  const { status, manager_id } = req.body;

  const allowed = ['new', 'read', 'in_work', 'done'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: 'Недопустимый статус.' });
  }

  try {
    await pool.query(
      `UPDATE inquiries SET status = $1, manager_id = $2 WHERE id = $3`,
      [status, manager_id || null, id]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
});

const PORT = process.env.SERVER_PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nПорт ${PORT} уже занят. Останови предыдущий процесс:\n  Get-Process -Id (Get-NetTCPConnection -LocalPort ${PORT}).OwningProcess | Stop-Process -Force\n`);
    process.exit(1);
  } else {
    throw err;
  }
});
