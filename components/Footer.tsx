import React from 'react';
import { Translations } from '../translations';
import { scrollToHash } from '../lib/scroll';

interface FooterProps {
  t: Translations;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const links = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-rule py-10">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt=""
              className="logo-mark h-7 w-7 shrink-0"
            />
            <span className="wordmark text-[1.1rem] text-fg">Alessandro Arrigo</span>
          </div>
          <p className="nav-link mt-3 text-[0.86rem] text-faint">
            {new Date().getFullYear()}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToHash(link.href);
              }}
              className="nav-link text-[0.94rem] text-dim transition-colors hover:text-fg"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
