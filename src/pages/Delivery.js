import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';

const D = ({ children }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const METHOD_ICONS = [
  <D key="truck"><rect x="1" y="3" width="15" height="12" rx="1"/><path d="M16 8h4l3 5v4h-7z"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/></D>,
  <D key="warehouse"><path d="M2 20V8l10-6 10 6v12H2z"/><path d="M9 20v-6h6v6"/></D>,
  <D key="train"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><circle cx="8" cy="17" r="1.5"/><circle cx="16" cy="17" r="1.5"/><path d="m8 19-2 3m10-3 2 3"/></D>,
  <D key="globe"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></D>,
];

const PAYMENT_ICONS = [
  <D key="card"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></D>,
  <D key="banknote"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></D>,
  <D key="globe2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></D>,
  <D key="clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></D>,
];

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
            {methods.map((m, i) => (
              <div className="delivery-method fade-up" key={i} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="delivery-method__icon">{METHOD_ICONS[i]}</div>
                <div className="delivery-method__title">{m.title}</div>
                <p className="delivery-method__desc">{m.desc}</p>
                <div className="delivery-method__features">
                  {m.features.map(f => (
                    <div className="delivery-method__feature" key={f}>{f}</div>
                  ))}
                </div>
              </div>
            ))}
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
            {payments.map((p, i) => (
              <div className="payment-card fade-up" key={i} style={{ transitionDelay:`${i*0.08}s` }}>
                <div className="payment-card__icon">{PAYMENT_ICONS[i]}</div>
                <div className="payment-card__title">{p.title}</div>
                <p className="payment-card__text">{p.text}</p>
              </div>
            ))}
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
