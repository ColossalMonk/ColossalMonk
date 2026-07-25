import { useEffect, useState } from 'react';
import { getLenis } from '../lib/scroll';

/**
 * Side floater: appears at the right edge once the hero is passed,
 * rides at mid-height, then docks into the bottom corner as the
 * page bottom approaches.
 */
export default function BackToTop() {
  const [state, setState] = useState<'hidden' | 'floating' | 'docked'>('hidden');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (y < window.innerHeight * 0.9) setState('hidden');
      else if (max - y < window.innerHeight * 0.6) setState('docked');
      else setState('floating');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo(0, 0);
  };

  return (
    <button
      type="button"
      className="back-top"
      data-state={state}
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={state === 'hidden' ? -1 : 0}
    >
      ↑
    </button>
  );
}
