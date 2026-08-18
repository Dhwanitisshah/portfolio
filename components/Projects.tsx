import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { useReveal } from "@/lib/useReveal";

/** Delay added per card so they reveal in sequence rather than all at once. */
const STAGGER_MS = 100;

export default function Projects() {
  const register = useReveal();

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
                ref={register}
                // The delay sits here, not on the card, so it never holds up
                // the card's own hover transition.
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
