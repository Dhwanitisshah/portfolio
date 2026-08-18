import Head from "next/head";

import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <section className="mx-auto flex min-h-[60vh] max-w-content flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-clay">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Coming Soon
        </h1>
        <p className="mt-4 max-w-md text-base text-muted">{SITE.description}</p>
      </section>
    </>
  );
}
