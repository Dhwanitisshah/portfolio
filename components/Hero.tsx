import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import StatBadge, { type StatBadgeProps } from "@/components/StatBadge";
import { RESUME_URL, SITE } from "@/lib/constants";

const STATS: StatBadgeProps[] = [
  {
    icon: "🏆",
    title: "SIH'24 WINNER",
    description: "Led 6-person team, AI solution",
    accent: "pink",
  },
  {
    icon: "📊",
    title: "8.9 / 10 CGPA",
    description: "Consistent academic excellence",
    accent: "cyan",
  },
  {
    icon: "🔗",
    title: "1,288 LinkedIn",
    description: "Active in tech community",
    accent: "purple",
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-var(--header-h))] w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-6"
    >
      {/* ---------- Animated background ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora" />
        <div className="starfield-layer starfield-layer--far" />
        <div className="starfield-layer starfield-layer--mid" />
        <div className="starfield-layer starfield-layer--near" />
        <div className="retro-grid absolute inset-0 opacity-60" />
        <div className="horizon-glow" />
        {/* Keeps text legible over the busiest part of the background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.75),rgba(10,10,10,0.35)_60%,transparent)]" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <p className="font-display text-[8px] tracking-[0.35em] text-neon-purple sm:text-[10px]">
          PLAYER 1 &nbsp;·&nbsp; LEVEL 01
        </p>

        <h1
          id="hero-title"
          className="mt-8 font-display text-2xl leading-[1.6] text-neon-pink sm:text-4xl md:text-5xl"
        >
          <GlitchText text={SITE.title} focusable />
        </h1>

        <p className="mt-8 max-w-2xl font-display text-[9px] leading-loose text-neon-cyan sm:text-xs">
          {SITE.tagline}
        </p>

        {/* ---------- Stat badges ---------- */}
        <ul className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {STATS.map((stat) => (
            <StatBadge key={stat.title} {...stat} />
          ))}
        </ul>

        {/* ---------- CTAs ---------- */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
          <Link
            href="/projects"
            className="w-full border-2 border-neon-pink bg-neon-pink px-8 py-5 font-display text-[10px] leading-relaxed tracking-wider text-dark shadow-neon-pink transition-all duration-150 hover:brightness-110 hover:shadow-[0_0_10px_#FF006E,0_0_35px_rgba(255,0,110,0.85),0_0_70px_rgba(255,0,110,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-cyan active:scale-95 sm:w-auto sm:text-xs"
          >
            START QUEST →
          </Link>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border-2 border-neon-cyan px-8 py-5 font-display text-[10px] leading-relaxed tracking-wider text-neon-cyan transition-all duration-150 hover:bg-neon-cyan/10 hover:shadow-[0_0_10px_#00D9FF,0_0_35px_rgba(0,217,255,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-pink active:scale-95 sm:w-auto sm:text-xs"
          >
            VIEW RESUME
          </a>
        </div>

        <p className="mt-14 font-display text-[8px] leading-relaxed text-warning sm:text-[10px]">
          PRESS START TO CONTINUE
          <span className="animate-blink ml-1">▮</span>
        </p>
      </div>
    </section>
  );
}
