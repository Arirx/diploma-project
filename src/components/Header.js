import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/images/logo/logo-header.png';
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
            src={logoImg}
            alt="Ельсклес"
            className="header__logo-img"
            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
          />
          <div className="header__logo-mark" style={{ display: 'none' }}>🌲</div>
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

          <a href="tel:+375333242010" className="header__phone header__cta">
            +375 33 324-20-10
          </a>

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
