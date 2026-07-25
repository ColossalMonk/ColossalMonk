import { useState } from 'react';
import type { ReactNode } from 'react';
import { MEDIA } from '../media.config';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import FrameSequence from './FrameSequence';

interface Props {
  id: keyof typeof MEDIA | string;
  /** Enables the scroll parallax pan (desktop only). */
  parallax?: boolean;
  /** Hero media loads eagerly; everything else lazily. */
  eager?: boolean;
  className?: string;
}

/**
 * Every video / frame surface on the site. Reads its mode from
 * src/media.config.ts — drop Flow assets into public/media/<slug>/
 * and flip the mode there. See MEDIA_GUIDE.md.
 */
export default function MediaSlot({ id, parallax = false, eager = false, className }: Props) {
  const cfg = MEDIA[id];
  const reduced = usePrefersReducedMotion();
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');
  if (!cfg) return null;

  const copyPrompt = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(cfg.flowPrompt);
      ok = true;
    } catch {
      // clipboard API unavailable (permissions / older browser) — legacy fallback
      const ta = document.createElement('textarea');
      ta.value = cfg.flowPrompt;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand('copy');
      } catch {
        ok = false;
      }
      ta.remove();
    }
    setCopyState(ok ? 'copied' : 'failed');
    window.setTimeout(() => setCopyState('idle'), 3000);
  };

  let content: ReactNode;
  if (cfg.mode === 'video' && cfg.video) {
    content = (
      <video
        src={`/media/${cfg.slug}/${cfg.video.file}`}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload={eager ? 'auto' : 'metadata'}
        aria-label={cfg.alt}
      />
    );
  } else if (cfg.mode === 'frames' && cfg.frames) {
    content = (
      <FrameSequence
        slug={cfg.slug}
        count={cfg.frames.count}
        pad={cfg.frames.pad}
        ext={cfg.frames.ext}
        alt={cfg.alt}
      />
    );
  } else {
    content = (
      <div className="media-placeholder">
        <div className="ph-label">
          <span className="ph-spark" aria-hidden="true">
            ✺
          </span>
          <span className="ph-slug">{cfg.slug} · media slot</span>
          <span className="ph-meta">
            {cfg.aspect.replace(/\s/g, '')} · awaiting Flow render
          </span>
          <p className="ph-prompt">{cfg.flowPrompt}</p>
          <button type="button" className="ph-copy" onClick={copyPrompt}>
            {copyState === 'copied'
              ? 'Prompt copied ✓'
              : copyState === 'failed'
                ? 'Copy blocked, see media.config.ts'
                : 'Copy Flow prompt'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`media-slot${className ? ` ${className}` : ''}`}>
      <div className="media-inner" {...(parallax ? { 'data-parallax': '' } : {})}>
        {content}
      </div>
    </div>
  );
}
