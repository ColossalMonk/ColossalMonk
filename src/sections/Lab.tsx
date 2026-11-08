import type { CSSProperties } from 'react';
import { ITCH_GAME_COUNT, ITCH_URL, LAB, LAB_FEATURED } from '../data/content';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

/** The overflow shelf — fresh jam games as cards, then the rest as chips. */
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

        <p className="lab-label" data-reveal>
          <span className="spark" aria-hidden="true">✺</span> Fresh from the jams
        </p>
        <ul className="lab-feature">
          {LAB_FEATURED.map((game, idx) => (
            <li key={game.name} data-reveal style={i(idx)}>
              <a className="lab-card" href={game.url} target="_blank" rel="noopener">
                <span className="lab-card-jam">{game.jam}</span>
                <span className="lab-card-name">{game.name}</span>
                <span className="lab-card-blurb">{game.blurb}</span>
                <span className="lab-card-tags" aria-label="Tags">
                  {game.tags.map((tag) => (
                    <span key={tag} className="lab-card-tag">
                      {tag}
                    </span>
                  ))}
                </span>
                <span className="lab-card-cta">
                  Play in your browser <span className="arrow" aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="lab-label lab-label-rest" data-reveal>
          <span className="spark" aria-hidden="true">✺</span> The rest of the shelf
        </p>
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

        <p className="lab-meta" data-reveal>
          <span>
            <span className="spark" aria-hidden="true">✺</span> {ITCH_GAME_COUNT} games playable
            in the browser
          </span>
          <a href={ITCH_URL} target="_blank" rel="noopener">
            Everything on itch.io <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
