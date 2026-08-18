import Layout from "@/components/Layout";

const TITLE = "DHWANIT'S DEV QUEST";

export default function Home() {
  return (
    <Layout title="Dhwanit's Dev Quest — Loading…">
      <section className="retro-grid relative flex min-h-[calc(100vh-9rem)] items-center justify-center overflow-hidden px-4 py-20 sm:px-6">
        {/* Ambient neon glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,78,221,0.18),transparent_65%)]"
        />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
          <p className="font-display text-[8px] tracking-[0.35em] text-neon-purple sm:text-[10px]">
            PLAYER 1 &nbsp;·&nbsp; LEVEL 00
          </p>

          <h1
            className="glitch-text mt-8 font-display text-2xl leading-[1.6] text-neon-pink sm:text-4xl md:text-5xl"
            data-text={TITLE}
          >
            {TITLE}
          </h1>

          <p className="mt-10 font-display text-[10px] leading-relaxed text-neon-cyan sm:text-sm">
            Loading Portfolio
            <span className="animate-blink ml-1">_</span>
          </p>

          {/* Loading bar */}
          <div
            className="mt-8 h-5 w-full max-w-md border-2 border-neon-cyan/70 bg-dark-secondary p-1 shadow-neon-cyan"
            role="progressbar"
            aria-valuenow={35}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Portfolio loading progress"
          >
            <div className="h-full w-[35%] animate-neon-pulse bg-neon-pink" />
          </div>

          <p className="mt-4 font-mono text-xs text-content-secondary">
            PHASE 0 · FOUNDATION COMPLETE
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {["NEXT.JS", "TYPESCRIPT", "TAILWIND"].map((tag) => (
              <span
                key={tag}
                className="border border-neon-purple/60 bg-dark-secondary/70 px-3 py-2 font-display text-[8px] tracking-wider text-content-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-14 font-display text-[8px] leading-relaxed text-warning sm:text-[10px]">
            PRESS START TO CONTINUE
            <span className="animate-blink ml-1">▮</span>
          </p>
        </div>
      </section>
    </Layout>
  );
}
