import { useEffect, type RefObject } from 'react';

/** IntersectionObserver-driven reveal for every [data-reveal] element. */
export function useReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

    // catch nodes that arrive after mount (HMR swaps, lazy content)
    const mo = new MutationObserver(() => {
      root
        .querySelectorAll('[data-reveal]:not(.in-view)')
        .forEach((el) => io.observe(el));
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [rootRef]);
}
