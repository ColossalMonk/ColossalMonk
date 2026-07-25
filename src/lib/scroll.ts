import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

/** Smooth scroll (Lenis) wired into GSAP's ticker. Skipped for reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    lenis = new Lenis({ autoRaf: false, lerp: 0.115 });
    lenis.on('scroll', ScrollTrigger.update);
    if (import.meta.env.DEV) {
      (window as unknown as Record<string, unknown>).__lenis = lenis;
    }

    const raf = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

/** Anchor click handler that routes through Lenis when available. */
export function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;
  e.preventDefault();
  if (lenis) {
    lenis.scrollTo(target, { offset: -64, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
