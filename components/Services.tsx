import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Translations } from '../translations';
import { useMediaQuery } from '../lib/useMediaQuery';
import { MaskLines, Lift, Rule } from './Kinetics';

interface ServicesProps {
  t: Translations;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Only drift where there is margin to drift into: on a phone the same
  // ±24px pushes the heading past the right edge of the document.
  const wide = useMediaQuery('(min-width: 1024px)');
  const headDrift = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const headX = useTransform(headDrift, (v) => (reduced || !wide ? 0 : v));

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-24 pt-28 lg:pt-40"
    >
      <div className="shell">
        <Rule className="mb-14" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div style={{ x: headX }}>
            <MaskLines
              lines={[t.services.title]}
              className="display text-[clamp(2.55rem,6.3vw,5.3rem)]"
            />
          </motion.div>
          <Lift delay={0.1}>
            <p className="prose-lead measure-tight text-[1.26rem] text-dim">{t.services.lead}</p>
          </Lift>
        </div>

        <div className="mt-16">
          {t.services.items.map((service, index) => (
            <Lift key={service.title} delay={index * 0.06}>
              <article
                className="service-row group -mx-4 grid gap-y-5 border-t border-rule py-10 md:-mx-6 md:grid-cols-12 md:gap-x-12 lg:py-14"
              >
                <h3 className="display relative self-start px-4 text-[clamp(2.05rem,4.3vw,3.45rem)] md:col-span-5 md:px-6">
                  <span className="row-tick" />
                  <span className="row-title">{service.title}</span>
                </h3>

                <div className="px-4 md:col-span-7 md:px-6">
                  <p className="measure text-[1.16rem] text-fg/80">{service.description}</p>

                  <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="nav-link flex items-center gap-2.5 text-[0.94rem] text-dim"
                      >
                        <span className="h-px w-3 shrink-0 bg-faint" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Lift>
          ))}
          <div className="-mx-4 border-t border-rule md:-mx-6" />
        </div>
      </div>
    </section>
  );
};

export default Services;
