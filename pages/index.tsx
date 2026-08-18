import Head from "next/head";

import Hero from "@/components/Hero";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <Hero />

      {/* Separates the hero from whatever section lands next. */}
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <hr className="border-t border-border" />
      </div>

      {/* Scroll target for the hero's "View Projects"; the grid arrives in
          Phase 2. `scroll-mt-16` clears the sticky header. */}
      <div id="projects" className="scroll-mt-16" />
    </>
  );
}
