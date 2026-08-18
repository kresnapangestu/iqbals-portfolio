import Link from "next/link";

import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { TagList } from "@/components/ui/Tag";
import type { ProjectEntry } from "@/data/projects";
import { useTranslation } from "@/i18n/LocaleProvider";
import { projectImageTransition } from "@/lib/viewTransition";

interface ProjectCardProps {
  readonly project: ProjectEntry;
  /** Above-the-fold cards load eagerly; the rest stay lazy. */
  readonly priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const t = useTranslation();
  const copy = t.content.projects[project.id];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-[border-color,box-shadow,transform] duration-300 ease-smooth hover:-translate-y-1 hover:border-ink hover:shadow-lift focus-within:border-ink focus-within:shadow-lift motion-reduce:hover:translate-y-0">
      {/* Named for the View Transitions API: this is the element that becomes
          the detail page's first image, so the card the visitor picked carries
          through the navigation instead of the two pages cross-fading past each
          other. The radius is repeated here because a named element is
          snapshotted outside its ancestor's clip. */}
      <div
        style={projectImageTransition(project.id)}
        className="relative aspect-[16/10] overflow-hidden rounded-t-card bg-surface-raised"
      >
        <ImageWithFallback
          src={project.imageSrc}
          alt={t.meta.interfaceAlt(project.name)}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="transition-transform duration-500 ease-smooth group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-fluid-lg font-semibold tracking-tight text-ink">
          {/* Stretched link: the whole card is the target, but only one
              focusable element goes into the tab order. */}
          <Link
            href={`/projects/${project.id}`}
            className="rounded-sm underline-offset-4 after:absolute after:inset-0 after:content-[''] group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
          >
            {project.name}
          </Link>
        </h3>

        <p className="text-fluid-sm text-ink-muted">{copy.summary}</p>
        <p className="text-fluid-sm text-ink">{copy.contribution}</p>

        <div className="mt-auto pt-2">
          <TagList
            items={project.technologies}
            label={t.projects.technologiesIn(project.name)}
          />
        </div>

        <p
          aria-hidden
          className="flex items-center gap-1.5 text-fluid-xs font-medium text-ink-subtle transition-colors duration-200 ease-smooth group-hover:text-ink"
        >
          {t.projects.viewProject}
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="transition-transform duration-200 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
          >
            <path d="M4 12h15" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </p>
      </div>
    </article>
  );
}
