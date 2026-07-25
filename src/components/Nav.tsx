import { useEffect, useState } from 'react';
import { scrollToHash } from '../lib/scroll';
import Scramble from './Scramble';

const LINKS = [
  { href: '#about', label: 'About', optional: true },
  { href: '#experience', label: 'Experience', optional: true },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <nav className="container-wide nav-inner" aria-label="Primary">
        <a className="nav-mark" href="#top" onClick={scrollToHash}>
          <span className="spark" aria-hidden="true">
            ✺
          </span>
          <Scramble texts={['SIDDHARTHA SATYARTHI', 'COLOSSALMONK']} interval={4600} />
        </a>
        <div className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              className="nav-link"
              href={link.href}
              onClick={scrollToHash}
              {...(link.optional ? { 'data-optional': '' } : {})}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-ghost"
            href="/Siddhartha-Satyarthi-PM-Resume.pdf"
            target="_blank"
            rel="noopener"
          >
            Résumé <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
