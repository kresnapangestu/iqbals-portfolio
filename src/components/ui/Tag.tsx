import { cn } from "@/lib/cn";

interface TagProps {
  readonly label: string;
  /** `inverse` sits on dark surfaces, `default` on light ones. */
  readonly tone?: "default" | "inverse";
}

/** Pill used for technology labels. Non-interactive by design. */
export function Tag({ label, tone = "default" }: TagProps) {
  return (
    <li
      className={cn(
        "rounded-pill border px-3 py-1 text-fluid-xs font-medium",
        tone === "inverse"
          ? "border-line-inverse text-white/80"
          : "border-line text-ink-muted",
      )}
    >
      {label}
    </li>
  );
}

interface TagListProps {
  readonly items: readonly string[];
  readonly tone?: "default" | "inverse";
  readonly label: string;
}

/** Renders nothing for an empty list rather than an empty row of whitespace. */
export function TagList({ items, tone = "default", label }: TagListProps) {
  if (items.length === 0) return null;

  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} label={item} tone={tone} />
      ))}
    </ul>
  );
}
