
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations, Language } from './translations';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('it');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'it' ? 'en' : 'it');

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] animate-blob ${isDarkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/20'}`}></div>
        <div className={`absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full blur-[120px] animate-blob animation-delay-2000 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'}`}></div>
        <div className={`absolute top-[30%] left-[50%] w-[30%] h-[30%] rounded-full blur-[120px] animate-blob animation-delay-4000 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'}`}></div>
      </div>

      <Navbar scrolled={scrolled} isDarkMode={isDarkMode} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} t={t} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <TechStack t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;
