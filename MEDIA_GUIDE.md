# Media Guide — Google Flow → Portfolio

Every video/animation surface on the site is a **media slot**, registered in
[`src/media.config.ts`](src/media.config.ts). The site ships with designed
placeholders, so it looks finished with zero assets. As you generate footage in
Google Flow, drop the files in and flip one flag per slot — no other code changes.

## The slots

All slots are **16:9** — matching your Flow export format, no cropping needed.
Every prompt is a scene from ONE miniature universe (tilt-shift world at night,
graphite void, silver mist, golden light-pixels), so the whole site reads as a
single film.

| Slot | Where it appears | Aspect | Scene |
| --- | --- | --- | --- |
| `hero` | Hero, full-width band | 16:9 | The builder's desk island (approved, see below) |
| `about` | About section | 16:9 | Two-sided room: product desk + builder desk |
| `saralai` | Project 01 (dark section) | 16:9 | Telephone exchange with golden threads |
| `textlift` | Project 02 (dark section) | 16:9 | Glass refinery turning letters into text |
| `couryr` | Project 03 (dark section) | 16:9 | Envelope of light on a zip line between islands |
| `cupidscode` | Project 04 (dark section) | 16:9 | Crane assembling a heart from golden blocks |
| `jobhuntin` | Project 05 (dark section) | 16:9 | Sorting office moving cards through gates |
| `asciistream` | Project 06 (dark section) | 16:9 | Open-air cinema, silhouette into character rain |

Each slot in `media.config.ts` has a `flowPrompt` field — an art-directed prompt
matched to the "premium kinetic" palette (graphite `#0B0B0D` / deepest `#050506`,
silver text `#F5F5F7`, champagne-gold accent `#C9A96A`). Renders should feel
like premium product films: dark, calm, machined silver light, one warm golden
moment — no purple, no neon, no rainbow iridescence. Use the prompts as
starting points in Flow — every placeholder on the site also shows its prompt
with a copy button.

## The hero prompt (approved)

The hero concept is locked: **a builder's desk on a floating island, tangerine
ink blooming into tiny products** (a blend of the miniature-desk, floating-island
and ink-to-product ideas). Paste this into Flow:

> Tilt-shift miniature world at night: a tiny cozy builder's desk with a glowing
> laptop sits on a small floating island, thin waterfalls of golden light-pixels
> spilling off the island's edge, a drop of luminous silver ink blooms in the
> air beside the desk and slowly morphs into tiny glass product shapes (a cube,
> a heart, a six-pointed spark) that drift down onto the desk and softly
> dissolve back into mist, deep graphite void (#0B0B0D), soft silver mist below,
> warm golden light-pixels (#C9A96A), premium product-film lighting, slow dreamy
> motion, seamless 10 second loop, 16:9, no text

**Fallback**: if the full composition renders muddy (three ideas is a lot for
a video model), drop the ink-morph and run this simpler pass:

> Tilt-shift miniature floating island in a deep graphite void, on it a tiny
> builder's desk with a glowing laptop, thin waterfalls of warm golden
> light-pixels falling off the island's edge, a single polished glass spark
> with champagne-gold glints slowly rotating above the desk, silver mist,
> premium product-film lighting, slow dreamy motion, seamless 10 second loop,
> 16:9, no text

Hero render notes:

- The **dissolve-back-to-ink ending** is what makes it loop. If your best take
  just ends, render a second or two longer and the loop point can be trimmed in.
- Target **1920×1080 or higher**, camera nearly locked off (tilt-shift miniatures
  sell better without drift).
- Keep the loops around **10 seconds**: long enough to feel alive, short enough
  to compress well.

## Workflow A — video loop (easiest)

1. Generate the clip in Flow. Keep it **subtle and loopable** (drifty motion, no hard cuts).
2. Export/transcode to a muted MP4, sized to roughly 1600px wide:
   ```sh
   ffmpeg -i flow-export.mp4 -an -vf "scale=1600:-2" -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart loop.mp4
   ```
   Target **under ~6 MB** per loop. If it's bigger, raise `-crf` to 26–28.
3. Drop it at `public/media/<slot>/loop.mp4`.
4. In `src/media.config.ts`, set that slot's `mode: 'video'`.

## Workflow B — scroll-scrubbed frame sequence (the showpiece)

The site scrubs through frames on a `<canvas>` as the visitor scrolls — the
Lando-Norris-style effect. Best for the `textlift` slot.

1. Generate the clip in Flow (4–6 seconds of continuous, directional motion
   reads best when scrubbed — a reveal, an assembly, a camera push).
2. Split it into frames:
   ```sh
   ffmpeg -i flow-export.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -quality 72 public/media/textlift/frame_%03d.webp
   ```
3. Count the frames it produced, then in `src/media.config.ts` set:
   ```ts
   mode: 'frames',
   frames: { count: <actual count>, pad: 3, ext: 'webp' },
   ```
   (`pad: 3` = filenames like `frame_001.webp`. If you exceed 999 frames, use
   `%04d` in ffmpeg and `pad: 4` — but you shouldn't: **90–150 frames is the
   sweet spot**. More frames = more downloads for visitors.)

### Frame budget

At quality 72 / 1600px, WebP frames land around 30–60 KB each, so 120 frames ≈
4–7 MB. That's acceptable for one flagship slot — don't do frame sequences for
all five slots. One scrubbed sequence + video loops elsewhere is the right mix.

## Checking your work

```sh
npm run dev
```

Scroll to the slot. Video slots should loop silently; frame slots should scrub
as you scroll (frames advance with scroll position, in both directions).
Placeholders mean the mode flag or file path doesn't match — check the browser
console for 404s.

## Rules the site already handles for you

- `prefers-reduced-motion`: videos don't autoplay, frames don't scrub (first frame shows as a still).
- Mobile: parallax panning is disabled; media still displays.
- Placeholders: any slot left in `placeholder` mode still looks designed — you can ship the site before the footage is ready.
