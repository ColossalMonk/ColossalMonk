import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  slug: string;
  count: number;
  pad?: number;
  ext?: string;
  alt: string;
}

/**
 * Scroll-scrubbed image sequence on <canvas>.
 * Expects frames at /media/<slug>/frame_001.<ext> … zero-padded to `pad`.
 */
export default function FrameSequence({ slug, count, pad = 3, ext = 'webp', alt }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx2d = canvas.getContext('2d');
    if (!ctx2d) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = { frame: 0 };
    const images: HTMLImageElement[] = [];

    const url = (i: number) =>
      `/media/${slug}/frame_${String(i + 1).padStart(pad, '0')}.${ext}`;

    const draw = () => {
      const img = images[Math.min(count - 1, Math.max(0, Math.round(state.frame)))];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx2d.clearRect(0, 0, cw, ch);
      ctx2d.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    for (let i = 0; i < count; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = url(i);
      if (i === 0) img.onload = draw;
      images.push(img);
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      draw();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    let gctx: gsap.Context | undefined;
    if (!reduced) {
      gctx = gsap.context(() => {
        gsap.to(state, {
          frame: count - 1,
          ease: 'none',
          onUpdate: draw,
          scrollTrigger: {
            trigger: wrap,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        });
      }, wrap);
    }

    return () => {
      gctx?.revert();
      ro.disconnect();
      images.forEach((img) => (img.onload = null));
    };
  }, [slug, count, pad, ext]);

  return (
    <div ref={wrapRef} className="frame-seq" role="img" aria-label={alt}>
      <canvas ref={canvasRef} />
    </div>
  );
}
