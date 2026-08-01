interface SectionHeadingProps {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly tone?: "default" | "inverse";
}

/**
 * Section title with a numeric label. The number is decorative and hidden from
 * assistive technology; the heading text carries the meaning.
 */
export function SectionHeading({
  id,
  index,
  title,
  tone = "default",
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";

  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span
        aria-hidden
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
        className={
          isInverse
            ? "h-px flex-1 bg-line-inverse"
            : "h-px flex-1 bg-line"
        }
      />
    </div>
  );
}
