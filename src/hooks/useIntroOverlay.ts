import { useEffect, useState } from "react";

export type IntroPhase = "visible" | "leaving" | "done";

const HOLD_MS = 700;
const FADE_MS = 500;

/**
 * Drives the splash overlay that opens the site.
 *
 * The page content is always rendered underneath — the overlay sits on top and
 * fades away, so the markup is complete on the server for crawlers and for
 * anyone who prefers reduced motion.
 *
 * @param enabled Pass `false` to skip the intro entirely (reduced motion).
 */
export function useIntroOverlay(enabled: boolean): IntroPhase {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    if (!enabled) {
      setPhase("done");
      return;
    }

    const startLeaving = window.setTimeout(() => setPhase("leaving"), HOLD_MS);
    const finish = window.setTimeout(
      () => setPhase("done"),
      HOLD_MS + FADE_MS,
    );

    return () => {
      window.clearTimeout(startLeaving);
      window.clearTimeout(finish);
    };
  }, [enabled]);

  return phase;
}
