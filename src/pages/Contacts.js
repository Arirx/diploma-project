import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { STAFF } from '../data/staff';
import { ReactComponent as MapPinIcon    } from '../assets/icons/contacts/map-pin.svg';
import { ReactComponent as PhoneIcon     } from '../assets/icons/contacts/phone.svg';
import { ReactComponent as SmartphoneIcon} from '../assets/icons/contacts/smartphone.svg';
import { ReactComponent as MailIcon      } from '../assets/icons/contacts/mail.svg';
import { ReactComponent as ClockIcon     } from '../assets/icons/contacts/clock.svg';
import { ReactComponent as BriefcaseIcon } from '../assets/icons/contacts/briefcase.svg';

/* Yandex Maps: г. Ельск, Кочищанский тракт, 6к1 */
const YANDEX_EMBED = 'https://yandex.ru/map-widget/v1/?um=constructor%3A06305ca10f3bbc72a4ef5d80f3a29e052f4ffd80e49beeef59925b4265726119&source=constructor';
const YANDEX_ROUTE = 'https://yandex.ru/maps/?ll=33.724814%2C53.946479&mode=routes&rtext=~51.795261%2C29.134296&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0NzUyOTc3ODUzEmzQkdC10LvQsNGA0YPRgdGMLCDQk9C-0LzQtdC70YzRgdC60LDRjyDQstC-0LHQu9Cw0YHRhtGMLCDQldC70YzRgdC6LCDQmtCw0YfRi9GI0YfQsNC90YHQutGWINGC0YDQsNC60YIsIDbQujEiCg0LE-lBFVkuT0I%2C&z=6.92';

function ContactForm() {
  const { t } = useLanguage();
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');
  const [form, setForm] = useState({ name:'', phone:'', email:'', subject:'', message:'' });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  if (sent) return <div className="form__success" style={{ padding:32 }}>{t('form.success')}</div>;

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Ошибка отправки');
      }
      setSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
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
      {error && <p style={{ color:'#dc2626', fontSize:13, margin:'0 0 8px' }}>{error}</p>}
      <p className="form__note">{t('form.note')}</p>
      <button type="submit" className="btn btn--primary" disabled={loading}>
        {loading ? '...' : t('common.sendMessage')}
      </button>
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
                    <MapPinIcon width="18" height="18" />
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.address')}</div>
                    <div className="contact-info-row__value">{t('contacts.addressVal')}</div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <PhoneIcon width="18" height="18" />
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.phone')}</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375235440695">+375 (2354) 4-06-95 — директор, зам. директора</a><br />
                      <a href="tel:+375235443328">+375 (2354) 4-43-28 — бухгалтерия </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <SmartphoneIcon width="18" height="18" />
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.mobile')}</div>
                    <div className="contact-info-row__value">
                      <a href="tel:+375333242010">+375 33 324-20-10</a><br />
                    </div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <MailIcon width="18" height="18" />
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
                    <ClockIcon width="18" height="18" />
                  </div>
                  <div>
                    <div className="contact-info-row__label">{t('contacts.workHours')}</div>
                    <div className="contact-info-row__value">{t('contacts.workHoursVal')}</div>
                  </div>
                </div>

                <div className="contact-info-row">
                  <div className="contact-info-row__icon">
                    <BriefcaseIcon width="18" height="18" />
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
                  <div className="staff-card__name">{l(person.name)}</div>
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
