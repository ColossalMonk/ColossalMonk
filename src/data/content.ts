export const IDENTITY = {
  name: 'Siddhartha Satyarthi',
  alias: 'ColossalMonk',
  role: 'Product Manager',
  location: 'Delhi-NCR, India',
  email: '17siddhartha.satyarthi@gmail.com',
  linkedin: 'https://linkedin.com/in/colossalmonk',
  tagline: 'PM by profession. Builder by instinct. Ships things people come back to.',
};

export const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/ColossalMonk' },
  { label: 'X / Twitter', url: 'https://x.com/ColossalMonk' },
  { label: 'itch.io', url: 'https://colossalmonk.itch.io' },
  { label: 'Instagram', url: 'https://www.instagram.com/colossalmonk' },
];

/** The lab — games and experiments. `url` = live on itch.io. */
export const LAB: Array<{ name: string; url?: string }> = [
  { name: 'Pop Squad!!!', url: 'https://colossalmonk.itch.io/pop-squad' },
  { name: 'Mochi Drop ✿', url: 'https://colossalmonk.itch.io/mochi-drop' },
  { name: 'RetroChess', url: 'https://colossalmonk.itch.io/retrochess' },
  { name: 'Cyber Pong', url: 'https://colossalmonk.itch.io/cyber-pong' },
  { name: 'Nucleus Nemesis', url: 'https://colossalmonk.itch.io/nucleus-nemesis' },
  { name: 'Infinite Runner ChatGPT', url: 'https://colossalmonk.itch.io/infinite-runner-chatgpt' },
  { name: 'Dodge The Block', url: 'https://colossalmonk.itch.io/dodge-the-block' },
  { name: 'Cube Pew Pewing Spheres', url: 'https://colossalmonk.itch.io/cube-pew-pewing-spheres' },
  { name: 'Pokedex', url: 'https://colossalmonk.itch.io/pokedex' },
  { name: 'BeatBloom' },
  { name: 'Glypho' },
  { name: 'Spell Duel' },
  { name: 'Wake-a-Mole' },
  { name: 'MindMaze' },
  { name: 'PixelPetal' },
  { name: 'ColorCraft' },
  { name: 'QuestiGo' },
  { name: 'EmberHeart' },
];

export const STATS = [
  { value: 4, suffix: '+', label: 'years in product' },
  { value: 20, suffix: '+', label: 'startups incubated' },
  { value: 170, suffix: '+', label: 'concepts validated' },
  { value: 250, suffix: '+', label: 'monthly users, own products' },
];

export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  highlight: string;
  detail: string;
}

export const EXPERIENCE: Role[] = [
  {
    company: 'Nasscom Foundation',
    title: 'Product Manager',
    location: 'Noida, IN',
    period: 'Jun 2024 - Present',
    highlight: '500+ startup products · 20+ incubations',
    detail:
      'Vision, roadmap and go-to-market for early-stage startup products. Validated product-market fit for 170+ concepts through structured discovery, and cut delivery bottlenecks 25% across 100+ purchase orders.',
  },
  {
    company: 'Goldenflitch',
    title: 'Product Manager',
    location: 'Gurugram, IN · Remote',
    period: 'Sep 2023 - Mar 2024',
    highlight: 'Digital Twin VR · +20% performance',
    detail:
      'Owned end-to-end delivery of a Unity-based Digital Twin VR solution for industrial IoT: sprint planning, user stories and acceptance criteria, with data-driven UX optimisation lifting performance 20%.',
  },
  {
    company: 'Grappus',
    title: 'Associate Product Manager',
    location: 'Gurugram, IN',
    period: 'Nov 2022 - Aug 2023',
    highlight: 'Telecom roadmaps · 30+ collaborators',
    detail:
      'Prioritised roadmaps across multiple telecom product lines, defined and monitored KPIs, and coordinated 30+ engineers, designers and business stakeholders through Agile ceremonies.',
  },
  {
    company: 'Mobiloitte Technologies',
    title: 'Technical Lead, Product',
    location: 'Delhi, IN',
    period: 'Jan 2022 - Oct 2022',
    highlight: 'Metaverse products · 30-50% FPS gains',
    detail:
      'Led strategy and technical execution for a Metaverse office and a multiplayer racing game, Unity plus blockchain on the web, with 2-4x faster load times and 30-50% FPS improvements.',
  },
  {
    company: 'Neo Marche',
    title: 'Product Lead, VR Solutions',
    location: 'London, UK · Remote',
    period: 'Aug 2021 - Jun 2022',
    highlight: 'London Fashion Week · 3,000+ engagements',
    detail:
      'Launched a VR try-on and kiosk experience at London Fashion Week, validating product-market fit for virtual fashion retail. Improved UX comfort 15% and cut processing load 20%.',
  },
];

export interface Project {
  index: string;
  name: string;
  kind: string;
  url: string;
  urlLabel: string;
  description: string;
  metrics: string[];
  tags: string[];
  mediaId: string;
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Saral AI',
    kind: 'AI Voice Agents · The first true SaaS · Building now',
    url: 'https://saral-ai-delta.vercel.app/',
    urlLabel: 'saral-ai-delta.vercel.app',
    description:
      'Everything the five ships below taught me, poured into one product: AI voice agents that answer business calls around the clock for Indian SMBs, fluent in Hindi, English and Hinglish, tagging every lead hot, warm or cold, and handing the tricky conversations to humans.',
    metrics: ['24/7 call handling', 'Hindi · English · Hinglish', 'Sub-500ms voice responses'],
    tags: ['Voice AI', 'SMB', 'In progress'],
    mediaId: 'saralai',
  },
  {
    index: '02',
    name: 'TextLift',
    kind: 'AI SaaS · A purposeful ship',
    url: 'https://textlift.space',
    urlLabel: 'textlift.space',
    description:
      'An AI-powered text analysis suite: six tools spanning AI detection, originality checks, humanising and rewriting. Multi-model under the hood (GPT, Claude, Gemini, Grok) with a privacy-first, in-memory architecture and BYOK so users bring their own keys.',
    metrics: ['50+ MAU, fully organic', '6 tools shipped', '4 LLM providers'],
    tags: ['React', 'LLM Integration', 'BYOK', 'Privacy-first'],
    mediaId: 'textlift',
  },
  {
    index: '03',
    name: 'Couryr',
    kind: 'Privacy Tech · A purposeful ship',
    url: 'https://couryr.netlify.app',
    urlLabel: 'couryr.netlify.app',
    description:
      'Zero-trace, end-to-end encrypted peer-to-peer file transfer. No server storage, no accounts, no logs. Files stream directly between peers and vanish when the tab closes.',
    metrics: ['0 bytes stored server-side', 'E2E encrypted', 'Direct P2P streaming'],
    tags: ['WebRTC', 'Encryption', 'P2P'],
    mediaId: 'couryr',
  },
  {
    index: '04',
    name: "Cupid's Code",
    kind: 'Consumer Web · A purposeful ship',
    url: 'https://cupidscode.netlify.app',
    urlLabel: 'cupidscode.netlify.app',
    description:
      "A Valentine's Day interactive experience, conceived, built and shipped against a hard seasonal deadline. A live test of rapid go-to-market execution for time-bound consumer products.",
    metrics: ['200+ users at peak', 'Shipped in days, not months'],
    tags: ['Rapid GTM', 'Seasonal', 'Interactive'],
    mediaId: 'cupidscode',
  },
  {
    index: '05',
    name: 'JobHuntin',
    kind: 'AI Career Tool · For myself and others',
    url: 'https://jobhuntin.netlify.app/',
    urlLabel: 'jobhuntin.netlify.app',
    description:
      'A structured, AI-powered job-hunt pipeline: every application, stage and follow-up tracked in one system instead of a dying spreadsheet. Built to fix my own search first, then shared with everyone hunting alongside me.',
    metrics: ['Full pipeline tracking', 'AI-assisted search'],
    tags: ['AI', 'Productivity', 'Careers'],
    mediaId: 'jobhuntin',
  },
  {
    index: '06',
    name: 'AsciiStream',
    kind: 'Creative Tool · Purely for fun',
    url: 'https://asciistream.netlify.app/',
    urlLabel: 'asciistream.netlify.app',
    description:
      'A real-time webcam filter that converts live video into dynamic ASCII art at 60 FPS in the browser: multiple charsets, color modes from Matrix green to true color, and fine controls for resolution, contrast and grain. No business case, just joy.',
    metrics: ['60 FPS in-browser rendering', '5+ charsets · 6 color modes'],
    tags: ['React', 'Canvas', 'Real-time'],
    mediaId: 'asciistream',
  },
];

export const SKILLS_PRODUCT = [
  'Product Strategy',
  'Roadmap Planning',
  'Go-to-Market',
  'Customer Discovery',
  'Product-Market Fit',
  'Competitive Analysis',
  'OKR / KPI Management',
  'A/B Testing',
  'User Story Mapping',
  'Backlog Prioritisation',
  'Product-Led Growth',
  'Stakeholder Management',
];

export const SKILLS_BUILDER = [
  'React',
  'TypeScript',
  'Node.js',
  'Unity',
  'WebGL',
  'PostgreSQL',
  'Supabase',
  'Firebase',
  'MongoDB',
  'Microservices',
  'System Design',
  'Git',
  'LLM Integration',
  'Generative AI',
  'Agentic AI',
  'RAG Systems',
  'Prompt Engineering',
  'XR / VR / AR',
  'Spatial Computing',
];

export const TOOLS = [
  'JIRA',
  'Asana',
  'Linear',
  'Notion',
  'Confluence',
  'Figma',
  'FigJam',
  'Miro',
  'Mixpanel',
  'Amplitude',
  'Tableau',
  'Power BI',
  'Google Analytics',
  'SQL',
];

export const RECOGNITION = [
  {
    title: 'Smart India Hackathon 2023 Winner',
    detail: 'Ministry of Ayush · innovation in social-impact product development',
  },
  {
    title: 'HackAIThon, 3rd Place',
    detail: 'Reskill & SRIT, Jabalpur',
  },
  {
    title: '50+ hackathons mentored',
    detail: '30+ workshops delivered on product development and emerging tech',
  },
  {
    title: 'Unity Student Ambassador',
    detail: '5+ campus workshops on game development and XR for 50+ developers',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

/**
 * TESTIMONIALS — the section renders only when this array has entries.
 * Collect real quotes (LinkedIn recommendations, founders you incubated,
 * teammates) and paste them here. Never invent these. Template:
 *
 * {
 *   quote: 'One or two sentences, in their own words.',
 *   name: 'Full Name',
 *   title: 'Role, Company',
 * },
 */
export const TESTIMONIALS: Testimonial[] = [];

export const EDUCATION = [
  { degree: 'MBA, IT & Operations', school: 'Delhi University', period: '2023 - 2025' },
  { degree: 'B.Tech, Computer Science', school: 'GGSIPU, Delhi', period: '2017 - 2021' },
];
