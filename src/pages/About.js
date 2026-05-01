import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { ReactComponent as TrophyIcon    } from '../assets/icons/trophy.svg';
import { ReactComponent as ShieldIcon    } from '../assets/icons/shield.svg';
import { ReactComponent as GlobeIcon     } from '../assets/icons/globe.svg';
import { ReactComponent as LeafIcon      } from '../assets/icons/leaf.svg';
import { ReactComponent as LightbulbIcon } from '../assets/icons/lightbulb.svg';
import { ReactComponent as UsersIcon     } from '../assets/icons/users.svg';
import { ReactComponent as WrenchIcon    } from '../assets/icons/wrench.svg';
import { ReactComponent as FlameIcon     } from '../assets/icons/flame.svg';
import { ReactComponent as SettingsIcon  } from '../assets/icons/settings.svg';
import { ReactComponent as TruckIcon     } from '../assets/icons/truck.svg';
import { ReactComponent as PackageIcon   } from '../assets/icons/package.svg';
import { ReactComponent as LayersIcon    } from '../assets/icons/layers.svg';
import { ReactComponent as TrainIcon     } from '../assets/icons/train.svg';

const VALUE_ICONS = [TrophyIcon, ShieldIcon, GlobeIcon, LeafIcon, LightbulbIcon, UsersIcon];
const PROD_ICONS  = [WrenchIcon, FlameIcon, SettingsIcon, TruckIcon, PackageIcon, LayersIcon, TrainIcon];

export default function About() {
  const { t } = useLanguage();
  useFadeUp();

  const timeline   = t('about.timeline');
  const values     = t('about.values');
  const production = t('about.production');

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{t('about.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('about.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('about.heroSub')}</p>
        </div>
      </section>

      {/* История */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="fade-up">
              <div className="section-label">{t('about.historyLabel')}</div>
              <h2 className="section-title">{t('about.historyTitle')}</h2>
              <p className="section-subtitle">{t('about.historySub')}</p>
              <div style={{ marginTop:36 }}>
                <Link to="/contacts" className="btn btn--primary">{t('common.contactUs')}</Link>
              </div>
            </div>
            <div className="timeline fade-up">
              {timeline.map(({ year, title, text }, i) => (
                <div className="timeline__item" key={year}>
                  <div className="timeline__left">
                    <div className="timeline__year">{year}</div>
                    {i < timeline.length - 1 && <div className="timeline__line" />}
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

      {/* Ценности */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('about.valuesLabel')}</div>
            <h2 className="section-title">{t('about.valuesTitle')}</h2>
            <p className="section-subtitle">{t('about.valuesSub')}</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div className="value-card fade-up" key={i} style={{ transitionDelay:`${i*0.07}s` }}>
                  <div className="value-card__icon icon-box"><Icon width={24} height={24} /></div>
                  <div className="value-card__title">{v.title}</div>
                  <p className="value-card__text">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Производство */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('about.prodLabel')}</div>
            <h2 className="section-title section-title--white">{t('about.prodTitle')}</h2>
            <p className="section-subtitle section-subtitle--white">{t('about.prodSub')}</p>
          </div>
          <div className="production-grid">
            {production.map((p, i) => {
              const Icon = PROD_ICONS[i];
              return (
                <div className="production-item fade-up" key={i} style={{ transitionDelay:`${i*0.07}s` }}>
                  <div className="production-item__icon icon-box"><Icon width={24} height={24} /></div>
                  <div>
                    <div className="production-item__title">{p.title}</div>
                    <p className="production-item__text">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">{t('about.ctaTitle')}</div>
              <div className="cta-banner__sub">{t('about.ctaSub')}</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/products" className="btn btn--white btn--lg">{t('about.ctaBtn1')}</Link>
              <Link to="/contacts" className="btn btn--outline btn--lg">{t('about.ctaBtn2')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
