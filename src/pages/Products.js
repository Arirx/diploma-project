import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import useFadeUp from '../hooks/useFadeUp';
import { PRODUCTS, PRODUCT_GROUPS } from '../data/products';

export default function Products() {
  const { t, l, lang } = useLanguage();
  const [active, setActive] = useState('all');
  useFadeUp();

  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.group === active);

  return (
    <>
      {/* ── PAGE HERO ──────────────────────── */}
      <section className="page-hero gray-after">
        <div className="container">
          <div className="section-label">{t('products.heroLabel')}</div>
          <h1 className="section-title section-title--white">{t('products.heroTitle')}</h1>
          <p className="section-subtitle section-subtitle--white">{t('products.heroSub')}</p>
        </div>
      </section>

      {/* ── КАТАЛОГ ────────────────────────── */}
      <section className="section section--gray">
        <div className="container">
          {/* Filters */}
          <div className="products-filter fade-up">
            {Object.entries(PRODUCT_GROUPS).map(([key, names]) => (
              <button
                key={key}
                className={`filter-btn${active === key ? ' active' : ''}`}
                onClick={() => setActive(key)}
              >
                {l(names)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="products-page-grid">
            {filtered.map((p, i) => {
              const { ru: specs } = p.specs;
              return (
                <div
                  className="product-detail fade-up"
                  key={p.id}
                  style={{ transitionDelay:`${(i % 3) * 0.08}s` }}
                >
                  {/* Thumbnail */}
                  <div className="product-detail__thumb" style={{ background: p.thumbBg }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={l(p.title)}
                        style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.85 }}
                        onError={e => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span style={{ fontSize:64, display: p.image ? 'none' : 'block' }}>{p.emoji}</span>
                  </div>

                  <div className="product-detail__body">
                    <div className="product-detail__cat">{l(p.cat)}</div>
                    <div className="product-detail__title">{l(p.title)}</div>
                    <p className="product-detail__desc">{l(p.desc)}</p>

                    {/* Specs */}
                    <div className="product-detail__specs">
                      {(p.specs[lang] ?? specs).map(([k, v]) => (
                        <div className="product-detail__spec" key={k}>
                          <span className="product-detail__spec-key">{k}</span>
                          <span className="product-detail__spec-val">{v}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contacts" className="btn btn--primary btn--sm">
                      {t('common.requestPrice')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-up">
            <div>
              <div className="cta-banner__title">{t('products.ctaTitle')}</div>
              <div className="cta-banner__sub">{t('products.ctaSub')}</div>
            </div>
            <div className="cta-banner__actions">
              <Link to="/contacts" className="btn btn--white btn--lg">{t('products.ctaBtn')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
