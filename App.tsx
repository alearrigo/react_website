import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations, Language } from './translations';
import { useSmoothScroll } from './lib/scroll';

const LANG_KEY = 'aa-lang';

const readStored = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const App: React.FC = () => {
  const reduced = useReducedMotion() ?? false;
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>(() =>
    readStored(LANG_KEY) === 'en' ? 'en' : 'it'
  );

  const t = translations[language];

  useSmoothScroll(!reduced);

  useEffect(() => {
    // The header band is the top ~76px; the contact block is the only
    // inverted section, so the header flips exactly while it passes behind.
    const BAND = 76;
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const block = document.getElementById('contact');
      if (!block) return;
      const r = block.getBoundingClientRect();
      // How much of the header band the inverted block actually covers.
      // Written straight to the DOM: this runs every frame under Lenis and
      // has no business triggering a React render.
      const overlap = Math.max(0, Math.min(BAND, r.bottom) - Math.max(0, r.top));
      document.documentElement.style.setProperty('--header-mix', String(overlap / BAND));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANG_KEY, language);
    } catch {
      /* ignore */
    }
  }, [language]);

  return (
    <>
      <div className="grid-dots" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Navbar
        scrolled={scrolled}
        language={language}
        toggleLanguage={() => setLanguage(language === 'it' ? 'en' : 'it')}
        t={t}
      />

      <main key={language}>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Process t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
};

export default App;
