import Link from "next/link";

import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { TagList } from "@/components/ui/Tag";
import type { ProjectEntry } from "@/data/projects";
import { useTranslation } from "@/i18n/LocaleProvider";

interface ProjectCardProps {
  readonly project: ProjectEntry;
  /** Above-the-fold cards load eagerly; the rest stay lazy. */
  readonly priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const t = useTranslation();
  const copy = t.content.projects[project.id];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface transition-colors duration-300 ease-smooth hover:border-ink focus-within:border-ink">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
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
          className="text-fluid-xs font-medium text-ink-subtle transition-colors duration-200 ease-smooth group-hover:text-ink"
        >
          {t.projects.viewProject}
        </p>
      </div>
    </article>
  );
}
