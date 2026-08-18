import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Fonts are self-hosted by `next/font` at build time: no runtime request to
 * Google, no flash of unstyled text. Each exposes a CSS variable that
 * `tailwind.config.ts` reads in `theme.extend.fontFamily`.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

/** Applied once, on the root element in `_app.tsx`. */
export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;
