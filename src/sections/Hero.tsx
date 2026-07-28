import type { CSSProperties } from 'react';
import { STATS } from '../data/content';
import { scrollToHash } from '../lib/scroll';
import MediaSlot from '../components/MediaSlot';
import Counter from '../components/Counter';

const d = (delay: string) => ({ '--d': delay }) as CSSProperties;
const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="container-wide">
        <div className="hero-top">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow hero-fade" style={d('0.85s')}>
              <span className="spark" aria-hidden="true">✺</span>
              Siddhartha Satyarthi · Product Manager
            </p>

            <h1 className="hero-title">
              <span className="line">
                <span className="line-inner voice-pm" style={d('0.5s')}>
                  PM by <em>profession.</em>
                </span>
              </span>
              <span className="line">
                <span className="line-inner voice-builder" style={d('0.64s')}>
                  Builder by instinct_
                </span>
              </span>
            </h1>

            <p className="hero-sub hero-fade" style={d('0.95s')}>
              Four-plus years shipping product across B2B SaaS, XR/VR, EdTech
              and AI. After hours: five live products and ten games of my own.
              I ship things people come back to.
            </p>

            <div className="hero-ctas hero-fade" style={d('1.05s')}>
              <a className="btn btn-primary" href="#work" onClick={scrollToHash}>
                See the work <span className="arrow" aria-hidden="true">↓</span>
              </a>
              <a className="btn btn-ghost" href="#contact" onClick={scrollToHash}>
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-illo hero-fade" style={d('0.9s')}>
            <MediaSlot id="hero" parallax eager />
          </div>
        </div>

        <ul className="hero-stats" aria-label="Career at a glance">
          {STATS.map((stat, idx) => (
            <li key={stat.label} data-reveal style={i(idx)}>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
