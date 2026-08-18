import { useEffect, useRef, useState, type CSSProperties } from "react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagList } from "@/components/ui/Tag";
import { experienceData } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { localeConfig } from "@/i18n";
import { useLocale, useTranslation } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { formatDuration } from "@/lib/duration";
import { formatPeriod } from "@/lib/period";

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

/** Box of the selected tab, in the rail's own coordinates. */
interface MarkerBox {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export function Experience() {
  const t = useTranslation();
  const { locale } = useLocale();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const railRef = useRef<HTMLDivElement>(null);
  const revealRef = useReveal<HTMLDivElement>();

  /**
   * The active marker travels between tabs instead of switching off one border
   * and on another: the rail reads as one indicator being moved, which is what
   * a channel selector does. It is measured rather than assumed, so it holds
   * through the rail turning from a horizontal strip into a vertical one.
   */
  const [marker, setMarker] = useState<MarkerBox | null>(null);

  useEffect(() => {
    const tab = tabRefs.current[selectedIndex];
    const rail = railRef.current;
    if (!tab || !rail) return;

    const measure = () =>
      setMarker({
        x: tab.offsetLeft,
        y: tab.offsetTop,
        width: tab.offsetWidth,
        height: tab.offsetHeight,
      });

    measure();

    // The rail covers the breakpoint flip and any width change; the tab covers
    // its own label changing size. Neither is a width read in JavaScript — the
    // layout is still decided entirely by CSS.
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    observer.observe(tab);
    return () => observer.disconnect();
  }, [selectedIndex]);

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

  const copy = t.content.experience[selected.id];

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
          title={t.experience.heading}
        />

        <div
          ref={revealRef}
          className="grid gap-8 md:grid-cols-[minmax(10rem,14rem)_minmax(0,1fr)] md:gap-12"
        >
          <div
            ref={railRef}
            role="tablist"
            aria-label={t.experience.companiesLabel}
            aria-orientation="vertical"
            className={cn(
              "relative -mx-gutter flex snap-x gap-1 overflow-x-auto px-gutter pb-2",
              "md:mx-0 md:flex-col md:overflow-visible md:border-l md:border-line md:px-0 md:pb-0",
            )}
          >
            {/* Mounted only once measured, so it appears in place rather than
                sliding in from the corner on first paint. */}
            {marker && (
              <span
                aria-hidden
                style={
                  {
                    "--tab-x": `${marker.x}px`,
                    "--tab-y": `${marker.y}px`,
                    "--tab-w": `${marker.width}px`,
                    "--tab-h": `${marker.height}px`,
                  } as CSSProperties
                }
                className={cn(
                  "pointer-events-none absolute bottom-2 left-0 h-0.5 w-[var(--tab-w)] bg-ink",
                  "translate-x-[var(--tab-x)] transition-[transform,width,height] duration-300 ease-reveal",
                  "md:bottom-auto md:top-0 md:-ml-px md:h-[var(--tab-h)] md:w-0.5 md:translate-x-0 md:translate-y-[var(--tab-y)]",
                  "motion-reduce:transition-none",
                )}
              />
            )}

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
                    // The marker above draws the active edge; the buttons keep
                    // the transparent border so the box never changes size.
                    "border-b-2 border-transparent md:border-b-0 md:border-l-transparent",
                    isSelected
                      ? "font-medium text-ink"
                      : "text-ink-muted hover:text-ink",
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
              {copy.role}
              <span className="font-normal text-ink-muted">
                {" "}
                · {selected.company}
              </span>
            </h3>

            <p className="mt-1 text-fluid-sm text-ink-muted">
              {t.experience.employmentType[selected.employmentType]} ·{" "}
              {formatPeriod(
                selected.startedAt,
                selected.endedAt,
                localeConfig[locale].intlLocale,
                t.experience.present,
              )}{" "}
              ·{" "}
              {formatDuration(
                selected.startedAt,
                selected.endedAt,
                t.experience.duration,
              )}
            </p>

            <ul className="mt-6 space-y-3">
              {copy.highlights.map((highlight) => (
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
                label={t.experience.technologiesAt(selected.company)}
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
          className="group mt-12 inline-flex items-center gap-2 rounded-sm py-2 -my-2 text-fluid-sm font-medium text-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          {t.experience.viewResume}
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
