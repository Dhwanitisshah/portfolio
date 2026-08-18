import GlitchText from "@/components/GlitchText";

export interface PageHeaderProps {
  /** Level indicator shown above the title, e.g. "LEVEL 02". */
  level: string;
  title: string;
  subtitle: string;
}

/** Shared masthead for interior pages. */
export default function PageHeader({
  level,
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b-2 border-neon-purple/30 px-4 py-16 text-center sm:px-6 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="retro-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.16),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="font-display text-[8px] tracking-[0.35em] text-neon-purple sm:text-[10px]">
          {level}
        </p>

        <h1 className="mt-6 font-display text-xl leading-[1.6] text-neon-pink sm:text-3xl md:text-4xl">
          <GlitchText text={title} focusable />
        </h1>

        <p className="mt-6 font-mono text-sm leading-relaxed text-content-secondary">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
