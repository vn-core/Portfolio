import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    console.log('Toggling language from:', language);
    setLanguage(prevLanguage => {
      const newLanguage = prevLanguage === 'en' ? 'es' : 'en';
      console.log('New language:', newLanguage);
      return newLanguage;
    });
  };

  useEffect(() => {
    console.log('Language changed to:', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage }; 