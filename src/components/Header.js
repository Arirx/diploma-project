import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LOGO_URL = 'https://elskles.by/img/200x0/ac9d8977deb65139ef9783d66ee93739.jpg';
const LANGS = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'by', label: 'BY' },
];

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const NAV_LINKS = [
    { to: '/',          key: 'home'     },
    { to: '/about',     key: 'about'    },
    { to: '/products',  key: 'products' },
    { to: '/services',  key: 'services' },
    { to: '/vacancies', key: 'vacancies'},
    { to: '/delivery',  key: 'delivery' },
    { to: '/contacts',  key: 'contacts' },
  ];

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__inner">

        {/* Logo */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img
            src={LOGO_URL}
            alt="Ельсклес"
            className="header__logo-img"
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
          />
          {/* Fallback if image fails */}
          <div className="header__logo-mark" style={{ display: 'none' }}>🌲</div>
          <div className="header__logo-text">
            <div className="header__logo-name">ЕЛЬСКЛЕС</div>
            <div className="header__logo-sub">
              {lang === 'en' ? 'Timber · Belarus' : lang === 'by' ? 'Піламатэрыялы · Беларусь' : 'Пиломатериалы · Беларусь'}
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `header__nav-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {t(`nav.${key}`)}
            </NavLink>
          ))}

          {/* Language switcher (inside nav on mobile) */}
          <div className="lang-switcher lang-switcher--mobile">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' lang-btn--active' : ''}`}
                onClick={() => { setLang(code); closeMenu(); }}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Right side controls */}
        <div className="header__right">
          {/* Language switcher (desktop) */}
          <div className="lang-switcher lang-switcher--desktop">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' lang-btn--active' : ''}`}
                onClick={() => setLang(code)}
              >
                {label}
              </button>
            ))}
          </div>

          <Link to="/contacts" className="btn btn--primary btn--sm header__cta" onClick={closeMenu}>
            {t('nav.write')}
          </Link>

          <button
            className={`header__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Меню"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>
  );
}
