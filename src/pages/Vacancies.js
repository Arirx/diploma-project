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

const VACANCIES = [
  {
    title: 'Водитель',
    type: 'Полная занятость',
    location: 'г. Ельск',
    category: 'Транспорт',
    desc: 'Управление большегрузным автомобилем для перевозки лесоматериалов по Беларуси и СНГ.',
    requirements: ['Водительское удостоверение категории C, CE', 'Опыт вождения от 2 лет', 'Знание ПДД'],
  },
  {
    title: 'Машинист котельной',
    type: 'Полная занятость',
    location: 'г. Ельск',
    category: 'Производство',
    desc: 'Обслуживание котельного оборудования на производственном предприятии.',
    requirements: ['Удостоверение машиниста котельной', 'Опыт работы приветствуется', 'Ответственность'],
  },
  {
    title: 'Тракторист',
    type: 'Полная занятость',
    location: 'г. Ельск / Лесной массив',
    category: 'Заготовка',
    desc: 'Трелёвка и транспортировка лесоматериалов в лесных массивах Гомельской области.',
    requirements: ['Права тракториста-машиниста', 'Опыт работы в лесозаготовке', 'Физическая выносливость'],
  },
  {
    title: 'Станочник деревообрабатывающих станков',
    type: 'Полная занятость',
    location: 'г. Ельск',
    category: 'Производство',
    desc: 'Работа на деревообрабатывающем оборудовании лесопильного цеха.',
    requirements: ['Профессиональное образование или опыт', 'Знание станков', 'Внимательность'],
  },
  {
    title: 'Строитель (монтажник)',
    type: 'Полная занятость',
    location: 'г. Ельск',
    category: 'Строительство',
    desc: 'Строительство и обслуживание производственных объектов предприятия.',
    requirements: ['Опыт в строительстве', 'Физическая подготовка', 'Умение читать чертежи'],
  },
  {
    title: 'Подсобный рабочий',
    type: 'Полная занятость',
    location: 'г. Ельск',
    category: 'Производство',
    desc: 'Вспомогательные работы на производственном предприятии: сортировка, укладка, уборка территории.',
    requirements: ['Без опыта', 'Физическая выносливость', 'Пунктуальность'],
  },
];

const BENEFITS = [
  { emoji: '📋', title: 'Официальное трудоустройство', text: 'Трудовой договор, запись в трудовую книжку, полный соцпакет.' },
  { emoji: '🚌', title: 'Служебные перевозки',         text: 'Организованная доставка на работу и обратно.' },
  { emoji: '🛡️', title: 'Страхование',                 text: 'Добровольное медицинское и страхование жизни.' },
  { emoji: '👷', title: 'Спецодежда и СИЗ',            text: 'Полный комплект спецодежды и средств индивидуальной защиты за счёт предприятия.' },
  { emoji: '🎓', title: 'Бесплатное обучение',          text: 'Повышение квалификации и обучение за счёт компании.' },
  { emoji: '📈', title: 'Карьерный рост',               text: 'Возможность повышения квалификации и карьерного роста.' },
];

function VacancyCard({ vacancy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`vacancy-card fade-up`} style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="vacancy-card__title">{vacancy.title}</div>
          <div className="vacancy-card__meta">
            <span className="vacancy-card__badge">
              <span className="vacancy-card__badge-icon">📍</span>
              {vacancy.location}
            </span>
            <span className="vacancy-card__badge">
              <span className="vacancy-card__badge-icon">⏱️</span>
              {vacancy.type}
            </span>
            <span className="vacancy-card__badge">
              <span className="vacancy-card__badge-icon">🏷️</span>
              {vacancy.category}
            </span>
          </div>
        </div>
        <span className="vacancy-card__status">Открыта</span>
      </div>

      <p style={{ fontSize: 14, color: 'var(--clr-gray-600)', lineHeight: 1.6 }}>{vacancy.desc}</p>

      <button
        onClick={() => setOpen(v => !v)}
        style={{
          background: 'none', border: 'none', padding: 0,
          color: 'var(--clr-orange)', fontWeight: 600, fontSize: 13,
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
        }}
      >
        {open ? 'Скрыть требования ▲' : 'Требования ▼'}
      </button>

      {open && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 0 }}>
          {vacancy.requirements.map(r => (
            <li key={r} style={{ fontSize: 13.5, color: 'var(--clr-gray-800)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--clr-orange)', fontWeight: 700 }}>✓</span> {r}
            </li>
          ))}
        </ul>
      )}

      <Link to="/contacts" className="btn btn--primary btn--sm">
        Откликнуться →
      </Link>
    </div>
  );
}

export default function Vacancies() {
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Карьера</div>
          <h1 className="section-title section-title--white">Вакансии</h1>
          <p className="section-subtitle section-subtitle--white">
            Присоединяйтесь к команде ООО «Ельсклес». Официальное трудоустройство,
            достойная оплата и стабильный коллектив.
          </p>
        </div>
      </section>

      {/* ── ОТКРЫТЫЕ ВАКАНСИИ ──────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Открытые позиции</div>
            <h2 className="section-title">Мы ищем в команду</h2>
            <p className="section-subtitle">
              {VACANCIES.length} открытых вакансий · Все позиции — полная занятость
            </p>
          </div>
          <div className="vacancies-list">
            {VACANCIES.map((v, i) => (
              <VacancyCard key={i} vacancy={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── УСЛОВИЯ ─────────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Условия</div>
            <h2 className="section-title">Что мы предлагаем</h2>
            <p className="section-subtitle">
              Мы заботимся о каждом сотруднике
            </p>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="benefit-card fade-up" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="benefit-card__icon">{b.emoji}</div>
                <div className="benefit-card__title">{b.title}</div>
                <p className="benefit-card__text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">Не нашли подходящую вакансию?</div>
              <div className="cta-banner__sub">
                Отправьте резюме — рассмотрим при появлении новых позиций
              </div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">Отправить резюме</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
