/**
 * Single source of truth for design tokens, site metadata and navigation.
 *
 * Colour and spacing values here mirror `tailwind.config.ts`. Prefer the
 * Tailwind utilities in components; reach for these constants when a value is
 * needed in TypeScript (metadata, inline SVG fills, canvas, etc.).
 */

export const COLORS = {
  /** Page background — light sage tint, almost neutral. */
  background: "#F5F8F6",
  /** Cards and raised surfaces. */
  surface: "#FFFFFF",
  /** Row / nav hover wash. */
  hover: "#F0F4F1",
  /** Hairline dividers. */
  border: "#E0E0E0",
  /** Near black. */
  textPrimary: "#1A1A1A",
  /** Muted gray. */
  textSecondary: "#4A4A4A",
  /** Sage green — links, hovers, accents. */
  accentPrimary: "#6B8E73",
  /** Sage green, deepened for hover/active. */
  accentPrimaryDark: "#5A7A62",
  /** Warm brown — badges, details. */
  accentSecondary: "#8B7355",
  /** Warm brown, deepened for hover/active. */
  accentSecondaryDark: "#725E46",
} as const;

export type ColorToken = keyof typeof COLORS;

/**
 * Vertical rhythm and layout tokens, expressed in Tailwind's 0.25rem scale so
 * they stay in step with utility classes (`SPACING.section` -> `py-20`).
 */
export const SPACING = {
  /** Gap between related items in a group. */
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  /** Padding above/below a page section. */
  section: "5rem",
  /** Horizontal page gutter on small screens. */
  gutter: "1.25rem",
  /** Max width of the readable content column. */
  contentWidth: "72rem",
  /** Height of the sticky header — offset anchors by this. */
  headerHeight: "4rem",
} as const;

export const SITE = {
  name: "Dhwanit Shah",
  /** Compact wordmark used in the header. */
  shortName: "Dhwanit",
  /** Monogram fallback for very small viewports. */
  monogram: "DS",
  title: "Dhwanit Shah — Full-Stack Engineer & CS Student",
  description:
    "B.Tech CS student at Bharati Vidyapeeth (DU), Pune. Full-stack engineer building across web, ML, and systems. SIH'24 Winner. Open to internship and freelance opportunities.",
  /** Override with NEXT_PUBLIC_SITE_URL if the deployment moves. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-umber-seven-80.vercel.app",
  email: "dhwanitshah1309@gmail.com",
  locale: "en_US",
} as const;

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${SITE.email}` },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dhwanit-shah-11b781291/",
  },
  { label: "GitHub", href: "https://github.com/Dhwanitisshah" },
] as const;

/**
 * Header navigation. Sections live on the home page and are filled in over
 * later phases; switching to standalone routes later is a change to `href`
 * only.
 */
export const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

/** Served from `public/assets`. */
export const RESUME_URL = "/assets/resume.pdf";
