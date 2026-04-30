import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',          label: 'Главная'         },
  { to: '/about',     label: 'О компании'      },
  { to: '/products',  label: 'Продукция'       },
  { to: '/services',  label: 'Услуги'          },
  { to: '/vacancies', label: 'Вакансии'        },
  { to: '/delivery',  label: 'Доставка и оплата' },
  { to: '/contacts',  label: 'Контакты'        },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <div className="header__logo-mark">🌲</div>
          <div>
            <div className="header__logo-name">ЕЛЬСКЛЕС</div>
            <div className="header__logo-sub">Пиломатериалы · Беларусь</div>
          </div>
        </Link>

        <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `header__nav-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contacts" className="btn btn--primary btn--sm header__cta" onClick={closeMenu}>
          Написать нам
        </Link>

        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Меню"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
