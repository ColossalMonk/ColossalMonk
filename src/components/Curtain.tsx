import { useState } from 'react';

/** Ink curtain that lifts once on load, then removes itself. */
export default function Curtain() {
  const [gone, setGone] = useState(false);
  if (gone) return null;

  return (
    <div
      className="curtain"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) setGone(true);
      }}
    >
      <span className="curtain-mark">
        <span className="spark">✺</span> colossalmonk
      </span>
    </div>
  );
}
