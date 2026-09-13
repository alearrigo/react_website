import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Translations, Language } from '../translations';
import { getLenis, scrollToHash } from '../lib/scroll';

interface NavbarProps {
  scrolled: boolean;
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const OUT = [0.22, 1, 0.36, 1] as const;

const Navbar: React.FC<NavbarProps> = ({ scrolled, language, toggleLanguage, t }) => {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const lenis = getLenis();
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    lenis?.stop();
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      dialog.close();
      document.body.style.overflow = overflow;
      lenis?.start();
    };
  }, [open]);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 32, mass: 0.4 });
  const remaining = useTransform(progress, (v) => (1 - v) * 100);
  const clip = useMotionTemplate`inset(0 ${remaining}% 0 0)`;

  const links = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const go = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(false);
    getLenis()?.start();
    scrollToHash(href);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ${
          scrolled ? 'header-glass py-3.5' : 'border-b border-transparent py-6'
        }`}
      >
        <div className="shell flex items-center justify-between gap-1.5 sm:gap-6">
          <a href="#" onClick={go('#')} className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt=""
              className="logo-mark h-7 w-7 shrink-0 sm:h-9 sm:w-9"
            />
            <span className="wordmark text-[1rem] leading-[0.95] text-fg transition-opacity hover:opacity-70 min-[360px]:text-[1.08rem] sm:text-[clamp(1.1rem,1.55vw,1.55rem)]">
              Alessandro Arrigo
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={go(link.href)}
                className="nav-link group relative text-[0.94rem] text-dim transition-colors hover:text-fg"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-[width] duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="nav-link px-2 py-1.5 text-[0.9rem] text-dim transition-colors hover:text-fg"
              aria-label={language === 'it' ? 'Switch to English' : "Passa all'italiano"}
            >
              <span className={language === 'it' ? 'text-fg' : ''}>it</span>
              <span className="mx-1 text-faint">/</span>
              <span className={language === 'en' ? 'text-fg' : ''}>en</span>
            </button>


            <a
              href="https://github.com/alearrigo"
              target="_blank"
              rel="noreferrer"
              className="hidden p-2 text-dim transition-colors hover:text-fg sm:block"
              aria-label="GitHub"
            >
              <svg className="h-[19px] w-[19px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alessandro-arrigo-82264332/"
              target="_blank"
              rel="noreferrer"
              className="hidden p-2 text-dim transition-colors hover:text-fg sm:block"
              aria-label="LinkedIn"
            >
              <svg className="h-[19px] w-[19px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <button
              onClick={() => setOpen(true)}
              className="nav-link ml-1 px-2 py-1.5 text-[0.94rem] text-dim transition-colors hover:text-fg md:hidden"
              aria-label={language === 'it' ? 'Apri il menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              menu
            </button>
          </div>
        </div>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-[2px]"
          style={{
            clipPath: clip,
            background: 'var(--accent)',
          }}
          aria-hidden="true"
        />
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label={language === 'it' ? 'Menu di navigazione' : 'Navigation menu'}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const controls = (event.currentTarget as HTMLDialogElement).querySelectorAll<HTMLElement>('button, a[href]');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-ground p-0 text-fg backdrop:bg-ground"
      >
        {open && (
          <motion.div
            className="h-full overflow-y-auto bg-ground"
            initial={reduced ? false : { clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: reduced ? 0 : 0.55, ease: OUT }}
          >
            <div className="shell flex h-full flex-col">
              <div className="flex items-center justify-between py-6">
                <a
                  href="#"
                  onClick={go('#')}
                  className="flex min-w-0 items-center gap-2"
                  aria-label="Alessandro Arrigo — home"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}favicon.png`}
                    alt=""
                    className="logo-mark h-7 w-7 shrink-0"
                  />
                  <span className="wordmark text-[1rem] leading-[0.95] min-[360px]:text-[1.08rem]">
                    Alessandro Arrigo
                  </span>
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="nav-link px-2 py-1.5 text-[0.94rem] text-dim"
                  aria-label={language === 'it' ? 'Chiudi il menu' : 'Close menu'}
                >
                  {language === 'it' ? 'chiudi' : 'close'}
                </button>
              </div>
              <nav className="flex flex-1 flex-col justify-center gap-2 pb-24">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={go(link.href)}
                    className="display border-b border-rule-soft py-4 text-[13vw] leading-none transition-colors duration-300 hover:text-accent"
                    initial={reduced ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16 + index * 0.06, duration: 0.5, ease: OUT }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </dialog>
    </>
  );
};

export default Navbar;
