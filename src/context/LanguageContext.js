import { createContext, useContext, useState } from 'react';
import ru from '../i18n/ru';
import en from '../i18n/en';
import by from '../i18n/by';

const TRANSLATIONS = { ru, en, by };

const LanguageContext = createContext(null);

const SUPPORTED = ['ru', 'en', 'by'];

function getInitialLang() {
  const saved = localStorage.getItem('lang');
  return SUPPORTED.includes(saved) ? saved : 'ru';
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  function setLang(newLang) {
    localStorage.setItem('lang', newLang);
    setLangState(newLang);
  }

  /** Resolve a dotted key, e.g. t('nav.home') */
  function t(key) {
    const keys = key.split('.');
    let val = TRANSLATIONS[lang];
    for (const k of keys) val = val?.[k];
    if (val !== undefined) return val;
    // fallback to Russian
    val = TRANSLATIONS.ru;
    for (const k of keys) val = val?.[k];
    return val ?? key;
  }

  /** Pick localised field from a data object: l({ ru:'...', en:'...', by:'...' }) */
  function l(obj) {
    return obj?.[lang] ?? obj?.ru ?? '';
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, l }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
