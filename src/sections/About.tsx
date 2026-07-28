import type { CSSProperties } from 'react';
import MediaSlot from '../components/MediaSlot';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> About · the two hats
          </p>
          <h2 id="about-title" className="sec-title">
            One person, <em>two</em> operating modes.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-media" data-reveal>
            <MediaSlot id="about" parallax />
          </div>

          <div>
            <p className="about-lede" data-kinetic>
              By day I run discovery, roadmaps and go-to-market for early-stage
              products. By night I&rsquo;m <em>ColossalMonk</em>, designing,
              building and shipping my own.
            </p>
            <div className="about-body">
              <p data-reveal style={i(1)}>
                At Nasscom Foundation I&rsquo;ve shaped product vision for 500+
                early-stage startup products, driving 20+ incubations and
                validating product-market fit for 170+ concepts through
                structured customer discovery.
              </p>
              <p data-reveal style={i(2)}>
                Before that: a Unity-based Digital Twin VR platform for
                industrial IoT, telecom product lines with 30+ collaborators,
                Metaverse experiences with 30-50% FPS gains, and a VR try-on
                that logged 3,000+ engagements at London Fashion Week.
              </p>
              <p data-reveal style={i(3)}>
                It all started with games: Unity, XR, ten titles on itch.io
                (kawaii puzzlers included). The builder half keeps the PM half
                honest: when you ship your own products, every roadmap
                conversation gets sharper.
              </p>
            </div>
            <ul className="about-facts">
              <li className="about-fact" data-reveal style={i(4)}>
                <span className="spark" aria-hidden="true">✺</span>
                Currently: Startup Evangelist @ Nasscom Foundation
              </li>
              <li className="about-fact" data-reveal style={i(5)}>
                <span className="spark" aria-hidden="true">✺</span>
                Off the clock: photography, anime, manga, and a gaming backlog
                that never shrinks
              </li>
              <li className="about-fact" data-reveal style={i(6)}>
                <span className="spark" aria-hidden="true">✺</span>
                New Delhi, India · remote-friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
