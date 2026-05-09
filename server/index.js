require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const express = require('express');
const cors    = require('cors');
const pool    = require('./db');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

/* ─── POST /api/inquiries ────────────────────────────────────
   Сохраняет заявку с сайта в таблицу inquiries.
   Пытается найти subject_id по тексту темы.             */
app.post('/api/inquiries', async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name?.trim() || !phone?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Заполните обязательные поля: имя, телефон, сообщение.' });
  }

  try {
    let subject_id = null;

    if (subject) {
      const found = await pool.query(
        `SELECT id FROM inquiry_subjects
         WHERE name ILIKE $1
         ORDER BY id LIMIT 1`,
        [`%${subject.split('/')[0].trim()}%`]
      );
      if (found.rows.length) subject_id = found.rows[0].id;
    }

    const result = await pool.query(
      `INSERT INTO inquiries (subject_id, name, phone, email, message)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, created_at`,
      [subject_id, name.trim(), phone.trim(), email?.trim() || null, message.trim()]
    );

    res.status(201).json({ ok: true, id: result.rows[0].id });
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
         i.message,
         i.status,
         i.created_at,
         s.name AS subject
       FROM inquiries i
       LEFT JOIN inquiry_subjects s ON i.subject_id = s.id
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
  const { status, processed_by } = req.body;

  const allowed = ['new', 'read', 'done'];
  if (!allowed.includes(status)) {
    return res.status(400).json({ error: 'Недопустимый статус.' });
  }

  try {
    await pool.query(
      `UPDATE inquiries
       SET status = $1,
           processed_by = $2,
           processed_at = CASE WHEN $1 = 'done' THEN NOW() ELSE processed_at END
       WHERE id = $3`,
      [status, processed_by || null, id]
    );
    res.json({ ok: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
