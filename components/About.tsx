import React, { useState, useEffect, useRef } from 'react';
import { Translations } from '../translations';

interface AboutProps {
  t: Translations;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 bg-slate-900/50 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm mb-2">{t.about.subtitle}</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{t.about.title}</h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-400 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            {t.about.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass hover:bg-slate-800/40 transition-all duration-300"
              >
                <div className="text-4xl font-black text-emerald-400 mb-2">{highlight.value}</div>
                <div className="text-slate-400 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
