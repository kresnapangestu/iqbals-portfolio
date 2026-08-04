import { useRef } from "react";

import { useLocale, useTranslation } from "@/i18n/LocaleProvider";
import { localeConfig, LOCALES, type Locale } from "@/i18n";
import { cn } from "@/lib/cn";

/** Arrow keys move focus and selection together, per the WAI-ARIA radio pattern. */
function nextIndexForKey(
  key: string,
  current: number,
  total: number,
): number | undefined {
  switch (key) {
    case "ArrowRight":
    case "ArrowDown":
      return (current + 1) % total;
    case "ArrowLeft":
    case "ArrowUp":
      return (current - 1 + total) % total;
    case "Home":
      return 0;
    case "End":
      return total - 1;
    default:
      return undefined;
  }
}

/**
 * Language selector for the header.
 *
 * A segmented control rather than a menu: with two options a dropdown hides
 * half the answer behind a click, and the choice is small enough to state
 * outright. The lit pill slides between them, so the change reads as one
 * object moving rather than two states blinking.
 *
 * Radio semantics, not buttons — the options are mutually exclusive and one is
 * always chosen, which is exactly what a radio group means. Only the selected
 * option is in the tab order; the arrow keys reach the other.
 */
export function LanguageSwitcher() {
  const t = useTranslation();
  const { selected, setLocale } = useLocale();
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedIndex = LOCALES.indexOf(selected);

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const next = nextIndexForKey(event.key, selectedIndex, LOCALES.length);
    if (next === undefined) return;

    event.preventDefault();
    const locale = LOCALES[next];
    if (!locale) return;

    setLocale(locale);
    optionRefs.current[next]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label={t.nav.languageLabel}
      className={cn(
        "relative grid grid-cols-2 rounded-pill p-0.5",
        "border border-white/15 bg-white/[0.05]",
        "transition-colors duration-200 ease-smooth hover:border-white/25",
      )}
    >
      {/* The lit pill. Absolute and animated on `transform` alone, so the
          movement never reflows the labels it sits behind. */}
      <span
        aria-hidden
        style={{ transform: `translateX(${selectedIndex * 100}%)` }}
        className={cn(
          "pointer-events-none absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)]",
          "rounded-pill bg-white/[0.13] ring-1 ring-inset ring-white/10",
          "transition-transform duration-300 ease-smooth motion-reduce:transition-none",
        )}
      />

      {LOCALES.map((locale: Locale, index) => {
        const config = localeConfig[locale];
        const isSelected = locale === selected;

        return (
          <button
            key={locale}
            ref={(element) => {
              optionRefs.current[index] = element;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={t.nav.languageOption(config.nativeName)}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setLocale(locale)}
            onKeyDown={onKeyDown}
            className={cn(
              // `after` extends the tappable area to ~44px without adding
              // height to the header bar the control sits in.
              "relative z-10 rounded-pill px-2.5 py-1.5 text-fluid-xs font-medium tracking-wide",
              "after:absolute after:inset-x-0 after:-inset-y-2 after:content-['']",
              "transition-colors duration-200 ease-smooth",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse",
              isSelected ? "text-white" : "text-white/45 hover:text-white/80",
            )}
          >
            {config.label}
          </button>
        );
      })}
    </div>
  );
}
