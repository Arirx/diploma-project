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

const PRODUCTS = [
  {
    emoji: '🪵',
    cat: 'Пиломатериалы',
    title: 'Доска обрезная',
    desc: 'Обрезные доски из сосны хвойных пород. Применяются в строительстве, производстве мебели и упаковки.',
    specs: [
      ['Порода', 'Сосна'],
      ['Толщина', '16–100 мм'],
      ['Ширина', '75–250 мм'],
      ['Длина', '3–6 м'],
      ['Влажность', '12–22% (сухая/сырая)'],
    ],
    group: 'Пиломатериалы',
    bg: '#F5ECD7',
  },
  {
    emoji: '📐',
    cat: 'Пиломатериалы',
    title: 'Брус строительный',
    desc: 'Строительный брус из сосны для каркасного строительства, домов из бруса, перекрытий и стропил.',
    specs: [
      ['Порода', 'Сосна'],
      ['Сечение', '100×100, 100×150, 150×150, 200×200'],
      ['Длина', '3–6 м'],
      ['Влажность', 'Натуральная / Сушёная'],
    ],
    group: 'Пиломатериалы',
    bg: '#EDE8DC',
  },
  {
    emoji: '🚂',
    cat: 'Специальные изделия',
    title: 'Шпала деревянная',
    desc: 'Деревянные шпалы для железнодорожных путей промышленного и узкоколейного применения.',
    specs: [
      ['Порода', 'Сосна'],
      ['Тип', '1, 2, 3 (ГОСТ 78-2004)'],
      ['Длина', '2,75 м'],
    ],
    group: 'Специальные',
    bg: '#E8E0D0',
  },
  {
    emoji: '📦',
    cat: 'Пиломатериалы',
    title: 'Паллетная доска',
    desc: 'Доска для производства деревянных паллет и поддонов. Стандартные и нестандартные размеры.',
    specs: [
      ['Порода', 'Сосна'],
      ['Толщина', '20–22 мм'],
      ['Ширина', '75–145 мм'],
      ['Длина', '0.8–1.2 м'],
    ],
    group: 'Пиломатериалы',
    bg: '#F0E8D8',
  },
  {
    emoji: '🪨',
    cat: 'Отходы производства',
    title: 'Горбыль',
    desc: 'Горбыль — боковая часть бревна с одной необрезанной стороной. Используется как топливо или сырьё.',
    specs: [
      ['Порода', 'Сосна'],
      ['Применение', 'Топливо, черновые работы'],
      ['Упаковка', 'Насыпью / в пачках'],
    ],
    group: 'Отходы',
    bg: '#E8DDD0',
  },
  {
    emoji: '🔥',
    cat: 'Энергоносители',
    title: 'Уголь древесный',
    desc: 'Высококалорийный уголь из лиственных пород. Применяется для металлургии, гриля и отопления.',
    specs: [
      ['Сырьё', 'Лиственные породы'],
      ['Калорийность', 'не менее 29 МДж/кг'],
      ['Фасовка', '5, 10, 25 кг / насыпью'],
      ['Влажность', 'до 8%'],
    ],
    group: 'Энергоносители',
    bg: '#2A2A2A',
    dark: true,
  },
  {
    emoji: '🌿',
    cat: 'Сыпучие материалы',
    title: 'Щепа технологическая',
    desc: 'Технологическая щепа для целлюлозно-бумажной промышленности, биотоплива и производства ДСП.',
    specs: [
      ['Порода', 'Сосна, смешанные'],
      ['Фракция', '15–30 мм'],
      ['Влажность', '40–55%'],
      ['Поставка', 'Насыпью, самосвалами'],
    ],
    group: 'Отходы',
    bg: '#D8ECD0',
  },
  {
    emoji: '🌾',
    cat: 'Сыпучие материалы',
    title: 'Опилки',
    desc: 'Свежие опилки хвойных пород — сырьё для пеллет, биотоплива, подстилки и производства ДСП.',
    specs: [
      ['Порода', 'Сосна'],
      ['Влажность', '35–50%'],
      ['Поставка', 'Насыпью, специализированным транспортом'],
    ],
    group: 'Отходы',
    bg: '#EDE8C0',
  },
  {
    emoji: '✂️',
    cat: 'Пиломатериалы',
    title: 'Обрезки, рейки',
    desc: 'Рейки и обрезки от производства. Подходят для мелкого строительства, ограждений, тары.',
    specs: [
      ['Порода', 'Сосна'],
      ['Сечение', 'Различное'],
      ['Длина', 'от 0.5 м'],
    ],
    group: 'Пиломатериалы',
    bg: '#F5F0E8',
  },
];

const GROUPS = ['Все', 'Пиломатериалы', 'Специальные', 'Энергоносители', 'Отходы'];

export default function Products() {
  const [active, setActive] = useState('Все');
  useFadeUp();

  const filtered = active === 'Все' ? PRODUCTS : PRODUCTS.filter(p => p.group === active);

  return (
    <>
      {/* ── PAGE HERO ──────────────────────────── */}
      <section className="page-hero gray-after">
        <div className="container">
          <div className="section-label">Каталог</div>
          <h1 className="section-title section-title--white">Наша продукция</h1>
          <p className="section-subtitle section-subtitle--white">
            Пиломатериалы хвойных пород, специальные изделия и продукты
            деревообработки собственного производства
          </p>
        </div>
      </section>

      {/* ── КАТАЛОГ ────────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="products-filter fade-up">
            {GROUPS.map(g => (
              <button
                key={g}
                className={`filter-btn${active === g ? ' active' : ''}`}
                onClick={() => setActive(g)}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="products-page-grid">
            {filtered.map((p, i) => (
              <div
                className="product-detail fade-up"
                key={p.title}
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div
                  className="product-detail__thumb"
                  style={{ background: p.bg, color: p.dark ? 'rgba(255,255,255,0.3)' : undefined }}
                >
                  <span style={{ fontSize: 64 }}>{p.emoji}</span>
                </div>
                <div className="product-detail__body">
                  <div className="product-detail__cat">{p.cat}</div>
                  <div className="product-detail__title">{p.title}</div>
                  <p className="product-detail__desc">{p.desc}</p>
                  <div className="product-detail__specs">
                    {p.specs.map(([k, v]) => (
                      <div className="product-detail__spec" key={k}>
                        <span className="product-detail__spec-key">{k}</span>
                        <span className="product-detail__spec-val">{v}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contacts" className="btn btn--primary btn--sm">
                    Запросить цену →
                  </Link>
                </div>
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
              <div className="cta-banner__title">Нужен индивидуальный размер?</div>
              <div className="cta-banner__sub">
                Выполняем заказы по нестандартным параметрам. Обсудим ваше ТЗ.
              </div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">Оформить заявку</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
