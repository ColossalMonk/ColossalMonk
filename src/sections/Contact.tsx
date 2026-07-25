import { useState } from 'react';
import { IDENTITY, SOCIALS } from '../data/content';

export default function Contact() {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(IDENTITY.email);
      setCopied('done');
    } catch {
      setCopied('failed');
    }
    window.setTimeout(() => setCopied('idle'), 2400);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }} data-reveal>
          <span className="spark" aria-hidden="true">✺</span> Next · let&rsquo;s talk
        </p>
        <h2 id="contact-title" className="contact-title" data-reveal>
          Let&rsquo;s ship something people <em>come back</em> to.
        </h2>
        <p className="contact-sub" data-reveal>
          If you&rsquo;ve scrolled this far, we should probably talk. Open to
          product roles, collaborations, or a good conversation about AI, XR
          and zero-to-one building.
        </p>
        <div className="contact-actions" data-reveal>
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            {copied === 'done'
              ? 'Copied. It’s yours'
              : copied === 'failed'
                ? IDENTITY.email
                : 'Copy my email'}
          </button>
          <a className="btn btn-ghost" href={IDENTITY.linkedin} target="_blank" rel="noopener">
            LinkedIn <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a
            className="btn btn-ghost"
            href="/Siddhartha-Satyarthi-PM-Resume.pdf"
            target="_blank"
            rel="noopener"
          >
            Résumé <span className="arrow" aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="contact-direct" data-reveal>
          No forms, no funnels. Just{' '}
          <a href={`mailto:${IDENTITY.email}`}>{IDENTITY.email}</a>
        </p>
        <nav className="contact-socials" aria-label="Elsewhere on the internet" data-reveal>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              className="contact-social"
              href={social.url}
              target="_blank"
              rel="noopener"
            >
              {social.label} <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
