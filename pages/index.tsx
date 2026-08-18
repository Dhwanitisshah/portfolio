import Head from "next/head";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <Hero />

      {/* Separates the hero from the sections below. */}
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <hr className="border-t border-border" />
      </div>

      <Projects />
    </>
  );
}
