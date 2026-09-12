import React from 'react';
import { Translations } from '../translations';
import { MaskLines, Lift, Rule } from './Kinetics';

interface ProcessProps {
  t: Translations;
}

/**
 * The one section on the page where numbered markers are honest: this really
 * is a sequence. Laid out as an axis with a tick per step, which is the same
 * measurement vernacular the hero surface speaks, and deliberately not the
 * hairline row list Services already uses.
 */
const Process: React.FC<ProcessProps> = ({ t }) => {
  return (
    <section id="process" className="scroll-mt-24 pt-28 lg:pt-40">
      <div className="shell">
        <Rule className="mb-14" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MaskLines
            lines={[t.process.title]}
            className="display text-[clamp(2.35rem,5.3vw,4.3rem)]"
          />
          <Lift delay={0.1}>
            <p className="prose-lead measure-tight text-[1.26rem] text-dim">{t.process.lead}</p>
          </Lift>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-y-0">
          {t.process.steps.map((step, index) => (
            <Lift
              key={step.title}
              delay={index * 0.09}
              className="relative border-t border-rule pt-8 lg:pr-6"
            >
              <span className="absolute left-0 top-0 h-[2px] w-9 bg-accent" />
              <div className="nav-link text-[0.86rem] tabular-nums text-accent">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="display mt-4 text-[clamp(1.45rem,2.3vw,2rem)] lg:min-h-[1.9em]">{step.title}</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-fg/80">{step.body}</p>
            </Lift>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
