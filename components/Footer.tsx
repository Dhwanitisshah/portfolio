import Link from "next/link";

import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          &copy; {year} {SITE.name}
        </p>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href="/contact"
                className="text-sm text-muted transition-colors duration-150 hover:text-sage"
              >
                Contact
              </Link>
            </li>
            {SOCIAL_LINKS.map((link) => {
              const external = link.href.toLowerCase().startsWith("http");

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-muted transition-colors duration-150 hover:text-sage"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
