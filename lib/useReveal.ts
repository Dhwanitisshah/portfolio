import { useCallback, useEffect, useRef } from "react";

/**
 * One-way scroll reveal shared by every section.
 *
 * Pass the returned callback to `ref` on each element to watch; it gains the
 * `is-visible` class the first time it scrolls into view. The class is toggled
 * straight on the DOM node rather than through React state, so revealing an
 * element re-renders nothing. Styling for `.reveal` / `.is-visible` lives in
 * `styles/globals.css`, and the no-JS fallback in `pages/_document.tsx`.
 */
export function useReveal() {
  const elements = useRef<HTMLElement[]>([]);

  const register = useCallback((el: HTMLElement | null) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  }, []);

  useEffect(() => {
    const items = elements.current;

    // Without IntersectionObserver, show everything rather than nothing.
    if (typeof IntersectionObserver === "undefined") {
      for (const el of items) el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          // Reveal is one-way; stop watching once it has fired.
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of items) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return register;
}
