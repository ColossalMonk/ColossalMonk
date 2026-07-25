import type { CSSProperties } from 'react';
import { EXPERIENCE } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="xp-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> Experience · the PM ledger
          </p>
          <h2 id="xp-title" className="sec-title">
            Five teams. One through-line: <em>shipping.</em>
          </h2>
        </div>

        <ol className="xp-list">
          {EXPERIENCE.map((role, idx) => (
            <li key={role.company} className="xp-row" data-reveal style={i(idx % 3)}>
              <span className="xp-idx" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="xp-title">{role.title}</h3>
                <p className="xp-co">
                  {role.company} · {role.location}
                </p>
                <p className="xp-detail">{role.detail}</p>
              </div>
              <div className="xp-side">
                <p className="xp-highlight">{role.highlight}</p>
              </div>
              <p className="xp-period">{role.period}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
