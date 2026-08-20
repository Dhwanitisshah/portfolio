import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** The section each nav item points at, e.g. "/#about" -> "about". */
const SECTION_IDS = NAV_ITEMS.map((item) => item.href.split("#")[1]).filter(
  Boolean,
);

export default function Header() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll spy. A plain visibility threshold does not work here: Projects is
  // several viewports tall and can never be "50% visible". Instead the root is
  // shrunk to a band running from just under the sticky header down to ~45% of
  // the viewport, and whichever section occupies that band is the active one.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const inBand = new Set<string>();

    const atPageBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const update = () => {
      // The last section is too short to ever reach the band once the page has
      // bottomed out, so treat hitting the bottom as arriving at it.
      if (atPageBottom()) {
        setActiveId(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }
      // Topmost section in document order wins if the band spans two.
      setActiveId(SECTION_IDS.find((id) => inBand.has(id)) ?? null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        update();
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);

    // The observer stays quiet while scrolling within one section, so the
    // bottom-of-page check needs its own listener, coalesced to one per frame.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Dismiss the mobile menu on navigation and on Escape.
  useEffect(() => {
    router.events.on("routeChangeComplete", closeMenu);
    router.events.on("hashChangeComplete", closeMenu);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      router.events.off("routeChangeComplete", closeMenu);
      router.events.off("hashChangeComplete", closeMenu);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [router.events, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-base font-semibold tracking-tight text-ink transition-colors duration-150 hover:text-sage"
        >
          {SITE.shortName}
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.href.split("#")[1];

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      // The border is always present so the active state is a
                      // colour change only, never a shift in layout.
                      "border-b-2 pb-1 text-sm transition-colors duration-200 hover:text-sage",
                      active
                        ? "border-sage text-sage"
                        : "border-transparent text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-hover hover:text-sage md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto max-w-content px-5 py-2 sm:px-8">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.href.split("#")[1];

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "block rounded-md px-2 py-3 text-base transition-colors duration-200 hover:bg-hover hover:text-sage",
                      active ? "text-sage" : "text-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className="h-5 w-5"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
