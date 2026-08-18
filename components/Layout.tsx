import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { label: "START", href: "/" },
  { label: "QUESTS", href: "/projects" },
  { label: "SKILLS", href: "/skills" },
  { label: "CONTACT", href: "/contact" },
];

export interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Dhwanit's Dev Quest",
  description = "A 90s arcade-flavoured portfolio by Dhwanit Shah.",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* CRT overlay — fixed, non-interactive, above everything */}
      <div className="crt-overlay" aria-hidden="true" />
      <div className="crt-sweep" aria-hidden="true" />

      <div className="flex min-h-screen flex-col bg-dark text-content-primary">
        <header className="sticky top-0 z-50 border-b-2 border-neon-purple/40 bg-dark/85 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="font-display text-[10px] leading-relaxed text-neon-pink transition-colors hover:text-neon-cyan sm:text-xs"
            >
              &gt; DHWANIT.EXE
            </Link>

            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-display text-[8px] tracking-wider text-content-secondary transition-colors hover:text-neon-cyan sm:text-[10px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="relative flex-1">{children}</main>

        <footer className="border-t-2 border-neon-purple/40 bg-dark-secondary/60">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
            <p className="font-display text-[8px] leading-relaxed text-content-secondary">
              © {new Date().getFullYear()} DHWANIT SHAH
            </p>
            <p className="font-mono text-xs text-content-secondary">
              <span className="neon-green">INSERT COIN</span> TO CONTINUE
              <span className="animate-blink neon-green ml-1">_</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
