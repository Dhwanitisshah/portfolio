import { useReveal } from "@/lib/useReveal";

const QUICK_FACTS = [
  { label: "Degree", value: "B.Tech CS & Business Systems" },
  { label: "University", value: "Bharati Vidyapeeth (DU), Pune" },
  { label: "Year", value: "2023 – 2027" },
  { label: "CGPA", value: "8.9 / 10" },
  { label: "Current", value: "CIO at GreenFlag" },
  { label: "SIH", value: "2024 Winner" },
];

export default function About() {
  const register = useReveal();

  return (
    <section id="about" className="scroll-mt-16 py-20">
      {/* The reveal transform sits here, not on the <section>: the section is
          the scroll anchor, and a transform on it would shift where nav links
          land. */}
      <div
        ref={register}
        className="reveal mx-auto w-full max-w-content px-5 sm:px-8"
      >
        <div className="max-w-[780px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            About
          </p>

          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
            Background
          </h2>

          {/* 60/40 split on desktop, stacked below it. */}
          <div className="mt-10 grid gap-10 md:grid-cols-5">
            <div className="flex flex-col gap-5 md:col-span-3">
              <p className="text-base leading-[1.8] text-muted">
                I’m a third-year B.Tech Computer Science &amp; Business Systems
                student at Bharati Vidyapeeth (DU) College of Engineering, Pune
                — currently serving as CIO at GreenFlag and interning at
                D.R.E.A.M. Labs.
              </p>
              <p className="text-base leading-[1.8] text-muted">
                I build across the full stack: production web apps, systems
                backends, and ML research. My work tends to sit at the
                intersection of engineering rigour and real-world usability —
                whether that’s a DPDP-compliant healthcare platform, an
                idempotent payment gateway, or a publishable interpretability
                study.
              </p>
              <p className="text-base leading-[1.8] text-muted">
                Previously a Research &amp; Engineering Intern at NTPC Limited.
                SIH’24 winner. Open to internship and freelance collaborations
                with early-stage teams.
              </p>
            </div>

            <dl className="divide-y divide-border md:col-span-2">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-[0.12em] text-sage">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[0.9rem] text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
