import { useEffect } from 'react';
import Lenis from 'lenis';

let instance: Lenis | null = null;

export const getLenis = () => instance;

/** Scroll to an in-page anchor through Lenis so the easing stays consistent. */
export function scrollToHash(hash: string) {
  const target = hash === '#' || hash === '' ? 0 : document.querySelector(hash);
  if (target === null) return;
  if (instance) {
    // Lenis reads each section's CSS scroll-margin-top itself.
    instance.scrollTo(target as number | HTMLElement);
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target });
  } else {
    (target as HTMLElement).scrollIntoView();
  }
}

/**
 * Inertial scrolling. Skipped entirely when the visitor asks for reduced
 * motion — smooth scroll is exactly the kind of thing that setting is for.
 */
export function useSmoothScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });
    instance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, [enabled]);
}
