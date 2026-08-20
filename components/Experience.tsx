import { EXPERIENCE } from "@/lib/experience";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  const register = useReveal();

  return (
    <section id="experience" className="scroll-mt-16 py-20">
      {/* Reveal on the inner wrapper, not the anchor -- see About.tsx. */}
      <div
        ref={register}
        className="reveal mx-auto w-full max-w-content px-5 sm:px-8"
      >
        <div className="max-w-[780px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Experience
          </p>

          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
            Where I’ve Worked
          </h2>

          {/* The rule is each entry's left border, so it runs unbroken between
              them; spacing is padding rather than a gap for the same reason. */}
          <ol className="mt-10">
            {EXPERIENCE.map((entry, index) => (
              <li
                key={`${entry.company}-${entry.role}`}
                className={`relative border-l-2 border-border pl-6 ${
                  index === EXPERIENCE.length - 1 ? "" : "pb-8"
                }`}
              >
                {/* 12px dot centred on the 2px rule: -1px - 6px = -7px. */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-sage ring-4 ring-background"
                />

                <h3 className="text-base font-bold text-ink">{entry.role}</h3>

                <p className="mt-1 text-[0.9rem]">
                  <span className="text-sage">{entry.company}</span>
                  <span className="text-muted">
                    {" — "}
                    {entry.companyDescription}
                  </span>
                </p>

                <p className="mt-1 text-sm italic text-muted">
                  {entry.period} · {entry.type}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-muted">
                      <span aria-hidden="true" className="select-none">
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
