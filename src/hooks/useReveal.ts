import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";

/**
 * `useLayoutEffect` on the client, `useEffect` on the server.
 *
 * The hidden state has to land before the browser paints, or the content
 * flashes in and then hides itself. On the server there is no paint and React
 * warns about the layout variant, so the effect variant stands in.
 */
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Reveals an element the first time it enters the viewport.
 *
 * The element is **finished** in the markup. This hook applies the starting
 * state itself, before first paint, and removes it once the element is in
 * view — so server HTML, a crawler, a blocked bundle, and a reduced-motion
 * visitor all get the completed page rather than an empty one.
 *
 * Stagger: mark the element `data-reveal-steps` and give each child
 * `data-reveal-step` with its own `--reveal-delay`. The container then holds
 * the trigger and the children carry the motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Reduced motion is read here rather than through the shared hook: that one
    // corrects itself in an effect, which is a paint too late to matter.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    element.dataset.reveal = "hidden";

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        element.dataset.reveal = "shown";
        observer.disconnect();
      },
      {
        // The bottom edge is pulled in a shade, so a block starts moving once it
        // is genuinely being read rather than the instant its first pixel clears
        // the fold.
        //
        // The top edge is pushed far out of the document instead, which makes
        // "already scrolled past" count as arrived. Without it, a hash link or a
        // restored scroll position jumps the page in a single frame — the blocks
        // above it never intersect at any sampled frame, and stay invisible for
        // the rest of the visit.
        rootMargin: "10000px 0px -8% 0px",
        threshold: 0.01,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
