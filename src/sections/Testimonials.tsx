import type { CSSProperties } from 'react';
import { TESTIMONIALS } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

/** Renders nothing until real quotes exist in content.ts. */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> In their words
          </p>
          <h2 id="testimonials-title" className="sec-title">
            People I have <em>shipped</em> with.
          </h2>
        </div>

        <ul className="quote-grid">
          {TESTIMONIALS.map((t, idx) => (
            <li key={t.name} className="quote-card" data-reveal style={i(idx % 3)}>
              <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
              <p className="quote-who">
                <strong>{t.name}</strong> · {t.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
