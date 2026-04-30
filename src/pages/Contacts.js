import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { STAFF } from '../data/staff';

/* Yandex Maps: г. Ельск, Кочищанский тракт, 6к1 */
const YANDEX_EMBED = 'https://yandex.ru/map-widget/v1/?ll=29.1356817%2C51.7959557&z=17&text=%D0%95%D0%BB%D1%8C%D1%81%D0%BA%2C+%D0%9A%D0%BE%D1%87%D0%B8%D1%89%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D1%80%D0%B0%D0%BA%D1%82%2C+6%D0%BA1&l=map&lang=ru_RU';
const YANDEX_ROUTE = 'https://yandex.ru/maps/?text=%D0%95%D0%BB%D1%8C%D1%81%D0%BA%2C+%D0%9A%D0%BE%D1%87%D0%B8%D1%89%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%82%D1%80%D0%B0%D0%BA%D1%82%2C+6%D0%BA1&rtt=auto';

function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', phone:'', email:'', subject:'', message:'' });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  if (sent) return <div className="form__success" style={{ padding:32 }}>{t('form.success')}</div>;

  return (
    <form className="form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <h3 style={{ fontFamily:'var(--font-head)', fontSize:20, fontWeight:800, marginBottom:20 }}>
        {t('nav.write')}
      </h3>
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
        <label className="form__label">{t('form.message')} *</label>
        <textarea className="form__textarea" name="message" value={form.message} onChange={onChange} placeholder={t('form.messagePh')} rows={5} required />
      </div>
      <p className="form__note">{t('form.note')}</p>
      <button type="submit" className="btn btn--primary">{t('common.sendMessage')}</button>
    </form>
  );
}

export default function Contacts() {
  const { t, l } = useLanguage();
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{t('contacts.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('contacts.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('contacts.heroSub')}</p>
        </div>
      </section>

      {/* ── КОНТАКТЫ + ФОРМА ───────────────── */}
      <section className="section">
        <div className="container">
          <div className="contacts-grid">
            {/* Info card */}
            <div className="fade-up">
              <div className="contact-info-card">
                <div className="contact-info-card__title">{t('contacts.infoTitle')}</div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.address')}</div>
                    <div className="contact-info-row__value">{t('contacts.addressVal')}</div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.phone')}</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375235440695">+375 (2354) 4-06-95</a><br />
                      <a href="tel:+375235443328">+375 (2354) 4-43-28</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.mobile')}</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375333242010">+375 33 324-20-10</a><br />
                      <a href="tel:+375296072307">+375 29 607-23-07</a><br />
                      <a href="tel:+375291011317">+375 29 101-13-17</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">Email</div>
                    <div className="contact-info-row__value">
                      <a href="mailto:elskles.info@gmail.com">elskles.info@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.workHours')}</div>
                    <div className="contact-info-row__value">{t('contacts.workHoursVal')}</div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.details')}</div>
                    <div className="contact-info-row__value">ООО «Ельсклес»<br />УНП 490333750</div>
                  </div>
                </div>

                <div style={{ display:'flex', gap:10, marginTop:8, flexWrap:'wrap' }}>
                  <a href="https://wa.me/375333242010" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
                    WhatsApp
                  </a>
                  <a href="https://www.instagram.com/elskles.by" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="fade-up">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── СОТРУДНИКИ ──────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('contacts.staffTitle')}</div>
            <h2 className="section-title">{t('contacts.staffTitle')}</h2>
          </div>
          <div className="staff-grid">
            {STAFF.map((person, i) => (
              <div className="staff-card fade-up" key={person.id} style={{ transitionDelay:`${i*0.05}s` }}>
                <div className="staff-card__accent" />
                <div className="staff-card__info">
                  <div className="staff-card__name">{person.name}</div>
                  <div className="staff-card__pos">{l(person.position)}</div>
                  <a className="staff-card__phone" href={`tel:${person.phone.replace(/[\s\-()+]/g,'')}`}>
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ЯНДЕКС КАРТА ────────────────────── */}
      <section className="section--sm">
        <div className="container">
          <p className="map-hint fade-up">{t('contacts.mapHint')}</p>
          <div className="map-embed fade-up">
            <iframe
              title="Карта ООО Ельсклес"
              src={YANDEX_EMBED}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div style={{ marginTop:16, textAlign:'center' }} className="fade-up">
            <a
              href={YANDEX_ROUTE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {t('common.route')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
