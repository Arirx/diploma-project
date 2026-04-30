import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

const VALUES = [
  { emoji: '🏆', title: 'Качество',       text: 'Строгий контроль на каждом этапе производства. Соответствие ГОСТам и международным стандартам.' },
  { emoji: '🤝', title: 'Надёжность',     text: 'Выполняем обязательства в срок. Долгосрочные партнёрства — основа нашей репутации.' },
  { emoji: '🌍', title: 'Открытость',     text: 'Работаем с партнёрами из 8 стран. Открыты к новым рынкам и форматам сотрудничества.' },
  { emoji: '♻️', title: 'Ответственность', text: 'Бережное отношение к лесным ресурсам. Безотходное производство — щепа и опилки идут в дело.' },
  { emoji: '💡', title: 'Инновации',      text: 'Промышленное оборудование итальянского производства. Постоянное совершенствование процессов.' },
  { emoji: '👥', title: 'Команда',        text: 'Опытный коллектив профессионалов. Официальное трудоустройство и забота о сотрудниках.' },
];

const TIMELINE = [
  { year: '2010', title: 'Основание компании', text: '14 июня 2010 года зарегистрировано ООО «Ельсклес». Начало производственной деятельности в г. Ельск Гомельской области.' },
  { year: '2012', title: 'Расширение производства', text: 'Запуск собственного лесопильного цеха полного цикла. Увеличение ассортимента продукции.' },
  { year: '2015', title: 'Промышленная сушка', text: 'Установка сушильных камер итальянского производства. Начало производства пиломатериалов камерной сушки.' },
  { year: '2017', title: 'Выход на экспорт', text: 'Первые экспортные поставки в страны СНГ и Ближнего Востока. Установление партнёрских связей с Турцией и Ираном.' },
  { year: '2020', title: 'Расширение географии', text: 'Поставки в Китай, Узбекистан и Таджикистан. Выход на рынок Азербайджана и Грузии.' },
  { year: '2024', title: 'Сегодня', text: 'Предприятие полного цикла. Экспорт в 8 стран мира. Более 50 сотрудников. Постоянный рост объёмов производства.' },
];

const PRODUCTION = [
  { emoji: '🪚', title: 'Лесопильный цех', text: 'Современное оборудование для распиловки и первичной обработки древесины. Широкий ассортимент сечений.' },
  { emoji: '🔥', title: 'Сушильные камеры', text: 'Итальянские сушильные камеры промышленного класса. Сушка до влажности 8–22% по ТЗ заказчика.' },
  { emoji: '🚜', title: 'Техника Амкодор', text: 'Парк погрузочно-разгрузочной техники белорусского производства для оперативной обработки грузов.' },
  { emoji: '🚛', title: 'Автопарк', text: 'Собственные большегрузные автомобили для транспортировки лесоматериалов и сыпучих материалов.' },
  { emoji: '📦', title: 'Склад готовой продукции', text: 'Крытый склад вместимостью тысячи кубометров. Возможность хранения партии до отгрузки.' },
  { emoji: '⚙️', title: 'Производство угля', text: 'Линия по производству древесного угля из отходов деревообработки.' },
];

export default function About() {
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">О компании</div>
          <h1 className="section-title section-title--white">
            Ваш надёжный партнёр<br />в деревообработке
          </h1>
          <p className="section-subtitle section-subtitle--white">
            ООО «Ельсклес» — предприятие с 15-летней историей в Гомельской области Беларуси.
            Производство, сушка и экспорт пиломатериалов хвойных пород.
          </p>
        </div>
      </section>

      {/* ── ИСТОРИЯ ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="fade-up">
              <div className="section-label">История</div>
              <h2 className="section-title">От небольшого предприятия<br />к экспортёру</h2>
              <p className="section-subtitle">
                За 15 лет мы прошли путь от локального лесопильного производства
                до предприятия полного цикла, экспортирующего продукцию в 8 стран.
              </p>
              <div style={{ marginTop: 36 }}>
                <Link to="/contacts" className="btn btn--primary">Связаться с нами</Link>
              </div>
            </div>
            <div className="timeline fade-up">
              {TIMELINE.map(({ year, title, text }, i) => (
                <div className="timeline__item" key={year}>
                  <div className="timeline__left">
                    <div className="timeline__year">{year}</div>
                    {i < TIMELINE.length - 1 && <div className="timeline__line" />}
                  </div>
                  <div className="timeline__content">
                    <div className="timeline__title">{title}</div>
                    <p className="timeline__text">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ЦЕННОСТИ ──────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Ценности</div>
            <h2 className="section-title">Наши принципы работы</h2>
            <p className="section-subtitle">
              Принципы, которые определяют каждое наше решение
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div className="value-card fade-up" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="value-card__icon">{v.emoji}</div>
                <div className="value-card__title">{v.title}</div>
                <p className="value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРОИЗВОДСТВО ──────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">Производство</div>
            <h2 className="section-title section-title--white">Наши мощности</h2>
            <p className="section-subtitle section-subtitle--white">
              Собственное оборудование полного цикла — от заготовки до отгрузки
            </p>
          </div>
          <div className="production-grid">
            {PRODUCTION.map((p, i) => (
              <div className="production-item fade-up" key={i} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="production-item__icon">{p.emoji}</div>
                <div>
                  <div className="production-item__title">{p.title}</div>
                  <p className="production-item__text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">
                Готовы к сотрудничеству?
              </div>
              <div className="cta-banner__sub">
                Оставьте заявку — ответим в течение рабочего дня
              </div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/products" className="btn btn--white btn--lg">Посмотреть продукцию</Link>
              <Link to="/contacts" className="btn btn--outline btn--lg">Написать нам</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
