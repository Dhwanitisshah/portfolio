import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#FF006E",
          cyan: "#00D9FF",
          purple: "#9D4EDD",
          green: "#00FF00",
          yellow: "#FFD60A",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          secondary: "#1A1A2E",
        },
        content: {
          primary: "#E8E8E8",
          secondary: "#B0B0B0",
        },
        // Semantic aliases
        primary: "#FF006E",
        secondary: "#00D9FF",
        accent: "#9D4EDD",
        success: "#00FF00",
        warning: "#FFD60A",
      },
      fontFamily: {
        display: ['"Press Start 2P"', "system-ui", "sans-serif"],
        sans: ['"Courier Prime"', "ui-monospace", "monospace"],
        mono: ['"Courier Prime"', "ui-monospace", "monospace"],
        code: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        "neon-pink": "0 0 5px #FF006E, 0 0 20px rgba(255, 0, 110, 0.5)",
        "neon-cyan": "0 0 5px #00D9FF, 0 0 20px rgba(0, 217, 255, 0.5)",
        "neon-purple": "0 0 5px #9D4EDD, 0 0 20px rgba(157, 78, 221, 0.5)",
      },
      animation: {
        glitch: "glitch 2.5s infinite steps(2, end)",
        "glitch-fast": "glitch 400ms infinite steps(2, end)",
        flicker: "flicker 3s infinite",
        scanline: "scanline 8s linear infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.20" },
          "50%": { opacity: "0.28" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "neon-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
