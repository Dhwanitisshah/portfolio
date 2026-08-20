import fs from "node:fs";
import path from "node:path";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SOCIAL_LINKS } from "@/lib/constants";
import { PROJECTS, type Project } from "@/lib/projects";
import { useReveal } from "@/lib/useReveal";

/** Hairline between sections, aligned to the page container. */
function SectionDivider() {
  return (
    <div className="mx-auto max-w-content px-5 sm:px-8">
      <hr className="border-t border-border" />
    </div>
  );
}

/** `mailto:dhwanit@…` -> `dhwanit@…`, `https://github.com/x/` -> `github.com/x`. */
function displayHref(href: string) {
  return href
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

export default function Home({ projects }: { projects: Project[] }) {
  const register = useReveal();

  return (
    <>
      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Projects projects={projects} />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <section id="contact" className="scroll-mt-16 pb-[60px] pt-20">
        {/* Reveal on the inner wrapper, not the anchor -- see About.tsx. */}
        <div
          ref={register}
          className="reveal mx-auto w-full max-w-content px-5 sm:px-8"
        >
          <div className="max-w-[780px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Contact
            </p>

            <h2 className="mt-3 text-[2rem] font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
              Get In Touch
            </h2>

            <p className="mt-4 text-base leading-[1.8] text-muted">
              Open to internship and freelance opportunities. Reach out via
              email or LinkedIn.
            </p>

            <dl className="mt-8 flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => {
                const external = link.href.toLowerCase().startsWith("http");

                return (
                  <div
                    key={link.label}
                    className="flex flex-col gap-x-6 gap-y-1 sm:flex-row"
                  >
                    <dt className="text-xs uppercase tracking-[0.12em] text-muted sm:min-w-[100px] sm:pt-1">
                      {link.label}
                    </dt>
                    <dd>
                      <a
                        href={link.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-base text-sage underline-offset-4 transition-colors duration-150 hover:text-sage-dark hover:underline"
                      >
                        {displayHref(link.href)}
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Resolve preview images against `public/` at build time. A project whose
 * screenshot has not been added yet renders the placeholder without the
 * browser first requesting a file that 404s and then reflowing the card.
 */
export function getStaticProps() {
  const projects: Project[] = PROJECTS.map((project) => ({
    ...project,
    image:
      project.image &&
      fs.existsSync(path.join(process.cwd(), "public", project.image))
        ? project.image
        : null,
  }));

  return { props: { projects } };
}
