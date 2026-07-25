<div align="center">

# ✺ Siddhartha Satyarthi · ColossalMonk

**PM by profession. Builder by instinct. Ships things people come back to.**

[**colossalmonk.vercel.app**](https://colossalmonk.vercel.app/)

</div>

Product Manager with 4+ years across B2B, XR/VR, EdTech and AI. After hours:
five live products, ten games on [itch.io](https://colossalmonk.itch.io), and
currently building **Saral AI**, my first true SaaS (multilingual AI voice
agents for Indian SMBs).

This repo is the portfolio itself: a premium-kinetic single page (graphite,
machined silver, champagne gold) where every media surface is a scene from one
tilt-shift miniature universe, rendered in Google Flow. Even
[the 404 is a game](https://colossalmonk.vercel.app/404).

## Stack

- Vite + React 19 + TypeScript
- GSAP + ScrollTrigger (kinetic text, scroll choreography) + Lenis smooth scroll
- No component library: hand-rolled design system in `src/styles/`
- Media pipeline: Google Flow renders → ffmpeg (CRF 24, 1600px) → `public/media/`

## Run

```sh
npm install
npm run dev       # local dev
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Structure

```
src/
├── data/content.ts     ← all site copy lives here
├── media.config.ts     ← media slot registry (Flow prompts + modes)
├── styles/             ← tokens → base → main → blend (override layer)
├── components/         ← Nav, MediaSlot, Marquee, BackToTop, …
├── sections/           ← Hero, About, Experience, Projects, Skills, …
└── lib/                ← scroll (Lenis), motion (GSAP kinetics)
404.html                ← Spark Catcher, the 404 minigame
```

Media workflow (prompts, ffmpeg commands, slot table): [MEDIA_GUIDE.md](MEDIA_GUIDE.md).

## Elsewhere

[LinkedIn](https://linkedin.com/in/colossalmonk) ·
[itch.io](https://colossalmonk.itch.io) ·
[X / Twitter](https://twitter.com/ColossalMonk) ·
[Instagram](https://instagram.com/colossalmonk) ·
17siddhartha.satyarthi@gmail.com
