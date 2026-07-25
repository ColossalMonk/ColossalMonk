import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits an element's text into word <span class="kw"> units so scroll
 * scrubbing can light words up one by one. Element children (e.g. <em>)
 * are kept intact and treated as a single word unit. Idempotent — guarded
 * by data-split so StrictMode remounts don't double-split.
 */
function splitWords(el: HTMLElement) {
  if (el.dataset.split === 'done') return;
  el.setAttribute('aria-label', el.textContent ?? '');

  const wrap = (word: string) => {
    const span = document.createElement('span');
    span.className = 'kw';
    span.setAttribute('aria-hidden', 'true');
    span.textContent = word;
    return span;
  };

  [...el.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      const parts = (node.textContent ?? '').split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) frag.append(document.createTextNode(part));
        else frag.append(wrap(part));
      });
      node.replaceWith(frag);
    } else if (node instanceof HTMLElement) {
      node.classList.add('kw');
      node.setAttribute('aria-hidden', 'true');
    }
  });

  el.dataset.split = 'done';
}

/**
 * Global scroll-driven motion:
 *  - parallax pan inside [data-parallax] media (desktop, fine pointer)
 *  - kinetic word scrub on [data-kinetic] paragraphs (all pointers)
 *  - section titles rise with the scroll instead of a one-shot fade
 *  - the hero recedes (scale + fade) as you scroll past it
 * Everything is skipped under prefers-reduced-motion.
 */
export function useScrollMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!rootRef.current) return;

    const mm = gsap.matchMedia();

    /* media parallax — desktop only */
    mm.add(
      '(hover: hover) and (min-width: 768px) and (prefers-reduced-motion: no-preference)',
      () => {
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6, scale: 1.14 },
            {
              yPercent: 6,
              scale: 1.14,
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('.media-slot') ?? el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
              },
            },
          );
        });
      },
    );

    /* kinetic text — every pointer type */
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      /* words light up one by one as the paragraph crosses the viewport */
      gsap.utils.toArray<HTMLElement>('[data-kinetic]').forEach((el) => {
        splitWords(el);
        const words = el.querySelectorAll<HTMLElement>('.kw');
        if (!words.length) return;
        gsap.fromTo(
          words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.12,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              end: 'bottom 52%',
              scrub: 0.5,
            },
          },
        );
      });

      /* section titles ride the scroll */
      gsap.utils.toArray<HTMLElement>('.sec-title').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 56 },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 96%',
              end: 'top 55%',
              scrub: 0.6,
            },
          },
        );
      });

      /* the hero recedes as you leave it */
      const heroCopy = document.querySelector('.hero-copy');
      if (heroCopy) {
        gsap.to(heroCopy, {
          yPercent: -12,
          opacity: 0.12,
          scale: 0.96,
          transformOrigin: 'left top',
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '70% top',
            scrub: 0.5,
          },
        });
      }
      /* the work sheet rises over the page as it enters (hello, Sandra) */
      const sheet = document.querySelector('.theme-dark');
      if (sheet) {
        gsap.fromTo(
          sheet,
          { y: 72, scale: 0.985 },
          {
            y: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sheet,
              start: 'top 96%',
              end: 'top 42%',
              scrub: 0.6,
            },
          },
        );
      }
    });

    /* magnetic primary buttons — desktop, fine pointer only */
    mm.add(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
      () => {
        const cleanups: Array<() => void> = [];
        document.querySelectorAll<HTMLElement>('.btn-primary').forEach((btn) => {
          const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' });
          const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' });
          const onMove = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.25);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };
          btn.addEventListener('mousemove', onMove);
          btn.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            btn.removeEventListener('mousemove', onMove);
            btn.removeEventListener('mouseleave', onLeave);
          });
        });
        return () => cleanups.forEach((fn) => fn());
      },
    );

    return () => mm.revert();
  }, [rootRef]);
}
