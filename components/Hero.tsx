import Button from "@/components/Button";
import { RESUME_URL, SITE } from "@/lib/constants";

/**
 * Landing hero: left-aligned resume tone, one screen below the sticky header.
 * The content column shares the page container's left gutter, so it lines up
 * with the wordmark in the header. Static — no motion of any kind.
 */
export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] items-center py-20">
      {/* Gutter sits inside the container, matching the header, so the column
          lines up with the wordmark. */}
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-[680px]">
          <h1 className="text-[2.5rem] font-bold tracking-[-0.02em] text-ink md:text-[4rem]">
            {SITE.name}
          </h1>

          <p className="mt-2 text-xl font-normal tracking-[0.05em] text-sage">
            CS Student
            <span className="mx-2">·</span>
            Full-Stack Engineer
          </p>

          <p className="mt-8 max-w-[520px] text-base leading-[1.8] text-muted">
            B.Tech Computer Science student at Bharati Vidyapeeth (DU), Pune. I
            build full-stack products across web, ML, and systems — with a focus
            on clean architecture and real-world impact. Currently serving as
            CIO at GreenFlag and open to internship opportunities and
            early-stage team collaborations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#projects" size="md">
              View Projects
            </Button>
            <Button
              href={RESUME_URL}
              variant="secondary"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
