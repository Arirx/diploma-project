import { useEffect } from 'react';
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

const SERVICES = [
  {
    emoji: '🔥',
    title: 'Промышленная сушка пиломатериалов',
    desc: 'Сушка пиломатериалов в промышленных камерах итальянского производства. Камерная сушка позволяет получить точную влажность по требованию заказчика — от 8 до 22%. Обработка любых объёмов в сжатые сроки.',
    tags: ['Камерная сушка', 'Итальянское оборудование', '8–22% влажность', 'Любые объёмы', 'Под заказ'],
  },
  {
    emoji: '🚛',
    title: 'Транспортировка лесоматериалов',
    desc: 'Доставка пиломатериалов собственным автотранспортом по Беларуси, России и другим странам СНГ. Большегрузные автомобили, документальное сопровождение, гарантия сохранности груза.',
    tags: ['Беларусь', 'Страны СНГ', 'Большегрузы', 'Документы', 'Страхование'],
  },
  {
    emoji: '🌿',
    title: 'Транспортировка щепы и опилок',
    desc: 'Вывоз технологической щепы и опилок специализированным транспортом. Подходит для целлюлозно-бумажных предприятий, котельных и производств биотоплива.',
    tags: ['Щепа', 'Опилки', 'Спец. транспорт', 'Биотопливо'],
  },
  {
    emoji: '🏗️',
    title: 'Погрузочно-разгрузочные работы',
    desc: 'Погрузка, выгрузка и перемещение материалов с применением техники Амкодор. Профессиональные операторы, работа на собственных и сторонних площадках.',
    tags: ['Техника Амкодор', 'Быстро', 'Точно', 'Без повреждений', 'Своя площадка'],
  },
  {
    emoji: '🌲',
    title: 'Заготовка и трелёвка лесоматериалов',
    desc: 'Комплексная заготовка древесины в лесных массивах Гомельской и соседних областей Беларуси. Трелёвка, первичная обработка на деляне, доставка на производство.',
    tags: ['Заготовка', 'Трелёвка', 'Гомельская обл.', 'Беларусь'],
  },
];

const WHY_US = [
  { emoji: '⚡', title: 'Оперативность',     text: 'Обрабатываем заявки в течение рабочего дня. Быстрый выезд на объект.' },
  { emoji: '🔧', title: 'Собственный парк',   text: 'Техника и транспорт в собственности — никаких посредников и задержек.' },
  { emoji: '📋', title: 'Документооборот',    text: 'Полный пакет документов: договор, ТТН, сертификаты, таможня.' },
  { emoji: '💰', title: 'Честные цены',       text: 'Прозрачное ценообразование без скрытых наценок. Гибкие условия.' },
];

export default function Services() {
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Услуги</div>
          <h1 className="section-title section-title--white">Услуги ООО «Ельсклес»</h1>
          <p className="section-subtitle section-subtitle--white">
            Полный спектр услуг в области деревообработки, транспортировки
            и&nbsp;заготовки лесных ресурсов
          </p>
        </div>
      </section>

      {/* ── СПИСОК УСЛУГ ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {SERVICES.map((s, i) => (
              <div
                className="service-item fade-up"
                key={i}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="service-item__icon-wrap">{s.emoji}</div>
                <div className="service-item__content">
                  <div className="service-item__title">{s.title}</div>
                  <p className="service-item__desc">{s.desc}</p>
                  <div className="service-item__tags">
                    {s.tags.map(t => (
                      <span className="service-item__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ──────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Преимущества</div>
            <h2 className="section-title">Почему выбирают нас</h2>
          </div>
          <div className="values-grid">
            {WHY_US.map((w, i) => (
              <div className="value-card fade-up" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="value-card__icon">{w.emoji}</div>
                <div className="value-card__title">{w.title}</div>
                <p className="value-card__text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">Обсудим ваш проект?</div>
              <div className="cta-banner__sub">Звоните или оставьте заявку — ответим быстро</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">Оставить заявку</Link>
              <a href="tel:+375235440695" className="btn btn--outline btn--lg">📞 Позвонить</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
