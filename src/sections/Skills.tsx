import type { CSSProperties } from 'react';
import { SKILLS_PRODUCT, SKILLS_BUILDER, TOOLS } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> Capabilities · dual wield
          </p>
          <h2 id="skills-title" className="sec-title">
            One brain, <em>two</em> toolkits.
          </h2>
        </div>

        <div className="skills-grid">
          <div data-reveal>
            <h3 className="skills-col-label">
              <span className="spark" aria-hidden="true">✺</span> Product · the day job
            </h3>
            <ul className="skills-serif">
              {SKILLS_PRODUCT.map((skill, idx) => (
                <li key={skill} data-reveal style={i(idx % 5)}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <h3 className="skills-col-label">
              <span className="spark" aria-hidden="true">✺</span> Stack · the night shift
            </h3>
            <ul className="skills-chips">
              {SKILLS_BUILDER.map((skill, idx) => (
                <li key={skill} data-reveal style={i(idx % 6)}>
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="skills-col-label skills-col-label-sub">
              <span className="spark" aria-hidden="true">✺</span> Tooling · the shared drawer
            </h3>
            <ul className="skills-chips">
              {TOOLS.map((tool, idx) => (
                <li key={tool} data-reveal style={i(idx % 6)}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
