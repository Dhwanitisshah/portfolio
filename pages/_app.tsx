import type { AppProps } from "next/app";
import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fontVariables } from "@/lib/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </div>
    </>
  );
}
