import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

/**
 * Never hold the old frame longer than this. A transition is a covered document
 * — if a navigation stalls, the visitor must get the page back regardless.
 */
const MAX_HOLD_MS = 600;

/**
 * Runs client-side navigation inside a View Transition.
 *
 * The API wants the DOM update inside its callback, and the Pages Router does
 * that update between two events. So the callback returns a promise that the
 * router's completion resolves: the old frame is captured on `routeChangeStart`
 * and the new one once the next page has committed.
 *
 * Elements carrying a `view-transition-name` on both pages — the header, and
 * the thumbnail of the project being opened — morph across; everything else
 * cross-fades. Unsupported browsers and reduced-motion visitors navigate
 * normally, because nothing here is registered for them.
 */
export function useRouteViewTransition(): void {
  const router = useRouter();
  const release = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Optional at runtime, non-optional in the DOM lib — hence the typeof guard
    // rather than a truthiness check on the property itself.
    if (typeof document.startViewTransition !== "function") return;
    const startViewTransition = document.startViewTransition.bind(document);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onStart = () => {
      // A second navigation while one is open: let the first one finish rather
      // than nesting transitions.
      if (release.current) return;

      startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            const done = () => {
              window.clearTimeout(timer);
              release.current = null;
              resolve();
            };
            const timer = window.setTimeout(done, MAX_HOLD_MS);
            release.current = done;
          }),
      );
    };

    // A task after the router settles: the next page has committed to the DOM
    // by then, which is the state the transition captures as its new frame.
    const onSettled = () => window.setTimeout(() => release.current?.(), 0);

    router.events.on("routeChangeStart", onStart);
    router.events.on("routeChangeComplete", onSettled);
    router.events.on("routeChangeError", onSettled);

    return () => {
      router.events.off("routeChangeStart", onStart);
      router.events.off("routeChangeComplete", onSettled);
      router.events.off("routeChangeError", onSettled);
      release.current?.();
    };
  }, [router.events]);
}
