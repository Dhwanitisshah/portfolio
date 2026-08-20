import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.svg" />

        {/* Scroll-reveal starts hidden and is shown by IntersectionObserver.
            With JS off that never runs, so unhide it up front. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: ".reveal{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </Head>
      <body className="bg-background text-ink">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
