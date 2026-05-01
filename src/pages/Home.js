import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import {
  PARTNER_COUNTRIES,
  PARTNER_COUNTRY_IDS,
  HOME_COUNTRY_ID,
  COUNTRY_NAMES,
  COUNTRY_COORDS,
} from '../data/countries';
import { PRODUCTS } from '../data/products';
import { SERVICES } from '../data/services';
import productionPhoto from '../assets/images/production-photo.jpg';
import { ReactComponent as CheckIcon        } from '../assets/icons/home/check.svg';
import { ReactComponent as FlameIcon        } from '../assets/icons/flame.svg';
import { ReactComponent as TruckIcon        } from '../assets/icons/truck.svg';
import { ReactComponent as PackageIcon      } from '../assets/icons/package.svg';
import { ReactComponent as TreeIcon         } from '../assets/icons/tree.svg';
import { ReactComponent as LeafIcon         } from '../assets/icons/leaf.svg';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

/* ── Contact form ─────────────────────────────────────────── */
function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent]   = useState(false);
  const [form, setForm]   = useState({ name:'', phone:'', email:'', subject:'', message:'' });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  if (sent) return <div className="form__success">{t('form.success')}</div>;

  return (
    <form className="form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <div className="form__row">
        <div className="form__group">
          <label className="form__label">{t('form.name')}</label>
          <input className="form__input" name="name" value={form.name} onChange={onChange} placeholder={t('form.namePh')} required />
        </div>
        <div className="form__group">
          <label className="form__label">{t('form.phone')}</label>
          <input className="form__input" name="phone" value={form.phone} onChange={onChange} placeholder={t('form.phonePh')} required />
        </div>
      </div>
      <div className="form__group">
        <label className="form__label">{t('form.email')}</label>
        <input className="form__input" type="email" name="email" value={form.email} onChange={onChange} placeholder={t('form.emailPh')} />
      </div>
      <div className="form__group">
        <label className="form__label">{t('form.subject')}</label>
        <select className="form__select" name="subject" value={form.subject} onChange={onChange}>
          <option value="">{t('form.subjectPh')}</option>
          {t('form.topics').map(topic => <option key={topic}>{topic}</option>)}
        </select>
      </div>
      <div className="form__group">
        <label className="form__label">{t('form.message')}</label>
        <textarea className="form__textarea" name="message" value={form.message} onChange={onChange} placeholder={t('form.messagePh')} rows={4} />
      </div>
      <p className="form__note">{t('form.note')}</p>
      <button type="submit" className="btn btn--primary">{t('form.sendMessage') ?? t('common.sendMessage')}</button>
    </form>
  );
}

/* ── World Map with tooltip ───────────────────────────────── */
function ExportMap() {
  const { t, lang } = useLanguage();
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const getCountryName = (id) => {
    const numId = Number(id);
    return COUNTRY_NAMES[numId]?.[lang] ?? COUNTRY_NAMES[numId]?.ru ?? null;
  };

  const onEnter = (geo, e) => {
    const name = getCountryName(geo.id);
    if (name) setTooltip({ visible: true, content: name, x: e.clientX, y: e.clientY });
  };
  const onMove  = (e) => setTooltip(p => ({ ...p, x: e.clientX, y: e.clientY }));
  const onLeave = ()  => setTooltip(p => ({ ...p, visible: false }));

  return (
    <>
      {tooltip.visible && (
        <div className="map-tooltip" style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}>
          {tooltip.content}
        </div>
      )}
      <div className="map-wrapper fade-up">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 155, center: [58, 43] }}
          style={{ width: '100%', height: 'auto', background: '#1C1C1C', display: 'block' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map(geo => {
                const numId = Number(geo.id);
                const isHome    = numId === HOME_COUNTRY_ID;
                const isPartner = PARTNER_COUNTRY_IDS.has(numId);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHome ? '#4CAF50' : isPartner ? '#F07500' : '#2A2A2A'}
                    stroke="#1C1C1C"
                    strokeWidth={0.5}
                    onMouseEnter={e => onEnter(geo, e)}
                    onMouseMove={onMove}
                    onMouseLeave={onLeave}
                    style={{
                      default: { outline: 'none' },
                      hover:   { fill: isHome ? '#66BB6A' : isPartner ? '#FF8C00' : '#383838', outline: 'none', cursor: 'default' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {PARTNER_COUNTRIES.map(({ id, name, home }) => {
            const coords = COUNTRY_COORDS[id];
            if (!coords) return null;
            return (
              <Marker key={id} coordinates={coords}>
                <circle r={5} fill={home ? '#4CAF50' : '#F07500'} stroke="white" strokeWidth={1.5} />
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Country grid */}
      <div className="countries-grid fade-up">
        {PARTNER_COUNTRIES.map(({ id, name, flag, home }) => (
          <div className={`country-card${home ? ' country-card--home' : ''}`} key={id}>
            <span className="country-card__flag">{flag}</span>
            <span className="country-card__name">{name[lang] ?? name.ru}</span>
            <span className="country-card__role">
              {home ? t('home.homeCountry') : t('home.partner')}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

const HOME_SVC_ICONS = {
  drying:           FlameIcon,
  'transport-lumber': TruckIcon,
  'transport-chips':  LeafIcon,
  loading:          PackageIcon,
  harvesting:       TreeIcon,
};

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  const { t, l } = useLanguage();
  useFadeUp();

  const stats = t('home.stats');
  const features = t('home.features');

  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-pattern" />
        <div className="hero__glow" />
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            {t('home.heroTag')}
          </div>
          <h1 className="hero__title">
            {t('home.heroTitle')[0]}<br />
            {t('home.heroTitle')[1]}{' '}
            <span>{t('home.heroTitle')[2]}</span>
          </h1>
          <p className="hero__subtitle">{t('home.heroSub')}</p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary btn--lg">{t('home.heroCta1')}</Link>
            <Link to="/contacts" className="btn btn--outline btn--lg">{t('home.heroCta2')}</Link>
          </div>
          <div className="hero__stats">
            {stats.map(({ num, label }, i) => (
              <div key={i}>
                <div className="hero__stat-num">{num}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── О КОМПАНИИ (тизер) ──────────────── */}
      <section className="section">
        <div className="container">
          <div className="about-teaser">
            <div className="about-teaser__visual fade-up">
              <div className="about-teaser__img-wrap">
                <img
                  src={productionPhoto}
                  alt="Производство Ельсклес"
                  style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.85 }}
                />
              </div>
              <div className="about-teaser__badge">
                <div className="about-teaser__badge-num">2010</div>
                <div className="about-teaser__badge-text">{t('home.stats')[3]?.label}</div>
              </div>
            </div>
            <div className="fade-up">
              <div className="section-label">{t('home.aboutLabel')}</div>
              <h2 className="section-title">{t('home.aboutTitle')}</h2>
              <p className="section-subtitle">{t('home.aboutText')}</p>
              <div className="about-teaser__features">
                {features.map((f, i) => (
                  <div className="about-teaser__feature" key={i}>
                    <div className="about-teaser__feature-icon">
                      <CheckIcon width="18" height="18" />
                    </div>
                    <div>
                      <div className="about-teaser__feature-title">{f.title}</div>
                      <div className="about-teaser__feature-text">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:32 }}>
                <Link to="/about" className="btn btn--outline-dark">{t('home.aboutCta')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПРОДУКЦИЯ (превью) ──────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header--flex fade-up">
            <div>
              <div className="section-label">{t('home.productsLabel')}</div>
              <h2 className="section-title">{t('home.productsTitle')}</h2>
            </div>
            <Link to="/products" className="btn btn--outline-dark">{t('common.allProducts')}</Link>
          </div>
          <div className="products-grid">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <div className="product-card fade-up" key={p.id} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="product-card__thumb" style={{ background: p.thumbBg }}>
                  <span style={{ fontSize:64 }}>{p.emoji}</span>
                </div>
                <div className="product-card__body">
                  <div className="product-card__cat">{l(p.cat)}</div>
                  <div className="product-card__title">{l(p.title)}</div>
                  <p className="product-card__desc">{l(p.desc)}</p>
                  <Link to="/products" className="btn btn--outline-dark btn--sm">{t('common.learnMore')}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── УСЛУГИ (превью) ─────────────────── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header--flex fade-up">
            <div>
              <div className="section-label">{t('home.servicesLabel')}</div>
              <h2 className="section-title section-title--white">{t('home.servicesTitle')}</h2>
            </div>
            <Link to="/services" className="btn btn--outline">{t('common.allServices')}</Link>
          </div>
          <div className="services-row">
            {SERVICES.slice(0, 5).map((s, i) => {
              const Icon = HOME_SVC_ICONS[s.id];
              return (
                <div className="service-card fade-up" key={s.id} style={{ transitionDelay:`${i*0.08}s` }}>
                  <div className="service-card__icon icon-box">
                    {Icon && <Icon width={24} height={24} />}
                  </div>
                  <div className="service-card__title">{l(s.title)}</div>
                  <p className="service-card__desc">{l(s.desc)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── КАРТА ЭКСПОРТА ──────────────────── */}
      <section className="section map-section">
        <div className="container">
          <div className="map-section__header fade-up">
            <div>
              <div className="section-label">{t('home.mapLabel')}</div>
              <h2 className="section-title section-title--white">
                {t('home.mapTitle')}{' '}
                <span className="text-orange">{t('home.mapTitleSuffix')}</span>
              </h2>
              <p className="section-subtitle section-subtitle--white">{t('home.mapSub')}</p>
            </div>
          </div>
          <ExportMap />
        </div>
      </section>

      {/* ── ОБРАТНАЯ СВЯЗЬ ──────────────────── */}
      <section className="section">
        <div className="container">
          <div className="contact-form-section">
            <div className="fade-up">
              <div className="section-label">{t('home.contactLabel')}</div>
              <h2 className="section-title">{t('home.contactTitle')}</h2>
              <p className="section-subtitle">{t('home.contactSub')}</p>
              <div style={{ marginTop:36 }}>
                {[
                  { label: 'Телефон', val: <a href='tel:+375333242010'>{'+375 33 324-20-10'}</a> },
                  { label:'Email',    val: <a href='mailto:elskles.info@gmail.com'>{'elskles.info@gmail.com'}</a> },
                  { label:'Email',    val:'elskles.info@gmail.com' },
                  { label:'Работаем', val:'Пн–Пт: 8:00–17:00' },
                  { label:'Адрес',    val:'г. Ельск, Кочищанский тракт, 6к1' },
                ].map(({ label, val }) => (
                  <div className="contact-form-info__item" key={label}>
                    <div className="contact-form-info__dot" />
                    <div>
                      <div className="contact-form-info__label">{label}</div>
                      <div className="contact-form-info__value">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up"><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
