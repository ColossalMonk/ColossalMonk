import { useState } from 'react';

const PHRASES = [
  'Ships things people come back to',
  'Product × Engineering × Design',
  'Zero to one, repeatedly',
  'Always learning',
];

function TrackContent({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee-item" aria-hidden={hidden || undefined}>
      {PHRASES.map((text) => (
        <span key={text} className="marquee-item">
          <span className="marquee-word">{text}</span>
          <span className="marquee-sep" aria-hidden="true">
            ✺
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  const [paused, setPaused] = useState(false);

  return (
    <aside className="marquee" data-paused={paused} aria-label="Motto ticker">
      <div className="marquee-track">
        <TrackContent />
        <TrackContent hidden />
      </div>
      <button
        type="button"
        className="marquee-pause"
        aria-pressed={paused}
        aria-label={paused ? 'Play ticker' : 'Pause ticker'}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2.5 1.5 L10.5 6 L2.5 10.5 Z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <rect x="2" y="1.5" width="3" height="9" fill="currentColor" />
            <rect x="7" y="1.5" width="3" height="9" fill="currentColor" />
          </svg>
        )}
      </button>
    </aside>
  );
}
