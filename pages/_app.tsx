import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE } from "@/lib/constants";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Site-wide metadata. This lives here rather than in `_document.tsx`
          because Next warns against putting <title> there, and splitting the
          tags across two files invites them drifting apart. Individual pages
          can still override any of it with their own next/head. */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
        <link rel="canonical" href={SITE.url} />

        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.url} />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content={SITE.locale} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SITE.title} />
        <meta name="twitter:description" content={SITE.description} />
      </Head>

      {/* Font variables land here so every Tailwind `font-*` utility below
          resolves; the flex column keeps the footer at the bottom. */}
      <div
        className={`${fontVariables} flex min-h-screen flex-col bg-background font-sans text-ink`}
      >
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
