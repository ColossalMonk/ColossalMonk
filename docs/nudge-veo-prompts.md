# Nudge — Veo / Flow prompt pack

Source of truth for the look: nudgelauncher.com (read November 2026).

| Token | Value | Use |
| --- | --- | --- |
| Amber | `#F0B429` | The one accent: the mark, the highlighted word, key glows |
| Warm black | `#0C0B09` | Backgrounds (the site's dark mode) |
| Ink | `#1A1712` | Keycap legends, text on amber |
| Cream | `#F1ECE3` | Headlines, highlights |
| Mark | amber rounded square, lowercase `nudge` wordmark | Never recolour or distort |
| Voice | short, lowercase, a little playful: "A little nudge, and it's right there." | Mood |

The amber-on-near-black palette is deliberately close to the portfolio's
graphite + champagne-gold, so Nudge clips sit naturally in the same page.

## Rules that save credits

- Veo clips are about 8 seconds. Keep each prompt to **one** action.
- **Never ask Veo for readable UI or text.** It garbles letters. Ask for
  "no readable text", then add the `nudge` wordmark, key legends and
  captions in the edit. For anything that must show the real UI, use the
  real screen recording from the press kit (nudgelauncher.com/press, 16:9
  and 9:16 MP4s).
- If Flow offers **Frames to Video** or **Ingredients**, feed it the amber
  mark and one real screenshot of the launcher as references. It keeps the
  colours honest.
- Audio: Veo can generate sound. The prompts below ask for tiny clicks and
  one chime, no music, no voices, so you can lay your own track.
- Negative prompt for all of them: `text, letters, logos, watermark,
  subtitles, people's faces, neon, purple, blue, rainbow`.

---

## 1 · Portfolio loop (the slot on colossalmonk.vercel.app)

Matches the other eight scenes in the miniature universe. This exact text is
already in `src/media.config.ts` as the `nudge` slot's `flowPrompt`.

```
Tilt-shift miniature world at night: a tiny floating island holds a small mechanical keyboard, a short keycap and the long spacebar press down together with a soft click, a slim pane of frosted glass with a blinking golden caret rises out of the silver mist above the keys, tiny glass objects (a folder, a note, a clock, a calculator) fly in from the mist and slot into the pane in a neat row, then the pane gently sinks back into the mist so the loop can restart, deep graphite void (#0B0B0D), soft silver mist below, warm golden light-pixels (#C9A96A), premium product-film lighting, slow dreamy motion, seamless 10 second loop, 16:9, no text
```

**Status: rendered and live** (Nov 2026). The original sits in
`flow-renders/nudge-original.mp4` (gitignored) and the compressed loop in
`public/media/nudge/loop.mp4`, made with MEDIA_GUIDE.md "Workflow A":

```sh
ffmpeg -i flow-renders/nudge-original.mp4 -an -vf "scale=1600:-2" -c:v libx264 -crf 24 -pix_fmt yuv420p -movflags +faststart public/media/nudge/loop.mp4
```

The pane sinking back into the mist is what makes it loop. To re-render,
regenerate with the prompt above, rerun the command and the site picks it up.

---

## 2 · Hero teaser, 16:9 (landing page, X, YouTube)

```
Extreme macro, shallow depth of field. A slim black mechanical keyboard on a dark walnut desk at night, warm amber light glowing from under the keycaps. Two fingers press the Alt key and the long spacebar together. A thin pane of frosted glass with a soft amber edge glow and a blinking caret unfolds in the air above the keys, and a short shelf of tiny abstract glowing line icons slides out beneath it. Slow 10 cm dolly-in, then a gentle rack focus from the keys to the glowing pane. Cinematic product-film lighting, warm amber (#F0B429) against near-black (#0C0B09), cream highlights, subtle film grain. Audio: one soft mechanical key click, a quiet airy chime as the pane appears, faint room tone, no music, no voices. No readable text, no logos. 16:9, 8 seconds.
```

## 3 · Vertical cut, 9:16 (Reels, Shorts, TikTok)

```
Vertical 9:16, locked-off close top-down shot of a dark desk at night, a slim mechanical keyboard in the lower half of frame with warm amber backlight under the keys. Two fingers press the Alt key and the long spacebar together on the first second. A frosted-glass bar with an amber glow and a blinking caret pops up in the air above the keyboard, then tiny glowing icons (a calculator, a clock, a folder, a music note) hop into it one after another in a neat row. Keep the bottom third of the frame calm and empty for captions. Premium product-film lighting, amber (#F0B429) on near-black (#0C0B09), cream highlights. Audio: crisp key click on the press, tiny pops as each icon lands, a soft chime at the end, no music, no voices. No readable text, no logos. 8 seconds.
```

## 4 · "Fifty small jobs a day, one box" (the idea in one shot)

```
Locked-off top-down shot of a dark desk at night, scattered over it a dozen tiny glowing objects: a calculator, a clock, a folder, a coin, a paperclip, a music note, a smiley sticker, a tiny window frame. A beat of stillness, then every object lifts and flies in a smooth curved arc into one slim amber-edged glass bar in the centre of the desk. The bar pulses once with warm light and the desk is suddenly calm and empty. Slow, satisfying, premium product-film lighting, amber (#F0B429) glow on near-black (#0C0B09), cream highlights, soft shadows. Audio: soft clicks as objects leave the desk, one low satisfying thunk when the bar pulses, no music, no voices. No readable text, no logos. 16:9, 8 seconds.
```

## 5 · End card / sign-off

```
Near-black background (#0C0B09) with faint warm dust floating. A small amber (#F0B429) rounded square glides into the centre of frame, settles with a soft glow, and a single faint ring of amber light-pixels ripples outward and fades. Locked-off camera, very slow, calm, premium. Audio: one warm chime, silence after. No text, no logos. 16:9, 6 seconds.
```

Add the lowercase `nudge` wordmark and `nudgelauncher.com` in the edit.

---

## Suggested order

1. **Prompt 1** for the portfolio (the only one the site needs).
2. **Prompts 2 + 5** stitched = a 14-second launch teaser.
3. **Prompt 3** for Reels / Shorts, **prompt 4** as the second beat for X.
4. Cut in 2 to 3 real UI clips from the press-kit screen recording between the
   Veo shots so people see the real product.
