const TOKEN   = '8838834177:AAFzG3FGJLRimOB7v34lpGD2LGn04lX8MiM';
const CHAT_ID = '-1004489194614';

export async function sendTelegramInquiry({ name, phone, email, subject, message }) {
  const text = [
    `<b>Новая заявка с сайта</b>`,
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    email   ? `Email: ${email}`   : null,
    subject ? `Тема: ${subject}` : null,
    `Сообщение: ${message}`,
    `${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Minsk' })}`,
  ].filter(Boolean).join('\n');

  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.description || 'Ошибка отправки');
  }
}
