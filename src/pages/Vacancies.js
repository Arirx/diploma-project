import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { VACANCIES, BENEFITS } from '../data/vacancies';

const B = ({ children }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const BENEFIT_ICONS = [
  <B key="clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></B>,
  <B key="bus"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 11h20"/><path d="M8 5v6m8-6v6"/><circle cx="7.5" cy="19" r="1"/><circle cx="16.5" cy="19" r="1"/></B>,
  <B key="shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></B>,
  <B key="hardhat"><path d="M2 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1z"/><path d="M10 10V6a2 2 0 0 1 4 0v4"/><path d="M4 18c0-4 2-7.5 3.5-8.5"/><path d="M20 18c0-4-2-7.5-3.5-8.5"/></B>,
  <B key="book"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></B>,
  <B key="trending"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></B>,
];

export default function Vacancies() {
  const { t, l } = useLanguage();
  const langCode = useLanguage().lang;
  useFadeUp();

  return (
    <>
      {/* ── PAGE HERO ──────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{t('vacancies.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('vacancies.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('vacancies.heroSub')}</p>
        </div>
      </section>

      {/* ── ОТКРЫТЫЕ ВАКАНСИИ ──────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('vacancies.openLabel')}</div>
            <h2 className="section-title">{t('vacancies.openTitle')}</h2>
            <p className="section-subtitle">
              {VACANCIES.length} {t('vacancies.openLabel').toLowerCase()} · {t('common.fullTime')}
            </p>
          </div>

          <div className="vacancies-list">
            {VACANCIES.map((v, i) => {
              const reqs = v.requirements[langCode] ?? v.requirements.ru ?? [];
              return (
                <div className="vacancy-card fade-up" key={v.id} style={{ flexDirection:'column', alignItems:'flex-start', gap:16, transitionDelay:`${i*0.06}s` }}>
                  {/* Header row */}
                  <div style={{ display:'flex', justifyContent:'space-between', width:'100%', flexWrap:'wrap', gap:10 }}>
                    <div>
                      <div className="vacancy-card__title">{l(v.title)}</div>
                      <div className="vacancy-card__meta">
                        <span className="vacancy-card__badge">
                          <span className="vacancy-card__badge-dot" />
                          {l(v.location)}
                        </span>
                        <span className="vacancy-card__badge">
                          <span className="vacancy-card__badge-dot" />
                          {l(v.type)}
                        </span>
                        <span className="vacancy-card__badge">
                          <span className="vacancy-card__badge-dot" />
                          {l(v.category)}
                        </span>
                      </div>
                    </div>
                    <span className="vacancy-card__status">{t('common.openVacancy')}</span>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize:14, color:'var(--clr-gray-600)', lineHeight:1.65, margin:0 }}>
                    {l(v.desc)}
                  </p>

                  {/* Requirements — shown inline if any */}
                  {reqs.length > 0 && (
                    <div className="vacancy-reqs">
                      <div className="vacancy-reqs__label">{t('common.requirements')}:</div>
                      <ul className="vacancy-reqs__list">
                        {reqs.map(r => (
                          <li key={r} className="vacancy-reqs__item">
                            <span className="vacancy-reqs__check">✓</span> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {reqs.length === 0 && (
                    <p className="vacancy-reqs__none">{t('vacancies.noReqs')}</p>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── УСЛОВИЯ ─────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-label">{t('vacancies.benefitsLabel')}</div>
            <h2 className="section-title">{t('vacancies.benefitsTitle')}</h2>
            <p className="section-subtitle">{t('vacancies.benefitsSub')}</p>
          </div>
          <div className="benefits-grid">
            {BENEFITS.map((b, i) => (
              <div className="benefit-card fade-up" key={i} style={{ transitionDelay:`${i*0.07}s` }}>
                <div className="benefit-card__icon">{BENEFIT_ICONS[i]}</div>
                <div className="benefit-card__title">{l(b.title)}</div>
                <p className="benefit-card__text">{l(b.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">{t('vacancies.ctaTitle')}</div>
              <div className="cta-banner__sub">{t('vacancies.ctaSub')}</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">{t('vacancies.ctaBtn')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
