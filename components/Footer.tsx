import Link from "next/link";

import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/lib/constants";

const LINK_CLASSES =
  "text-sm text-muted transition-colors duration-150 hover:text-sage";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={LINK_CLASSES}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SOCIAL_LINKS.map((link) => {
                const external = link.href.toLowerCase().startsWith("http");

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={LINK_CLASSES}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-sm text-muted">
          &copy; {year} {SITE.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
