import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectItems } from "@/data/projects";
import { siteConfig } from "@/data/site";

/** How many cards load eagerly — roughly one desktop row. */
const PRIORITY_CARD_COUNT = 3;

export function Projects() {
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
          title="Selected work"
        />

        {projectItems.length === 0 ? (
          <p className="text-fluid-base text-ink-muted">
            Selected work is being updated.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectItems.map((project, index) => (
              <li key={project.id} className="h-full">
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
          className="mt-12 inline-block rounded-sm text-fluid-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          See more work →
        </a>
      </div>
    </section>
  );
}
