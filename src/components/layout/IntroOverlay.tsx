import Image from "next/image";

import { useIntroOverlay } from "@/hooks/useIntroOverlay";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/**
 * Opening splash.
 *
 * Sits above the page rather than replacing it: the content underneath is
 * server-rendered and present in the HTML from the first byte, so the overlay
 * costs nothing in crawlability or largest-contentful-paint content.
 */
export function IntroOverlay() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const phase = useIntroOverlay(!prefersReducedMotion);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-[60] grid place-items-center bg-surface-inverse",
        "transition-opacity duration-500 ease-smooth",
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <Image
        src="/images/splashScreen.webp"
        width={323}
        height={53}
        alt=""
        priority
        className="h-auto w-56 sm:w-80"
      />
    </div>
  );
}
