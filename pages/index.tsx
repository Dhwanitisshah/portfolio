import Head from "next/head";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
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

export default function Home() {
  const register = useReveal();

  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <Hero />
      <SectionDivider />

      <About />
      <SectionDivider />

      <Projects />
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
