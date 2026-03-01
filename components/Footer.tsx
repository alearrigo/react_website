
import React from 'react';
import { Translations } from '../translations';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Alessandro Arrigo</span>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">{t.nav.home}</a>
            <a href="#about" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">{t.nav.about}</a>
            <a href="#services" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">{t.nav.services}</a>
            <a href="#techstack" className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">{t.nav.techStack}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
