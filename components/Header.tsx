import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * True when a nav href points at the page (and section) currently in view.
 * Handles both `/#section` links and plain routes, so moving sections onto
 * their own pages later needs no change here.
 */
function isActive(href: string, pathname: string, hash: string) {
  const [rawPath, fragment] = href.split("#");
  const path = rawPath.replace(/\/$/, "") || "/";

  if (fragment) {
    return pathname === path && hash === `#${fragment}`;
  }

  return pathname === path;
}

export default function Header() {
  const router = useRouter();
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // `router.asPath` keeps the hash, but not on the first client render, so
  // read it from the browser and follow it from there.
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    router.events.on("routeChangeComplete", syncHash);
    router.events.on("hashChangeComplete", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      router.events.off("routeChangeComplete", syncHash);
      router.events.off("hashChangeComplete", syncHash);
    };
  }, [router.events]);

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
              const active = isActive(item.href, router.pathname, hash);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-sm transition-colors duration-150 hover:text-sage",
                      active ? "font-medium text-sage" : "text-muted",
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
              const active = isActive(item.href, router.pathname, hash);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-md px-2 py-3 text-base transition-colors duration-150 hover:bg-hover hover:text-sage",
                      active ? "font-medium text-sage" : "text-muted",
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
