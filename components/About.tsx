import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Translations } from '../translations';
import { useMediaQuery } from '../lib/useMediaQuery';
import { MaskLines, Lift, Rule, CountUp } from './Kinetics';

interface AboutProps {
  t: Translations;
}

const About: React.FC<AboutProps> = ({ t }) => {
  const reduced = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const portraitRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '-4.8%']);

  // The heading drifts against the scroll a little, so the column feels
  // like it is settling into place rather than sitting on a grid.
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Only drift where there is margin to drift into: on a phone the same
  // ±26px pushes the heading past the right edge of the document.
  const wide = useMediaQuery('(min-width: 1024px)');
  const headDrift = useTransform(sectionProgress, [0, 1], [26, -26]);
  const headX = useTransform(headDrift, (v) => (reduced || !wide ? 0 : v));

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-24 pt-28 lg:pt-40"
    >
      <div className="shell">
        <Rule className="mb-14" />

        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.div style={{ x: headX }}>
              <MaskLines
                lines={[t.about.title]}
                className="display text-[clamp(2.55rem,6.3vw,5.3rem)]"
              />
            </motion.div>

            <Lift delay={0.12}>
              <p className="prose-lead measure-tight mt-6 text-[1.32rem] text-dim">
                {t.about.lead}
              </p>
            </Lift>

            <Lift delay={0.18}>
              <div
                ref={portraitRef}
                className="relative mt-12 aspect-[4/5] w-full max-w-[27rem] overflow-hidden bg-raised"
              >
                <motion.img
                  src={`${import.meta.env.BASE_URL}my_pic.webp`}
                  alt="Alessandro Arrigo"
                  width={800}
                  height={1067}
                  style={{ y: imageY }}
                  className="h-[105%] w-full object-cover"
                  loading="lazy"
                />
                {/* A hairline crop marker, the way a plot frames a panel. */}
                <span className="absolute bottom-0 left-0 h-8 w-[2px] bg-accent" />
                <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-accent" />
              </div>
            </Lift>
          </div>

          <div className="lg:col-span-7">
            <div className="measure space-y-7 text-[1.18rem] text-fg/85">
              {t.about.paragraphs.map((paragraph, index) => (
                <Lift key={index} delay={index * 0.07}>
                  <p>{paragraph}</p>
                </Lift>
              ))}
            </div>

            <Lift delay={0.24}>
              <p className="measure mt-10 text-[0.98rem] leading-relaxed text-faint">
                {t.about.tools}
              </p>
            </Lift>

            <div className="mt-14 grid grid-cols-3 border-t border-rule">
              {t.about.highlights.map((highlight, index) => (
                <Lift
                  key={highlight.label}
                  delay={index * 0.08}
                  className={`py-7 pr-3 ${index > 0 ? 'border-l border-rule pl-4 sm:pl-7' : ''}`}
                >
                  <div className="figure text-[clamp(2.8rem,6.4vw,4.7rem)] text-fg">
                    <CountUp to={highlight.value} suffix={highlight.suffix} />
                  </div>
                  <div className="nav-link mt-2 text-[0.98rem] leading-snug text-faint [overflow-wrap:anywhere]">
                    {highlight.label}
                  </div>
                </Lift>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
