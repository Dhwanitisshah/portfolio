import Image from "next/image";
import { useState } from "react";

import type { Project, ProjectStatus } from "@/lib/projects";

/**
 * Status pill palettes. These sit outside the core sage/clay system — they are
 * conventional state colours, so they live here rather than in the theme.
 * Class strings are written out in full so Tailwind can find them.
 */
const STATUS_STYLES: Record<ProjectStatus, string> = {
  Production: "bg-[#e8f5e9] text-[#2e7d32]",
  Deployed: "bg-[#e3f2fd] text-[#1565c0]",
  "In Progress": "bg-[#fff8e1] text-[#f57f17]",
  "Research Paper in Progress": "bg-[#f3e5f5] text-[#6a1b9a]",
};

const LINK_CLASSES =
  "text-sage underline-offset-4 transition-colors duration-150 hover:text-sage-dark hover:underline";

function MediaPlaceholder() {
  return (
    <div className="flex h-40 items-center justify-center border-b border-border bg-background text-sm text-muted">
      [Screenshot coming soon]
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  // Preview images are optional and may not be in `public/assets` yet; falling
  // back on error means dropping one in is all it takes to show it.
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.image) && !imageFailed;

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-surface transition-[border-color,box-shadow] duration-200 hover:border-sage hover:shadow-lift">
      {showImage ? (
        <div className="relative h-[200px] w-full border-b border-border">
          <Image
            src={project.image as string}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 820px) 100vw, 780px"
            className="object-cover"
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <MediaPlaceholder />
      )}

      <div className="px-8 py-7">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[project.status]}`}
          >
            {project.status}
          </span>
          <span className="text-sm text-muted">{project.role}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-ink">{project.title}</h3>

        <p className="mt-2 text-base leading-[1.7] text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-muted">
              <span aria-hidden="true" className="select-none">
                —
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            GitHub <span aria-hidden="true">→</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASSES}
            >
              Live Demo <span aria-hidden="true">→</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
