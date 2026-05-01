import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../assets/images/logo/logo-footer.png';
import { ReactComponent as InstagramIcon } from '../assets/icons/components/instagram.svg';
import { ReactComponent as WhatsAppIcon  } from '../assets/icons/components/whatsapp.svg';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div>
            <div className="footer__logo">
              <div className="footer__logo-img-box">
                <img
                  src={logoImg}
                  alt="Ельсклес"
                  className="footer__logo-img"
                  onError={e => {
                    e.currentTarget.parentNode.style.display = 'none';
                    e.currentTarget.parentNode.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
              <div className="footer__logo-fallback" style={{ display:'none' }}>
                <div className="footer__logo-mark">🌲</div>
                <div className="footer__logo-name">ЕЛЬСКЛЕС</div>
              </div>
            </div>
            <p className="footer__desc">{t('footer.desc')}</p>
            <div className="footer__social">
              <a href="https://www.instagram.com/elskles.by" target="_blank" rel="noopener noreferrer"
                 className="footer__social-link" aria-label="Instagram">
                <InstagramIcon width="18" height="18" />
              </a>
              <a href="https://wa.me/375333242010" target="_blank" rel="noopener noreferrer"
                 className="footer__social-link" aria-label="WhatsApp">
                <WhatsAppIcon width="18" height="18" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer__col-title">{t('footer.nav')}</div>
            <nav className="footer__links">
              {[
                ['/',          'nav.home'],
                ['/about',     'nav.about'],
                ['/products',  'nav.products'],
                ['/services',  'nav.services'],
                ['/vacancies', 'nav.vacancies'],
                ['/delivery',  'nav.delivery'],
                ['/contacts',  'nav.contacts'],
              ].map(([to, key]) => (
                <Link key={to} to={to} className="footer__link">{t(key)}</Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <div className="footer__col-title">{t('footer.prod')}</div>
            <nav className="footer__links">
              {['Доска обрезная','Брус строительный','Шпала деревянная','Паллетная доска','Уголь древесный','Щепа и опилки']
                .map(item => <Link key={item} to="/products" className="footer__link">{item}</Link>)}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <div className="footer__col-title">{t('footer.contact')}</div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Адрес</span>
              <span>г. Ельск, Кочищанский тракт, 6к1</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Тел.</span>
              <a href="tel:+375235440695">+375 (2354) 4-06-95</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Моб.</span>
              <a href="tel:+375333242010">+375 33 324-20-10</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <a href="mailto:elskles.info@gmail.com">elskles.info@gmail.com</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Режим</span>
              <span>{t('footer.hours')}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} ООО «Ельсклес». {t('footer.rights')}</p>
          <p>УНП 490333750 · Гомельская обл., Беларусь</p>
        </div>
      </div>
    </footer>
  );
}
