import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Translations } from '../translations';
import { MaskLines, Lift } from './Kinetics';

interface ContactProps {
  t: Translations;
}

const OUT = [0.22, 1, 0.36, 1] as const;

/**
 * The page's one saturated field. Everything before it is black and hairlines,
 * so the inverted block is the loudest thing on the site, which is where the
 * loudest thing belongs: next to the email address.
 */
const Contact: React.FC<ContactProps> = ({ t }) => {
  const reduced = useReducedMotion();

  // The observer has to watch the section, not the thing being revealed: an
  // element that hides itself never reports as intersecting, so it would wait
  // forever to be shown. The field is painted permanently and a shutter
  // retracts off it, so the block is legible even if nothing animates.
  const sectionRef = React.useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-15%' });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate mt-28 scroll-mt-24 overflow-hidden bg-field lg:mt-40"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-bottom bg-ground"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: reduced || inView ? 0 : 1 }}
        transition={{ duration: 1.05, ease: OUT }}
      />

      <div className="shell relative z-10 py-24 text-field-fg lg:py-32">
        <MaskLines
          lines={[...t.contact.headline]}
          serif={[1]}
          delay={0.25}
          className="display text-[clamp(3rem,11.5vw,10rem)]"
        />

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Lift delay={0.35}>
              <p className="measure text-[1.32rem] opacity-80">{t.contact.description}</p>
            </Lift>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:justify-self-end">
            <Lift delay={0.42}>
              <a
                href="mailto:info@alessandroarrigo.com"
                className="nav-link group relative inline-block max-w-full [overflow-wrap:anywhere] text-[clamp(1.35rem,3.9vw,2.7rem)]"
              >
                {t.contact.cta}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-current opacity-30 transition-transform duration-500 group-hover:scale-x-0" />
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-current transition-transform delay-150 duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </Lift>
            <Lift delay={0.5}>
              <p className="nav-link mt-7 flex items-center gap-2.5 text-[0.94rem] opacity-70">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {t.contact.response}
              </p>
            </Lift>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
