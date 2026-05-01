import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { SERVICES } from '../data/services';
import { ReactComponent as ZapIcon      } from '../assets/icons/zap.svg';
import { ReactComponent as WrenchIcon   } from '../assets/icons/wrench.svg';
import { ReactComponent as ClipboardIcon} from '../assets/icons/clipboard.svg';
import { ReactComponent as BanknoteIcon } from '../assets/icons/banknote.svg';
import { ReactComponent as TrainIcon    } from '../assets/icons/train.svg';

const SVC = ({ children }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const SERVICE_ICONS = {
  drying: (
    <SVC>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </SVC>
  ),
  'transport-lumber': (
    <SVC>
      <rect x="1" y="3" width="15" height="12" rx="1"/>
      <path d="M16 8h4l3 5v4h-7z"/>
      <circle cx="5" cy="18" r="2"/>
      <circle cx="19" cy="18" r="2"/>
    </SVC>
  ),
  'transport-chips': (
    <SVC>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </SVC>
  ),
  loading: (
    <SVC>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </SVC>
  ),
  harvesting: (
    <SVC>
      <path d="M17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3A1 1 0 0 1 15.2 9H15l2.7 3.3a1 1 0 0 1-.7 1.7z"/>
      <line x1="12" y1="22" x2="12" y2="19"/>
    </SVC>
  ),
};

const WHY_ICONS = [ZapIcon, WrenchIcon, ClipboardIcon, BanknoteIcon, TrainIcon];

export default function Services() {
  const { t, l } = useLanguage();
  useFadeUp();

  const WHY = t('services.why');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{t('services.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('services.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('services.heroSub')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {SERVICES.map((s, i) => (
              <div className="service-item fade-up" key={s.id} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="service-item__icon-wrap">
                  {SERVICE_ICONS[s.id] ?? null}
                </div>
                <div className="service-item__content">
                  <div className="service-item__title">{l(s.title)}</div>
                  <p className="service-item__desc">{l(s.desc)}</p>
                  <div className="service-item__tags">
                    {l(s.tags).map(tag => (
                      <span className="service-item__tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('services.whyLabel')}</div>
            <h2 className="section-title">{t('services.whyTitle')}</h2>
          </div>
          <div className="values-grid">
            {WHY.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <div className="value-card fade-up" key={i} style={{ transitionDelay:`${i*0.07}s` }}>
                  <div className="value-card__icon icon-box"><Icon width={24} height={24} /></div>
                  <div className="value-card__title">{w.title}</div>
                  <p className="value-card__text">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">{t('services.ctaTitle')}</div>
              <div className="cta-banner__sub">{t('services.ctaSub')}</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">{t('services.ctaBtn1')}</Link>
              <a href="tel:+375333242010" className="btn btn--outline btn--lg">{t('services.ctaBtn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
