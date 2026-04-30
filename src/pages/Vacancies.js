import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { VACANCIES, BENEFITS } from '../data/vacancies';

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
                          <span className="vacancy-card__badge-icon">📍</span>
                          {l(v.location)}
                        </span>
                        <span className="vacancy-card__badge">
                          <span className="vacancy-card__badge-icon">⏱️</span>
                          {l(v.type)}
                        </span>
                        <span className="vacancy-card__badge">
                          <span className="vacancy-card__badge-icon">🏷️</span>
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

                  <Link to="/contacts" className="btn btn--primary btn--sm">{t('common.apply')}</Link>
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
                <div className="benefit-card__icon">{b.emoji}</div>
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
