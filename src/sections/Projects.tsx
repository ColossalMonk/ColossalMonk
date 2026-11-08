import type { CSSProperties } from 'react';
import { PROJECTS } from '../data/content';
import MediaSlot from '../components/MediaSlot';

const i = (index: number) => ({ '--i': index }) as CSSProperties;

export default function Projects() {
  return (
    <section id="work" className="section theme-dark" aria-labelledby="work-title">
      <div className="container-wide">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">
            <span className="spark" aria-hidden="true">✺</span> After hours · ColossalMonk
          </p>
          <h2 id="work-title" className="sec-title">
            Built alone. <em>Live</em> right now.
          </h2>
          <p className="projects-lede" data-kinetic>
            Right now I am building Nudge, the Windows launcher I wanted to
            exist. The five ships below taught me how: three purposeful
            products, one built to help myself and every other job hunter, and
            one made purely for fun.
          </p>
        </div>

        <div className="proj-list">
          {PROJECTS.map((project) => (
            <article key={project.name} className="proj" aria-label={project.name}>
              <div className="proj-media" data-reveal>
                <MediaSlot id={project.mediaId} parallax />
              </div>
              <div className="proj-copy">
                <p className="proj-idx" data-reveal style={i(0)}>
                  {project.index}
                </p>
                <h3 className="proj-name" data-reveal style={i(1)}>
                  {project.name}
                </h3>
                <p className="proj-kind" data-reveal style={i(2)}>
                  {project.kind}
                </p>
                <p className="proj-desc" data-reveal style={i(3)}>
                  {project.description}
                </p>
                <ul className="proj-metrics" data-reveal style={i(4)}>
                  {project.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
                <ul className="proj-tags" data-reveal style={i(5)} aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="proj-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="proj-links" data-reveal style={i(6)}>
                  <a className="proj-link" href={project.url} target="_blank" rel="noopener">
                    Visit {project.urlLabel}
                    <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                  {project.extraLink && (
                    <a
                      className="proj-link"
                      href={project.extraLink.url}
                      target="_blank"
                      rel="noopener"
                    >
                      {project.extraLink.label}
                      <span className="arrow" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
