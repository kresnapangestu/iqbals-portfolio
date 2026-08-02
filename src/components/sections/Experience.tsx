import { useRef, useState } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { experienceData } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { formatDuration } from "@/lib/duration";

/** Moves focus and selection with the arrow keys, per the WAI-ARIA tabs pattern. */
function nextIndexForKey(
  key: string,
  current: number,
  total: number,
): number | undefined {
  switch (key) {
    case "ArrowDown":
    case "ArrowRight":
      return (current + 1) % total;
    case "ArrowUp":
    case "ArrowLeft":
      return (current - 1 + total) % total;
    case "Home":
      return 0;
    case "End":
      return total - 1;
    default:
      return undefined;
  }
}

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selected = experienceData[selectedIndex];

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const next = nextIndexForKey(
      event.key,
      selectedIndex,
      experienceData.length,
    );
    if (next === undefined) return;

    event.preventDefault();
    setSelectedIndex(next);
    tabRefs.current[next]?.focus();
  };

  if (!selected) return null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 px-gutter py-section-y"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="experience-heading"
          index="02"
          title="Where I've worked"
        />

        <div className="grid gap-8 md:grid-cols-[minmax(10rem,14rem)_minmax(0,1fr)] md:gap-12">
          <div
            role="tablist"
            aria-label="Companies"
            aria-orientation="vertical"
            className={cn(
              "-mx-gutter flex snap-x gap-1 overflow-x-auto px-gutter pb-2",
              "md:mx-0 md:flex-col md:overflow-visible md:border-l md:border-line md:px-0 md:pb-0",
            )}
          >
            {experienceData.map((experience, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={experience.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${experience.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${experience.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedIndex(index)}
                  onKeyDown={onKeyDown}
                  className={cn(
                    "shrink-0 snap-start whitespace-nowrap px-4 py-3 text-fluid-sm transition-colors duration-200 ease-smooth",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2",
                    "md:-ml-px md:w-full md:border-l-2 md:text-left",
                    isSelected
                      ? "border-b-2 border-ink font-medium text-ink md:border-b-0 md:border-l-ink"
                      : "border-b-2 border-transparent text-ink-muted hover:text-ink md:border-b-0 md:border-l-transparent",
                  )}
                >
                  {experience.company}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${selected.id}`}
            aria-labelledby={`tab-${selected.id}`}
            tabIndex={0}
            className="animate-fade-rise rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink motion-reduce:animate-none"
            key={selected.id}
          >
            <h3 className="text-fluid-lg font-semibold tracking-tight text-ink">
              {selected.role}
              <span className="font-normal text-ink-muted">
                {" "}
                · {selected.company}
              </span>
            </h3>

            <p className="mt-1 text-fluid-sm text-ink-muted">
              {selected.employmentType} · {selected.period} ·{" "}
              {formatDuration(selected.startedAt, selected.endedAt)}
            </p>

            <ul className="mt-6 space-y-3">
              {selected.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative max-w-prose pl-6 text-fluid-base text-ink-muted before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-pill before:bg-accent-ink"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <TagList
                items={selected.technologies}
                label={`Technologies used at ${selected.company}`}
              />
            </div>
          </div>
        </div>

        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          // `py-2 -my-2` grows the touch target to ~40px without moving the
          // link: the negative margin cancels the padding in the layout.
          className="mt-12 inline-block rounded-sm py-2 -my-2 text-fluid-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          View full resume →
        </a>
      </div>
    </section>
  );
}
