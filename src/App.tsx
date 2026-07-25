import { useRef } from 'react';
import { useSmoothScroll } from './lib/scroll';
import { useScrollMotion } from './lib/motion';
import { useReveal } from './hooks/useReveal';

import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Lab from './sections/Lab';
import Recognition from './sections/Recognition';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useScrollMotion(rootRef);
  useReveal(rootRef);

  return (
    <div ref={rootRef} id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Curtain />
      <Nav />
      <main id="main-content">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Lab />
        <Recognition />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
