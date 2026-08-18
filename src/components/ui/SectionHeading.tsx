import { useReveal } from "@/hooks/useReveal";

interface SectionHeadingProps {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly tone?: "default" | "inverse";
}

/**
 * Section title with a numeric label. The number is decorative and hidden from
 * assistive technology; the heading text carries the meaning.
 *
 * This is the site's authored entrance, and the only one that is not a fade.
 * The index resolves, the title follows, and the rule draws across the column —
 * a channel being switched on, which is the metaphor the whole system is built
 * from. Every other section uses it, so the page has one motion idea rather
 * than a different flourish per block.
 */
export function SectionHeading({
  id,
  index,
  title,
  tone = "default",
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      data-reveal-steps
      className="mb-10 flex items-baseline gap-4"
    >
      <span
        aria-hidden
        data-reveal-step
        className={
          isInverse
            ? "font-mono text-fluid-sm text-white/40"
            : "font-mono text-fluid-sm text-ink-subtle"
        }
      >
        {index}
      </span>
      <h2
        id={id}
        data-reveal-step
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        className={
          isInverse
            ? "text-fluid-2xl font-semibold tracking-tight text-white"
            : "text-fluid-2xl font-semibold tracking-tight text-ink"
        }
      >
        {title}
      </h2>
      <span
        aria-hidden
        data-reveal-rule
        style={{ "--reveal-delay": "170ms" } as React.CSSProperties}
        // `min-w-6`: at 320px the longest heading wraps and leaves the rule no
        // room at all, so it disappears on that one heading and not the others.
        className={
          isInverse
            ? "h-px min-w-6 flex-1 bg-line-inverse"
            : "h-px min-w-6 flex-1 bg-line"
        }
      />
    </div>
  );
}
