import { useEffect, useRef } from "react";

import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

/** Delay added per card so they reveal in sequence rather than all at once. */
const STAGGER_MS = 100;

export default function Projects() {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  // The reveal is a class toggle rather than React state: it touches only the
  // DOM, so no card re-renders as the list scrolls into view.
  useEffect(() => {
    const items = itemRefs.current.filter(
      (el): el is HTMLLIElement => el !== null,
    );

    // Without IntersectionObserver, show everything rather than nothing.
    if (typeof IntersectionObserver === "undefined") {
      for (const el of items) el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          // Reveal is one-way; stop watching once it has fired.
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of items) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="scroll-mt-16 py-20">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-[780px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Projects
          </p>

          <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
            What I’ve Built
          </h2>

          <ul className="mt-10 flex flex-col gap-5">
            {PROJECTS.map((project, index) => (
              <li
                key={project.slug}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                style={{ transitionDelay: `${index * STAGGER_MS}ms` }}
                className="reveal"
              >
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
