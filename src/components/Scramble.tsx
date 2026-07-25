import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const CHARS = '!<>-_\\/[]{}=+*^?#';

interface Props {
  /** Texts to cycle through with a scramble transition. */
  texts: string[];
  /** ms between switches */
  interval?: number;
  className?: string;
}

/** Cycles between texts with a character-scramble transition (the identity flip). */
export default function Scramble({ texts, interval = 3800, className }: Props) {
  const [display, setDisplay] = useState(texts[0]);
  const indexRef = useRef(0);
  const frameReq = useRef(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || texts.length < 2) return;

    let cancelled = false;

    const scrambleTo = (next: string) => {
      const from = display;
      const len = Math.max(from.length, next.length);
      const queue = Array.from({ length: len }, (_, i) => ({
        from: from[i] ?? '',
        to: next[i] ?? '',
        start: Math.floor(Math.random() * 14),
        end: Math.floor(Math.random() * 14) + Math.floor(Math.random() * 14),
        char: '',
      }));
      let frame = 0;
      const update = () => {
        if (cancelled) return;
        let out = '';
        let done = 0;
        for (const q of queue) {
          if (frame >= q.end) {
            done++;
            out += q.to;
          } else if (frame >= q.start) {
            if (!q.char || Math.random() < 0.28) {
              q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            out += q.char;
          } else {
            out += q.from;
          }
        }
        setDisplay(out);
        if (done < queue.length) {
          frame++;
          frameReq.current = requestAnimationFrame(update);
        }
      };
      update();
    };

    const timer = window.setInterval(() => {
      indexRef.current = (indexRef.current + 1) % texts.length;
      scrambleTo(texts[indexRef.current]);
    }, interval);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      cancelAnimationFrame(frameReq.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, interval, texts.join('|')]);

  return (
    <span className={className} aria-label={texts[0]}>
      <span aria-hidden="true">{reduced ? texts[0] : display}</span>
    </span>
  );
}
