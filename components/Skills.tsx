import { SKILL_CATEGORIES } from "@/lib/skills";
import { useReveal } from "@/lib/useReveal";

export default function Skills() {
  const register = useReveal();

  return (
    <section id="skills" className="scroll-mt-16 py-20">
      {/* The reveal transform sits here, not on the <section>: the section is
          the scroll anchor, and a transform on it would shift where nav links
          land. */}
      <div
        ref={register}
        className="reveal mx-auto w-full max-w-content px-5 sm:px-8"
      >
        <div className="max-w-[780px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Skills
          </p>

          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
            Technical Skills
          </h2>

          <dl className="mt-10 divide-y divide-border">
            {SKILL_CATEGORIES.map(({ category, skills }) => (
              <div
                key={category}
                className="flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:gap-6"
              >
                <dt className="text-sm font-bold uppercase tracking-[0.08em] text-sage sm:min-w-[120px] sm:pt-1">
                  {category}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-150 hover:border-sage hover:bg-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
