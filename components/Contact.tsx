
import React from 'react';
import { Translations } from '../translations';

interface ContactProps {
  t: Translations;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto rounded-[3rem] p-12 lg:p-20 relative overflow-hidden glass border-emerald-500/10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white">{t.contact.title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">{t.contact.titleHighlight}</span> {t.contact.titleEnd}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t.contact.description}
            </p>

            <div className="pt-6">
              <a
                href="mailto:info@alessandroarrigo.com"
                className="group inline-flex items-center space-x-4 px-8 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>{t.contact.cta}</span>
              </a>
            </div>

            <p className="text-sm text-slate-500 font-medium pt-8">
              {t.contact.response}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
