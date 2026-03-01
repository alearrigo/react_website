import React, { useState, useEffect, useRef } from 'react';
import { Translations } from '../translations';

interface TechStackProps {
  t: Translations;
}

const techItems = [
  {
    name: 'R',
    logo: 'https://www.r-project.org/logo/Rlogo.svg',
    url: 'https://www.r-project.org/',
  },
  {
    name: 'Tidyverse',
    logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/tidyverse.svg',
    url: 'https://www.tidyverse.org/',
  },
  {
    name: 'Shiny',
    logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/shiny.svg',
    url: 'https://shiny.posit.co/',
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'Rhino',
    logo: 'https://raw.githubusercontent.com/Appsilon/rhino/main/man/figures/rhino.png',
    url: 'https://appsilon.github.io/rhino/',
  },
  {
    name: 'Quarto',
    logo: 'https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/quarto.svg',
    url: 'https://quarto.org/',
  },
  {
    name: 'SQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
    url: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    name: 'DuckDB',
    logo: 'https://duckdb.org/images/logo-dl/DuckDB_Logo.png',
    url: 'https://duckdb.org/',
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    url: 'https://www.linux.org/',
  },
];

const TechStack: React.FC<TechStackProps> = ({ t }) => {
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
      id="techstack"
      ref={sectionRef}
      className={`py-24 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold uppercase tracking-widest text-sm mb-2">
            {t.techStack.subtitle}
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t.techStack.title}
          </h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t.techStack.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {techItems.map((tech, index) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-3xl glass hover:bg-slate-800/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center gap-4"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
