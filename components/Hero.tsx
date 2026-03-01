
import React from 'react';
import { Translations } from '../translations';

interface HeroProps {
  t: Translations;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {t.hero.greeting} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Alessandro</span>
            </h1>

            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed" dangerouslySetInnerHTML={{ __html: t.hero.description }} />

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-2xl transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 w-full sm:w-auto text-center">
                {t.hero.cta}
              </a>
              <a href="#services" className="px-8 py-4 glass text-white font-semibold rounded-2xl transition-all hover:bg-white/10 w-full sm:w-auto text-center">
                {t.hero.viewWork}
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/30 to-blue-500/30 blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}my_pic.jpeg`}
                  alt="Alessandro Arrigo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
