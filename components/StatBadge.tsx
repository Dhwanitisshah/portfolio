export type StatAccent = "cyan" | "pink" | "purple";

export interface StatBadgeProps {
  /** Emoji or short glyph shown above the title. */
  icon: string;
  /** Headline stat, e.g. "8.9 / 10 CGPA". */
  title: string;
  /** Supporting line beneath the title. */
  description: string;
  accent?: StatAccent;
}

/**
 * Tailwind can't build class names from interpolated strings, so each accent
 * lists its classes in full.
 */
const ACCENTS: Record<StatAccent, { border: string; text: string; glow: string }> = {
  cyan: {
    border: "border-neon-cyan/50 hover:border-neon-cyan",
    text: "text-neon-cyan",
    glow: "hover:shadow-neon-cyan",
  },
  pink: {
    border: "border-neon-pink/50 hover:border-neon-pink",
    text: "text-neon-pink",
    glow: "hover:shadow-neon-pink",
  },
  purple: {
    border: "border-neon-purple/50 hover:border-neon-purple",
    text: "text-neon-purple",
    glow: "hover:shadow-neon-purple",
  },
};

export default function StatBadge({
  icon,
  title,
  description,
  accent = "cyan",
}: StatBadgeProps) {
  const style = ACCENTS[accent];

  return (
    <li
      className={`group flex h-full flex-col items-center gap-3 border-2 bg-dark-secondary/60 px-5 py-6 text-center backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 ${style.border} ${style.glow}`}
    >
      <span
        aria-hidden="true"
        className="text-2xl transition-transform duration-200 group-hover:scale-110"
      >
        {icon}
      </span>

      <p
        className={`font-display text-[10px] leading-relaxed tracking-wide sm:text-xs ${style.text}`}
      >
        {title}
      </p>

      <p className="font-mono text-xs leading-relaxed text-content-secondary">
        {description}
      </p>
    </li>
  );
}
