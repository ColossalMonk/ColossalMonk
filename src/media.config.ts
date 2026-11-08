/**
 * MEDIA SLOT REGISTRY
 * ───────────────────
 * Every video / frame-sequence surface on the site is registered here.
 * Generate assets offline (Google Flow), drop them into public/media/<slug>/,
 * then flip `mode` on the slot. Nothing else in the code needs to change.
 *
 *   mode: 'placeholder'  → designed placeholder (default, site looks finished without assets)
 *   mode: 'video'        → plays public/media/<slug>/<video.file> as a muted loop
 *   mode: 'frames'       → scroll-scrubbed canvas sequence from
 *                          public/media/<slug>/frame_001.webp … frame_NNN.webp
 *
 * ONE UNIVERSE: every prompt is a scene from the same tilt-shift miniature
 * world at night. Same void, same silver mist, same golden light-pixels,
 * same product-film lighting. All 16:9, all ~10 second seamless loops.
 * See MEDIA_GUIDE.md for the full workflow.
 */

export type MediaMode = 'placeholder' | 'video' | 'frames';

export interface MediaSlotConfig {
  slug: string;
  mode: MediaMode;
  /** CSS aspect-ratio, e.g. '16 / 9' */
  aspect: string;
  alt: string;
  video?: { file: string };
  frames?: { count: number; pad: number; ext: string };
  /** Suggested Google Flow prompt, art-directed to match the site palette. */
  flowPrompt: string;
}

/** Shared scene DNA appended to every prompt. */
const WORLD =
  'deep graphite void (#0B0B0D), soft silver mist below, warm golden light-pixels (#C9A96A), premium product-film lighting, slow dreamy motion, seamless 10 second loop, 16:9, no text';

export const MEDIA: Record<string, MediaSlotConfig> = {
  hero: {
    slug: 'hero',
    mode: 'video',
    aspect: '16 / 9',
    alt: "Hero loop: a builder's desk on a floating island, luminous ink blooming into tiny products",
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny cozy builder's desk with a glowing laptop sits on a small floating island, thin waterfalls of golden light-pixels spilling off the island's edge, a drop of luminous silver ink blooms in the air beside the desk and slowly morphs into tiny glass product shapes (a cube, a heart, a six-pointed spark) that drift down onto the desk and softly dissolve back into mist, ${WORLD}`,
  },
  about: {
    slug: 'about',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'About loop: a miniature two-sided room, product desk and builder desk joined by a bridge of light',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny two-sided room on a floating island, on the left a neat product desk with small glowing roadmap charts, on the right a builder desk with code glowing on a little screen, a slim bridge of golden light-pixels connects the two desks while tiny glowing idea-orbs travel across it in both directions, ${WORLD}`,
  },
  textlift: {
    slug: 'textlift',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'TextLift: a miniature glass refinery turning jumbled letters into clean text',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny glass refinery on a floating island, a small conveyor carries jumbled silver letters in one side and neat glowing lines of text emerge from the other, little golden lamps over each station, ${WORLD}`,
  },
  couryr: {
    slug: 'couryr',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'Couryr: a glowing envelope gliding between two miniature islands, its trail dissolving',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: two tiny floating islands connected by a thin zip line, a small envelope of warm golden light glides across while the trail of silver symbols behind it dissolves into nothing, ${WORLD}`,
  },
  jobhuntin: {
    slug: 'jobhuntin',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'JobHuntin: miniature sorting office moving glass cards through labelled gates',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny sorting office on a floating island, small frosted-glass cards glide along a miniature golden rail through a row of labelled gates, each card clicking into its slot with a soft silver glint, ${WORLD}`,
  },
  asciistream: {
    slug: 'asciistream',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'AsciiStream: a miniature open-air cinema where a silhouette dissolves into character rain',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny open-air cinema on a floating island, on its small screen a silhouette dissolves into streams of tiny silver monospace characters, a few characters drift off the screen edge as golden sparks, ${WORLD}`,
  },
  // Nudge: the keyboard launcher. Final render (Nov 2026); the full prompt
  // pack for more Nudge clips is in docs/nudge-veo-prompts.md.
  nudge: {
    slug: 'nudge',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'Nudge: a miniature keyboard on a floating island in silver mist, a frosted-glass pane rises with a blinking caret and tiny glass icons slide in, then it sinks back into the mist',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny floating island holds a small mechanical keyboard, a short keycap and the long spacebar press down together with a soft click, a slim pane of frosted glass with a blinking golden caret rises out of the silver mist above the keys, tiny glass objects (a folder, a note, a clock, a calculator) fly in from the mist and slot into the pane in a neat row, then the pane gently sinks back into the mist so the loop can restart, ${WORLD}`,
  },
  /*
   * PAUSED with Saral AI (see PROJECTS in src/data/content.ts). The render
   * is still in public/media/saralai/. Uncomment to bring it back.
   *
  saralai: {
    slug: 'saralai',
    mode: 'video',
    aspect: '16 / 9',
    alt: 'Saral AI: a miniature telephone exchange with golden threads linking tiny phones',
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny telephone exchange on a floating island, slim golden threads connect miniature phones while soft silver sound waves ripple between them, tiny letterforms in Devanagari and Latin drift inside the waves, ${WORLD}`,
  },
   */
  cupidscode: {
    slug: 'cupidscode',
    mode: 'video',
    aspect: '16 / 9',
    alt: "Cupid's Code: a miniature crane assembling a heart from glowing golden blocks",
    video: { file: 'loop.mp4' },
    frames: { count: 240, pad: 3, ext: 'webp' },
    flowPrompt: `Tilt-shift miniature world at night: a tiny crane on a floating island assembles a small heart from glowing golden blocks while silver confetti drifts softly, the heart pulses once then gently comes apart so the loop can restart, ${WORLD}`,
  },
};
