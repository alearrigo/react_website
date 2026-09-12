import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const OUT = [0.22, 1, 0.36, 1] as const;

interface MaskLinesProps {
  lines: string[];
  /** Indices of lines to set in the serif italic instead of the grotesk.
   *  Whole lines only: a single accented word is the oldest tell there is. */
  serif?: number[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p';
}

/**
 * Display lines rising word by word out from behind a mask.
 *
 * The observer has to sit on the line, not on the words. A word starts at
 * y:130%, entirely outside its line's overflow:hidden box, and
 * IntersectionObserver intersects a target against every ancestor clip, so a
 * word would report as never visible and never animate out of the mask it is
 * hidden by. The line is unclipped, so it triggers, and the stagger reaches
 * the words through variants.
 */
export const MaskLines: React.FC<MaskLinesProps> = ({
  lines,
  serif = [],
  className = '',
  lineClassName = '',
  delay = 0,
  as = 'h2',
}) => {
  const reduced = useReducedMotion();
  const Tag = as;
  let wordOffset = 0;

  return (
    <Tag className={className}>
      <span className="sr-only">{lines.join(' ')}</span>
      {lines.map((line, lineIdx) => {
        const words = line.split(' ');
        // Carried across lines so the stagger reads as one sweep.
        const startAt = wordOffset;
        wordOffset += words.length;

        return (
          <motion.span
            key={line}
            aria-hidden="true"
            // The padding keeps descenders out of the clip; words start at
            // 130% so they never peek into it on the way up.
            className={`-mb-[0.16em] block overflow-hidden pb-[0.16em] ${
              serif.includes(lineIdx) ? 'display-serif' : ''
            } ${lineClassName}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-12%' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: reduced ? 0 : delay + startAt * 0.075,
                  staggerChildren: reduced ? 0 : 0.075,
                },
              },
            }}
          >
            {words.map((word, i) => (
              <React.Fragment key={`${word}-${i}`}>
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: reduced ? { opacity: 0 } : { y: '130%' },
                    visible: {
                      ...(reduced ? { opacity: 1 } : { y: '0%' }),
                      transition: { duration: reduced ? 0.3 : 1.05, ease: OUT },
                    },
                  }}
                >
                  {word}
                </motion.span>
                {i < words.length - 1 ? ' ' : null}
              </React.Fragment>
            ))}
          </motion.span>
        );
      })}
    </Tag>
  );
};

/** A quiet fade-and-lift for supporting copy. Deliberately small: 12px, not
 *  the 48px slide that gives away a generated page. */
export const Lift: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.7, ease: OUT, delay }}
    >
      {children}
    </motion.div>
  );
};

/** The hairline that opens each section, drawn as it arrives. */
export const Rule: React.FC<{ className?: string }> = ({ className = '' }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`h-px w-full origin-left bg-rule ${className}`}
      initial={{ scaleX: reduced ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: OUT }}
    />
  );
};

/** Counts a figure up once it is on screen. */
export const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const reduced = useReducedMotion();
  const [value, setValue] = React.useState(reduced ? to : 0);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (reduced) {
      setValue(to);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const started = performance.now();
        const run = (now: number) => {
          const t = Math.min((now - started) / 1400, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 4))));
          if (t < 1) raf = requestAnimationFrame(run);
        };
        raf = requestAnimationFrame(run);
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, reduced]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};
