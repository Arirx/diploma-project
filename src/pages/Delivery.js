import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';
import useFadeUp from '../hooks/useFadeUp';
import { ReactComponent as TruckIcon     } from '../assets/icons/delivery/methods/truck.svg';
import { ReactComponent as WarehouseIcon } from '../assets/icons/delivery/methods/warehouse.svg';
import { ReactComponent as TrainIcon     } from '../assets/icons/delivery/methods/train.svg';
import { ReactComponent as GlobeIcon     } from '../assets/icons/delivery/methods/globe.svg';
import { ReactComponent as CreditCardIcon} from '../assets/icons/delivery/payments/credit-card.svg';
import { ReactComponent as BanknoteIcon  } from '../assets/icons/delivery/payments/banknote.svg';
import { ReactComponent as GlobePayIcon  } from '../assets/icons/delivery/payments/globe.svg';
import { ReactComponent as ClockIcon     } from '../assets/icons/delivery/payments/clock.svg';

const METHOD_ICONS  = [TruckIcon, WarehouseIcon, TrainIcon, GlobeIcon];
const PAYMENT_ICONS = [CreditCardIcon, BanknoteIcon, GlobePayIcon, ClockIcon];

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
  const { t } = useLanguage();
  useFadeUp();

  const methods  = t('delivery.methods');
  const payments = t('delivery.payments');
  const faq      = t('delivery.faq');

  return (
    <>
      <SEOHead page="delivery" />
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{t('delivery.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('delivery.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('delivery.heroSub')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('delivery.delivLabel')}</div>
            <h2 className="section-title">{t('delivery.delivTitle')}</h2>
            <p className="section-subtitle">{t('delivery.delivSub')}</p>
          </div>
          <div className="delivery-methods">
            {methods.map((m, i) => {
              const MIcon = METHOD_ICONS[i];
              return (
              <div className="delivery-method fade-up" key={i} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="delivery-method__icon icon-box"><MIcon width={30} height={30} /></div>
                <div className="delivery-method__title">{m.title}</div>
                <p className="delivery-method__desc">{m.desc}</p>
                <div className="delivery-method__features">
                  {m.features.map(f => (
                    <div className="delivery-method__feature" key={f}>{f}</div>
                  ))}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('delivery.payLabel')}</div>
            <h2 className="section-title section-title--white">{t('delivery.payTitle')}</h2>
            <p className="section-subtitle section-subtitle--white">{t('delivery.paySub')}</p>
          </div>
          <div className="payment-grid">
            {payments.map((p, i) => {
              const PIcon = PAYMENT_ICONS[i];
              return (
                <div className="payment-card fade-up" key={i} style={{ transitionDelay:`${i*0.08}s` }}>
                  <div className="payment-card__icon icon-box"><PIcon width={26} height={26} /></div>
                  <div className="payment-card__title">{p.title}</div>
                  <p className="payment-card__text">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('delivery.faqLabel')}</div>
            <h2 className="section-title">{t('delivery.faqTitle')}</h2>
          </div>
          <div className="faq-list fade-up">
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">{t('delivery.ctaTitle')}</div>
              <div className="cta-banner__sub">{t('delivery.ctaSub')}</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">{t('delivery.ctaBtn1')}</Link>
              <a href="tel:+375235440695" className="btn btn--outline btn--lg">{t('delivery.ctaBtn2')}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
