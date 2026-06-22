import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../data/seo';

const LANG_TO_HTML = { ru: 'ru', en: 'en', by: 'be' };

export default function SEOHead({ page }) {
  const { lang } = useLanguage();
  const data = SEO[page]?.[lang] ?? SEO[page]?.ru;
  if (!data) return null;

  const htmlLang = LANG_TO_HTML[lang] ?? 'ru';

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords"    content={data.keywords} />
      <meta property="og:title"       content={data.title} />
      <meta property="og:description" content={data.description} />
    </Helmet>
  );
}
