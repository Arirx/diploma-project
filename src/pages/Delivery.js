import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const DELIVERY_METHODS = [
  {
    emoji: '🚛',
    title: 'Доставка автотранспортом',
    desc: 'Доставка собственным автопарком большегрузных автомобилей. Охватываем Беларусь и страны СНГ.',
    features: ['Беларусь и страны СНГ', 'Большегрузные автомобили', 'Полный пакет документов', 'Страхование груза', 'GPS-мониторинг'],
  },
  {
    emoji: '🏭',
    title: 'Самовывоз со склада',
    desc: 'Забирайте товар самостоятельно с нашего склада в г. Ельск. Удобные подъездные пути и погрузочное оборудование.',
    features: ['г. Ельск, Кочищанский тракт 6/1', 'Пн–Пт 8:00–17:00', 'Погрузка техникой Амкодор', 'Взвешивание и документы на месте'],
  },
  {
    emoji: '🚂',
    title: 'Железнодорожная доставка',
    desc: 'Отгрузка железнодорожным транспортом для крупных партий. Оформление документов под ключ.',
    features: ['Крупные партии', 'Международные перевозки', 'Таможенное оформление', 'Под ключ'],
  },
  {
    emoji: '🌍',
    title: 'Экспортные поставки',
    desc: 'Полное сопровождение экспортных сделок: таможня, сертификаты, фитосанитарные документы.',
    features: ['8 стран-партнёров', 'Таможенное оформление', 'Фитосанитарные сертификаты', 'Банковское сопровождение'],
  },
];

const PAYMENT_METHODS = [
  {
    emoji: '🏦',
    title: 'Безналичный расчёт',
    text: 'Оплата на расчётный счёт по выставленному счёту или договору. Предоплата или постоплата по договорённости.',
  },
  {
    emoji: '💵',
    title: 'Наличный расчёт',
    text: 'Оплата наличными при самовывозе. Предоставляем все необходимые кассовые документы.',
  },
  {
    emoji: '🌐',
    title: 'Международные переводы',
    text: 'SWIFT-переводы для иностранных партнёров. Работаем в USD, EUR, RUB. Аккредитив по запросу.',
  },
  {
    emoji: '🤝',
    title: 'Рассрочка для постоянных клиентов',
    text: 'Для постоянных партнёров предусмотрена отсрочка платежа по индивидуальным условиям.',
  },
];

const FAQ = [
  {
    q: 'Какой минимальный объём заказа?',
    a: 'Минимальный объём заказа — 1 м³. Для доставки автотранспортом рекомендуем от 20 м³ для оптимизации логистических расходов.',
  },
  {
    q: 'Сколько времени занимает доставка?',
    a: 'По Беларуси — 1–3 рабочих дня. В страны СНГ — 3–7 дней в зависимости от расстояния. Сроки уточняются при оформлении заказа.',
  },
  {
    q: 'Возможна ли доставка в Россию?',
    a: 'Да, доставка в Россию осуществляется регулярно. Полное таможенное и документальное сопровождение.',
  },
  {
    q: 'Как оформить заказ?',
    a: 'Свяжитесь с нами по телефону +375 (2354) 4-06-95 или через форму на сайте. Менеджер уточнит требования и подготовит коммерческое предложение.',
  },
  {
    q: 'Есть ли сертификаты на продукцию?',
    a: 'Да. Предоставляем сертификаты соответствия, фитосанитарные сертификаты для экспорта и другие необходимые документы.',
  },
  {
    q: 'Осуществляете ли погрузку?',
    a: 'Да, погрузка входит в стоимость при самовывозе. При заказе доставки погрузка включена в стоимость услуги.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className={`faq-item__q${open ? ' open' : ''}`} onClick={() => setOpen(v => !v)}>
        <span>{q}</span>
        <span className="faq-item__arrow">▾</span>
      </button>
      <div className={`faq-item__a${open ? ' open' : ''}`}>{a}</div>
    </div>
  );
}

export default function Delivery() {
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Логистика</div>
          <h1 className="section-title section-title--white">Доставка и оплата</h1>
          <p className="section-subtitle section-subtitle--white">
            Гибкие условия отгрузки и оплаты для партнёров из Беларуси и зарубежья
          </p>
        </div>
      </section>

      {/* ── СПОСОБЫ ДОСТАВКИ ───────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Доставка</div>
            <h2 className="section-title">Способы получения товара</h2>
            <p className="section-subtitle">Выберите удобный для вас вариант</p>
          </div>
          <div className="delivery-methods">
            {DELIVERY_METHODS.map((m, i) => (
              <div className="delivery-method fade-up" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="delivery-method__icon">{m.emoji}</div>
                <div className="delivery-method__title">{m.title}</div>
                <p className="delivery-method__desc">{m.desc}</p>
                <div className="delivery-method__features">
                  {m.features.map(f => (
                    <div className="delivery-method__feature" key={f}>{f}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── УСЛОВИЯ ОПЛАТЫ ─────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Оплата</div>
            <h2 className="section-title section-title--white">Способы оплаты</h2>
            <p className="section-subtitle section-subtitle--white">
              Работаем с физическими и юридическими лицами в любой удобной форме
            </p>
          </div>
          <div className="payment-grid">
            {PAYMENT_METHODS.map((p, i) => (
              <div className="payment-card fade-up" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="payment-card__icon">{p.emoji}</div>
                <div className="payment-card__title">{p.title}</div>
                <p className="payment-card__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Часто задаваемые вопросы</h2>
          </div>
          <div className="faq-list fade-up">
            {FAQ.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">Готовы оформить заказ?</div>
              <div className="cta-banner__sub">Свяжитесь с нами для расчёта стоимости доставки</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">Оставить заявку</Link>
              <a href="tel:+375235440695" className="btn btn--outline btn--lg">📞 +375 (2354) 4-06-95</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
