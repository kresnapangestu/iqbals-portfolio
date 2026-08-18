import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectItems } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { useTranslation } from "@/i18n/LocaleProvider";

/** How many cards load eagerly — roughly one desktop row. */
const PRIORITY_CARD_COUNT = 3;

/**
 * Cards shown on the landing page: two full rows of three. The rest stay
 * reachable at `/projects/<id>`, so `projectItems` order is what decides which
 * work is highlighted here.
 */
const HIGHLIGHT_COUNT = 6;

/**
 * Gap between cards as the grid arrives. Short enough that six of them read as
 * one row landing rather than as a queue being served.
 */
const CARD_STEP_MS = 70;

export function Projects() {
  const t = useTranslation();
  const gridRef = useReveal<HTMLUListElement>();
  const highlights = projectItems.slice(0, HIGHLIGHT_COUNT);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 bg-surface-raised px-gutter py-section-y"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="projects-heading"
          index="03"
          title={t.projects.heading}
        />

        {highlights.length === 0 ? (
          <p className="text-fluid-base text-ink-muted">{t.projects.empty}</p>
        ) : (
          <ul
            ref={gridRef}
            data-reveal-steps
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {highlights.map((project, index) => (
              <li
                key={project.id}
                data-reveal-step
                style={
                  {
                    "--reveal-delay": `${index * CARD_STEP_MS}ms`,
                  } as React.CSSProperties
                }
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  priority={index < PRIORITY_CARD_COUNT}
                />
              </li>
            ))}
          </ul>
        )}

        <a
          href={siteConfig.moreProjectsUrl}
          target="_blank"
          rel="noopener noreferrer"
          // `py-2 -my-2` grows the touch target to ~40px without moving the
          // link: the negative margin cancels the padding in the layout.
          className="group mt-12 inline-flex items-center gap-2 rounded-sm py-2 -my-2 text-fluid-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          {t.projects.seeMore}
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="transition-transform duration-200 ease-smooth group-hover:translate-x-1 motion-reduce:transition-none"
          >
            <path d="M4 12h15" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
