import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/tokens.css';
import './styles/base.css';
import './styles/main.css';
import './styles/blend.css';
import App from './App';

// for the curious: hello from the monk
console.log(
  '%c ✺ colossalmonk ',
  'background:#0b0b0d;color:#c9a96a;padding:6px 10px;border-radius:4px;font-family:monospace;font-size:12px;',
  'Always learning. Hand-built with React + GSAP. Poke around: https://github.com/ColossalMonk',
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
