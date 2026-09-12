import React from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Translations } from '../translations';
import { MaskLines } from './Kinetics';
import SurfacePlot from './SurfacePlot';
import { scrollToHash } from '../lib/scroll';

interface HeroProps {
  t: Translations;
}

const OUT = [0.22, 1, 0.36, 1] as const;

const Hero: React.FC<HeroProps> = ({ t }) => {
  const reduced = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Archivo is variable on its width axis, so the headline physically
  // condenses as the page scrolls past it. Nothing fades; the type narrows.
  const wdth = useTransform(scrollYProgress, [0, 1], [110, 72]);
  const axes = useMotionTemplate`"wdth" ${wdth}, "wght" 780`;

  const surfaceY = useTransform(scrollYProgress, [0, 1], ['0%', '11%']);
  const surfaceFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.1]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Pinned to the bottom and out of the flow, so the hero always closes
          exactly at the fold however tall the copy runs. */}
      <motion.div
        className="surface-mask pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.35 }}
      >
        <motion.div className="h-full w-full" style={reduced ? undefined : { y: surfaceY, opacity: surfaceFade }}>
          <SurfacePlot reduced={reduced} />
        </motion.div>
      </motion.div>

      <div className="hero-scrim" aria-hidden="true" />

      <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-center pb-[36vh] pt-32 lg:pb-[42vh] lg:pt-36">
        <div className="max-w-[52rem]">
          <motion.div style={reduced ? undefined : { ['--display-axes' as string]: axes }}>
            <MaskLines
              as="h1"
              lines={[...t.hero.headline]}
              serif={[1]}
              delay={0.2}
              className="display text-[clamp(2.75rem,6.8vw,6.4rem)]"
            />
          </motion.div>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              className="prose-lead measure text-[clamp(1.15rem,1.65vw,1.4rem)] text-dim"
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: OUT, delay: 0.7 }}
            >
              {t.hero.lead}
            </motion.p>

            <motion.div
              className="flex shrink-0 flex-wrap items-center gap-x-7 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.88 }}
            >
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash('#contact');
                }}
                className="nav-link inline-block bg-fg px-7 py-3.5 text-[0.98rem] text-ground transition-colors duration-300 hover:bg-accent"
              >
                {t.hero.cta}
              </a>
              <a
                href="#services"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToHash('#services');
                }}
                className="nav-link group relative py-3.5 text-[0.98rem] text-dim transition-colors hover:text-fg"
              >
                {t.hero.viewWork}
                <span className="absolute bottom-2.5 left-0 h-px w-full bg-rule" />
                <span className="absolute bottom-2.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
