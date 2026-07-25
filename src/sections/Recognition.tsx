import type { CSSProperties } from 'react';
import { RECOGNITION } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function Recognition() {
  return (
    <section className="section" aria-labelledby="recog-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> Proof · recognition
          </p>
          <h2 id="recog-title" className="sec-title">
            Signals along <em>the way.</em>
          </h2>
        </div>

        <ul className="recog-grid">
          {RECOGNITION.map((item, idx) => (
            <li key={item.title} className="recog-card" data-reveal style={i(idx % 2)}>
              <h3 className="recog-title">{item.title}</h3>
              <p className="recog-detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
