import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { SERVICES } from '../data/services';
import { ReactComponent as ZapIcon      } from '../assets/icons/services/why/zap.svg';
import { ReactComponent as WrenchIcon   } from '../assets/icons/services/why/wrench.svg';
import { ReactComponent as ClipboardIcon} from '../assets/icons/services/why/clipboard.svg';
import { ReactComponent as BanknoteIcon } from '../assets/icons/services/why/banknote.svg';
import { ReactComponent as TrainIcon    } from '../assets/icons/services/why/train.svg';
import { ReactComponent as FlameIcon    } from '../assets/icons/services/items/flame.svg';
import { ReactComponent as TruckIcon    } from '../assets/icons/services/items/truck.svg';
import { ReactComponent as LeafIcon     } from '../assets/icons/services/items/leaf.svg';
import { ReactComponent as PackageIcon  } from '../assets/icons/services/items/package.svg';
import { ReactComponent as TreeIcon     } from '../assets/icons/services/items/tree.svg';

const SERVICE_ICONS = {
  drying:             FlameIcon,
  'transport-lumber': TruckIcon,
  'transport-chips':  LeafIcon,
  loading:            PackageIcon,
  harvesting:         TreeIcon,
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
            {SERVICES.map((s, i) => {
              const SvcIcon = SERVICE_ICONS[s.id];
              return (
              <div className="service-item fade-up" key={s.id} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="service-item__icon-wrap">
                  {SvcIcon && <SvcIcon width={26} height={26} />}
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
            );
            })}
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
