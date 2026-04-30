import { createContext, useContext, useState } from 'react';
import ru from '../i18n/ru';
import en from '../i18n/en';
import by from '../i18n/by';

const TRANSLATIONS = { ru, en, by };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');

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
