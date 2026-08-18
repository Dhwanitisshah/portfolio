/**
 * Shared design tokens and site metadata.
 * Keep in sync with tailwind.config.ts and styles/globals.css.
 */

export const COLORS = {
  primary: "#FF006E", // Hot Neon Pink
  secondary: "#00D9FF", // Bright Cyan
  accent: "#9D4EDD", // Electric Purple
  darkBg: "#0A0A0A",
  darkSecondary: "#1A1A2E",
  textPrimary: "#E8E8E8",
  textSecondary: "#B0B0B0",
  success: "#00FF00",
  warning: "#FFD60A",
} as const;

export const FONTS = {
  display: '"Press Start 2P"',
  body: '"Courier Prime"',
  code: '"JetBrains Mono"',
} as const;

export const SITE = {
  name: "Dhwanit's Dev Quest",
  title: "DHWANIT'S DEV QUEST",
  description: "A 90s arcade-flavoured portfolio by Dhwanit Shah.",
  author: "Dhwanit Shah",
} as const;

export type ColorName = keyof typeof COLORS;
