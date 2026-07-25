import type { CSSProperties } from 'react';
import { LAB } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

/** The overflow shelf — games and experiments beyond the flagship products. */
export default function Lab() {
  return (
    <section className="section" aria-labelledby="lab-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> The lab · always learning
          </p>
          <h2 id="lab-title" className="sec-title">
            Some shipped. Some sleeping. <em>All taught something.</em>
          </h2>
        </div>

        <ul className="lab-cloud">
          {LAB.map((item, idx) => (
            <li key={item.name} data-reveal style={i(idx % 8)}>
              {item.url ? (
                <a className="lab-chip" href={item.url} target="_blank" rel="noopener">
                  {item.name} <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="lab-chip">{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
