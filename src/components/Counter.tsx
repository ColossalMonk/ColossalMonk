import { useEffect, useRef } from 'react';

interface Props {
  value: number;
  suffix?: string;
}

/** Counts up from 0 when scrolled into view. Instant for reduced motion. */
export default function Counter({ value, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = value.toLocaleString();
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const step = (now: number) => {
          const pct = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - pct, 4);
          el.textContent = Math.floor(value * ease).toLocaleString();
          if (pct < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span className="stat-value">
      <span ref={ref}>0</span>
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}
