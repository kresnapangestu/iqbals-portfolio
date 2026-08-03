import type { ReactNode } from "react";

import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

/**
 * Dims its content while the language swaps.
 *
 * Only this wrapper re-renders — `children` arrive as an already-built element
 * tree and are untouched by the class change, so the dip costs a repaint and
 * nothing else.
 *
 * It never reaches zero: the point is to soften a hard cut, not to blank the
 * page. Keep the fixed header outside it — dimming the control you just used
 * makes the site feel like it stalled.
 */
export function LocaleFade({
  children,
  className,
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  const { isSwapping } = useLocale();

  return (
    <div
      className={cn(
        "transition-opacity duration-150 ease-smooth motion-reduce:transition-none",
        isSwapping ? "opacity-30" : "opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
