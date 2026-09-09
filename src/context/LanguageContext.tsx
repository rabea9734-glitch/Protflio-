import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  isArabic: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ar;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  isArabic: false,
  toggleLanguage: () => {},
  setLanguage: () => {},
  t: translations.en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('farahat_portfolio_lang');
    if (saved === 'ar' || saved === 'en') {
      return saved;
    }
    return 'en'; // Default to English as primary language
  });

  useEffect(() => {
    // Update HTML attributes for layout & accessibility
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('farahat_portfolio_lang', language);
    } catch {
      // localStorage fallback
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const isArabic = language === 'ar';
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, isArabic, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
