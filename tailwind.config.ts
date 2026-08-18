import type { Config } from "tailwindcss";

/**
 * Design tokens for the portfolio: soft, sophisticated, light.
 * Hex values are mirrored in `lib/constants.ts` for use outside of CSS.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Page background — light sage tint, almost neutral. */
        background: "#F5F8F6",
        /** Cards and raised surfaces. */
        surface: "#FFFFFF",
        /** Row / nav hover wash. */
        hover: "#F0F4F1",
        /** Hairline dividers. */
        border: "#E0E0E0",
        /** Text primary. */
        ink: "#1A1A1A",
        /** Text secondary. */
        muted: "#4A4A4A",
        /** Accent primary — links, hovers, active states. */
        sage: {
          DEFAULT: "#6B8E73",
          dark: "#5A7A62",
          light: "#B5C7B9",
          tint: "#E8EEE9",
        },
        /** Accent secondary — badges, small details. */
        clay: {
          DEFAULT: "#8B7355",
          dark: "#725E46",
          light: "#C4B29C",
          tint: "#F1ECE5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(26 26 26 / 0.04)",
        card: "0 1px 3px 0 rgb(26 26 26 / 0.06), 0 1px 2px -1px rgb(26 26 26 / 0.04)",
        elevated:
          "0 8px 24px -8px rgb(26 26 26 / 0.12), 0 2px 6px -2px rgb(26 26 26 / 0.06)",
        /** Card hover lift. */
        lift: "0 4px 12px rgb(0 0 0 / 0.08)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
