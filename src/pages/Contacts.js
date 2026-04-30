import { useEffect, useState } from 'react';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return (
    <div className="form__success" style={{ padding: 32 }}>
      ✅ Ваше сообщение отправлено! Мы свяжемся с вами в рабочее время (Пн–Пт 8:00–17:00).
    </div>
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: 20, fontWeight: 800, marginBottom: 20 }}>
        Написать нам
      </h3>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label">Имя *</label>
          <input className="form__input" name="name" value={form.name} onChange={handleChange} placeholder="Иван Иванов" required />
        </div>
        <div className="form__group">
          <label className="form__label">Телефон *</label>
          <input className="form__input" name="phone" value={form.phone} onChange={handleChange} placeholder="+375 XX XXX-XX-XX" required />
        </div>
      </div>
      <div className="form__group">
        <label className="form__label">Email</label>
        <input className="form__input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" />
      </div>
      <div className="form__group">
        <label className="form__label">Тема</label>
        <select className="form__select" name="subject" value={form.subject} onChange={handleChange}>
          <option value="">Выберите тему</option>
          <option>Запрос на пиломатериалы</option>
          <option>Услуги по транспортировке</option>
          <option>Сотрудничество / экспорт</option>
          <option>Вакансии</option>
          <option>Другое</option>
        </select>
      </div>
      <div className="form__group">
        <label className="form__label">Сообщение *</label>
        <textarea className="form__textarea" name="message" value={form.message} onChange={handleChange} placeholder="Опишите ваш запрос подробнее..." rows={5} required />
      </div>
      <p className="form__note">Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.</p>
      <button type="submit" className="btn btn--primary">
        Отправить сообщение →
      </button>
    </form>
  );
}

export default function Contacts() {
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Контакты</div>
          <h1 className="section-title section-title--white">Свяжитесь с нами</h1>
          <p className="section-subtitle section-subtitle--white">
            Мы отвечаем на звонки и письма в рабочее время: Пн–Пт с&nbsp;8:00 до&nbsp;17:00
          </p>
        </div>
      </section>

      {/* ── КОНТАКТНАЯ ИНФОРМАЦИЯ + ФОРМА ──────── */}
      <section className="section">
        <div className="container">
          <div className="contacts-grid">

            {/* Карточка с контактами */}
            <div className="fade-up">
              <div className="contact-info-card">
                <div className="contact-info-card__title">Контактная информация</div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">📍</div>
                  <div>
                    <div className="contact-info-row__label">Адрес</div>
                    <div className="contact-info-row__value">
                      г. Ельск, Кочищанский тракт 6/1,<br />247792, Гомельская область, Беларусь
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">📞</div>
                  <div>
                    <div className="contact-info-row__label">Телефон</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375235440695">+375 (2354) 4-06-95</a><br />
                      <a href="tel:+375235443328">+375 (2354) 4-43-28</a> (бухгалтерия)
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">📱</div>
                  <div>
                    <div className="contact-info-row__label">Мобильный / WhatsApp</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375333242010">+375 33 324-20-10</a><br />
                      <a href="tel:+375296072307">+375 29 607-23-07</a><br />
                      <a href="tel:+375291011317">+375 29 101-13-17</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">✉️</div>
                  <div>
                    <div className="contact-info-row__label">Email</div>
                    <div className="contact-info-row__value">
                      <a href="mailto:elskles.info@gmail.com">elskles.info@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">🕐</div>
                  <div>
                    <div className="contact-info-row__label">Режим работы</div>
                    <div className="contact-info-row__value">
                      Понедельник – Пятница: 8:00 – 17:00<br />
                      Суббота, Воскресенье: выходной
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">🏢</div>
                  <div>
                    <div className="contact-info-row__label">Реквизиты</div>
                    <div className="contact-info-row__value">
                      ООО «Ельсклес»<br />
                      УНП 490333750
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                  <a
                    href="https://wa.me/375333242010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/elskles.by"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--sm"
                  >
                    📷 Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Форма + карта */}
            <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── КАРТА ───────────────────────────────── */}
      <section className="section--sm">
        <div className="container">
          <div className="map-embed fade-up">
            <iframe
              title="Карта расположения ООО Ельсклес"
              src="https://maps.google.com/maps?q=Ельск+Гомельская+область+Беларусь&output=embed&z=13"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
