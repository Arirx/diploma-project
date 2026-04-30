import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* ISO 3166-1 numeric codes */
const PARTNER_IDS = new Set(['643','156','792','364','031','268','860','762']);
const HOME_ID = '112'; /* Belarus */

const PARTNER_COUNTRIES = [
  { name: 'Беларусь', flag: '🇧🇾', home: true,  coords: [27.9534, 53.7098] },
  { name: 'Россия',   flag: '🇷🇺', home: false, coords: [37.6173, 55.7558] },
  { name: 'Китай',    flag: '🇨🇳', home: false, coords: [116.407, 39.904]  },
  { name: 'Турция',   flag: '🇹🇷', home: false, coords: [32.866, 39.933]   },
  { name: 'Иран',     flag: '🇮🇷', home: false, coords: [51.389, 35.689]   },
  { name: 'Азербайджан', flag: '🇦🇿', home: false, coords: [49.867, 40.409] },
  { name: 'Грузия',   flag: '🇬🇪', home: false, coords: [44.793, 41.694]   },
  { name: 'Узбекистан',flag: '🇺🇿', home: false, coords: [69.240, 41.299]  },
  { name: 'Таджикистан',flag:'🇹🇯', home: false, coords: [68.773, 38.559]  },
];

const PRODUCTS_PREVIEW = [
  { emoji: '🪵', cat: 'Хвойные породы', title: 'Пиломатериалы обрезные', desc: 'Обрезные доски из сосны. Широкий выбор сечений и длин под любые задачи.' },
  { emoji: '📐', cat: 'Строительные',   title: 'Брус строительный',       desc: 'Клееный и цельный брус для каркасного и деревянного строительства.' },
  { emoji: '🚂', cat: 'Специальные',    title: 'Шпала деревянная',         desc: 'Шпалы из сосны для железнодорожного и промышленного применения.' },
  { emoji: '🔥', cat: 'Топливо',        title: 'Уголь древесный',          desc: 'Высококалорийный уголь из лиственных пород, фасовка на заказ.' },
];

const SERVICES_PREVIEW = [
  { emoji: '🔥', title: 'Сушка пиломатериалов',  desc: 'Промышленные камеры итальянского производства. Сушка до заданной влажности.' },
  { emoji: '🚛', title: 'Транспортировка',         desc: 'Доставка лесоматериалов собственным автотранспортом по Беларуси и СНГ.' },
  { emoji: '🏗️', title: 'Погрузочные работы',      desc: 'Погрузка-выгрузка техникой Амкодор. Быстро, точно, без повреждений.' },
  { emoji: '🌲', title: 'Заготовка древесины',     desc: 'Заготовка и трелёвка лесоматериалов в лесных массивах Гомельской области.' },
  { emoji: '🪨', title: 'Щепа и опилки',           desc: 'Технологическая щепа и опилки — отличное биотопливо и сырьё.' },
];

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

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return (
    <div className="form__success">
      ✅ Сообщение отправлено! Мы свяжемся с вами в рабочее время (Пн–Пт 8:00–17:00).
    </div>
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
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
        <label className="form__label">Тема обращения</label>
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
        <label className="form__label">Сообщение</label>
        <textarea className="form__textarea" name="message" value={form.message} onChange={handleChange} placeholder="Опишите ваш запрос..." rows={4} />
      </div>
      <p className="form__note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
      <button type="submit" className="btn btn--primary">
        Отправить сообщение →
      </button>
    </form>
  );
}

export default function Home() {
  useFadeUp();

  return (
    <>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            Беларусь · Экспорт в 8 стран
          </div>
          <h1 className="hero__title">
            Ваш надёжный<br />
            поставщик <span>лесных<br />ресурсов</span>
          </h1>
          <p className="hero__subtitle">
            ООО «Ельсклес» — производство и поставка пиломатериалов из сосны,
            промышленная сушка, транспортировка. Работаем с 2010 года.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary btn--lg">
              Смотреть продукцию →
            </Link>
            <Link to="/contacts" className="btn btn--outline btn--lg">
              Связаться с нами
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <div className="hero__stat-num">15<span>+</span></div>
              <div className="hero__stat-label">Лет опыта</div>
            </div>
            <div>
              <div className="hero__stat-num">8</div>
              <div className="hero__stat-label">Стран экспорта</div>
            </div>
            <div>
              <div className="hero__stat-num">9<span>+</span></div>
              <div className="hero__stat-label">Видов продукции</div>
            </div>
            <div>
              <div className="hero__stat-num"><span>с</span> 2010</div>
              <div className="hero__stat-label">Год основания</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── О КОМПАНИИ (тизер) ────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-teaser">
            <div className="about-teaser__visual fade-up">
              <div className="about-teaser__img-wrap">🌲</div>
              <div className="about-teaser__badge">
                <div className="about-teaser__badge-num">2010</div>
                <div className="about-teaser__badge-text">Год основания</div>
              </div>
            </div>
            <div className="fade-up">
              <div className="section-label">О компании</div>
              <h2 className="section-title">Производство высшего<br />стандарта качества</h2>
              <p className="section-subtitle">
                ООО «Ельсклес» — предприятие полного цикла по заготовке, обработке
                и&nbsp;реализации лесных ресурсов. Собственный лесопильный цех,
                промышленные сушильные камеры итальянского производства,
                парк специализированной техники.
              </p>
              <div className="about-teaser__features">
                <div className="about-teaser__feature">
                  <div className="about-teaser__feature-icon">🔥</div>
                  <div>
                    <div className="about-teaser__feature-title">Сушильные камеры</div>
                    <div className="about-teaser__feature-text">Итальянское оборудование для промышленной сушки</div>
                  </div>
                </div>
                <div className="about-teaser__feature">
                  <div className="about-teaser__feature-icon">🚛</div>
                  <div>
                    <div className="about-teaser__feature-title">Собственный транспорт</div>
                    <div className="about-teaser__feature-text">Доставка по Беларуси и странам СНГ</div>
                  </div>
                </div>
                <div className="about-teaser__feature">
                  <div className="about-teaser__feature-icon">🌍</div>
                  <div>
                    <div className="about-teaser__feature-title">Экспорт</div>
                    <div className="about-teaser__feature-text">Поставки в 8 стран мира</div>
                  </div>
                </div>
                <div className="about-teaser__feature">
                  <div className="about-teaser__feature-icon">✅</div>
                  <div>
                    <div className="about-teaser__feature-title">Гарантия качества</div>
                    <div className="about-teaser__feature-text">Соответствие ГОСТ и международным стандартам</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <Link to="/about" className="btn btn--outline-dark">
                  Подробнее о компании →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОДУКЦИЯ (превью) ───────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header--flex fade-up">
            <div>
              <div className="section-label">Продукция</div>
              <h2 className="section-title">Что мы производим</h2>
            </div>
            <Link to="/products" className="btn btn--outline-dark">
              Весь каталог →
            </Link>
          </div>
          <div className="products-grid">
            {PRODUCTS_PREVIEW.map((p, i) => (
              <div className="product-card fade-up" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="product-card__thumb" style={{ background: `hsl(${30 + i * 15},30%,${88 - i * 4}%)` }}>
                  <span style={{ fontSize: 64 }}>{p.emoji}</span>
                </div>
                <div className="product-card__body">
                  <div className="product-card__cat">{p.cat}</div>
                  <div className="product-card__title">{p.title}</div>
                  <p className="product-card__desc">{p.desc}</p>
                  <Link to="/products" className="btn btn--outline-dark btn--sm">Подробнее</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ (превью) ──────────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header--flex fade-up">
            <div>
              <div className="section-label">Услуги</div>
              <h2 className="section-title section-title--white">Что мы предлагаем</h2>
            </div>
            <Link to="/services" className="btn btn--outline">
              Все услуги →
            </Link>
          </div>
          <div className="services-row">
            {SERVICES_PREVIEW.map((s, i) => (
              <div className="service-card fade-up" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="service-card__icon">{s.emoji}</div>
                <div className="service-card__title">{s.title}</div>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КАРТА ЭКСПОРТА ───────────────────────── */}
      <section className="section map-section">
        <div className="container">
          <div className="map-section__header fade-up">
            <div>
              <div className="section-label">География</div>
              <h2 className="section-title section-title--white">
                Экспортируем в&nbsp;<span className="text-orange">8 стран</span> мира
              </h2>
              <p className="section-subtitle section-subtitle--white">
                Надёжные долгосрочные партнёрства по всей Евразии
              </p>
            </div>
          </div>

          <div className="map-wrapper fade-up">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 160, center: [60, 45] }}
              style={{ width: '100%', height: 'auto', background: '#1C1C1C' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map(geo => {
                    const id = String(geo.id);
                    const isPartner = PARTNER_IDS.has(id);
                    const isHome    = id === HOME_ID;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHome ? '#4CAF50' : isPartner ? '#F07500' : '#2A2A2A'}
                        stroke="#1C1C1C"
                        strokeWidth={0.5}
                        style={{
                          default:  { outline: 'none' },
                          hover:    { fill: isHome ? '#66BB6A' : isPartner ? '#FF8C00' : '#383838', outline: 'none' },
                          pressed:  { outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              {PARTNER_COUNTRIES.map(({ name, coords, home }) => (
                <Marker key={name} coordinates={coords}>
                  <circle r={5} fill={home ? '#4CAF50' : '#F07500'} stroke="white" strokeWidth={1.5} />
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="map-section__countries fade-up">
            {PARTNER_COUNTRIES.map(({ name, flag, home }) => (
              <div className="map-section__country-tag" key={name}>
                <span className={`map-section__dot${home ? ' map-section__dot--home' : ''}`} />
                {flag} {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ОБРАТНАЯ СВЯЗЬ ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="contact-form-section">
            <div className="fade-up">
              <div className="section-label">Напишите нам</div>
              <h2 className="section-title">Готовы ответить<br />на ваши вопросы</h2>
              <p className="section-subtitle">
                Оставьте заявку и мы свяжемся с вами в рабочее время.
              </p>
              <div style={{ marginTop: 36 }}>
                <div className="contact-form-info__item">
                  <div className="contact-form-info__icon">📞</div>
                  <div>
                    <div className="contact-form-info__label">Телефон</div>
                    <div className="contact-form-info__value">+375 (2354) 4-06-95</div>
                    <div className="contact-form-info__value">+375 33 324-20-10</div>
                  </div>
                </div>
                <div className="contact-form-info__item">
                  <div className="contact-form-info__icon">✉️</div>
                  <div>
                    <div className="contact-form-info__label">Email</div>
                    <div className="contact-form-info__value">elskles.info@gmail.com</div>
                  </div>
                </div>
                <div className="contact-form-info__item">
                  <div className="contact-form-info__icon">🕐</div>
                  <div>
                    <div className="contact-form-info__label">Режим работы</div>
                    <div className="contact-form-info__value">Пн–Пт: 8:00–17:00</div>
                  </div>
                </div>
                <div className="contact-form-info__item">
                  <div className="contact-form-info__icon">📍</div>
                  <div>
                    <div className="contact-form-info__label">Адрес</div>
                    <div className="contact-form-info__value">г. Ельск, Кочищанский тракт 6/1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
