import type { ElementType } from "react";

export interface GlitchTextProps {
  /**
   * The text to render. Must be a plain string — the chromatic-aberration
   * layers are drawn from it via `content: attr(data-text)` in CSS.
   */
  text: string;
  /** Element to render as. Defaults to `span`. */
  as?: ElementType;
  /** `hover` glitches on hover/focus, `always` glitches continuously. */
  mode?: "hover" | "always";
  className?: string;
  /** Makes the element keyboard-focusable so the hover effect is reachable. */
  focusable?: boolean;
}

/**
 * Text with a 90s chromatic-aberration glitch.
 * Styles live in styles/globals.css under `.glitch-text`.
 */
export default function GlitchText({
  text,
  as: Tag = "span",
  mode = "hover",
  className = "",
  focusable = false,
}: GlitchTextProps) {
  const modeClass =
    mode === "always" ? "glitch-text--always" : "glitch-text--hover";

  return (
    <Tag
      className={`glitch-text ${modeClass} ${className}`.trim()}
      data-text={text}
      tabIndex={focusable ? 0 : undefined}
    >
      {text}
    </Tag>
  );
}
