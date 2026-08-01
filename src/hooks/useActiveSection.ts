import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view, for nav highlighting.
 *
 * Uses IntersectionObserver rather than a scroll listener: the browser does the
 * measurement off the main thread, so there is no layout thrash per scroll event.
 *
 * @param sectionIds Anchor ids to observe, in document order.
 * @returns The id of the section nearest the viewport centre, or the first id
 *          before any intersection has been reported.
 */
export function useActiveSection<Id extends string>(
  sectionIds: readonly Id[],
): Id | undefined {
  const [activeSection, setActiveSection] = useState<Id | undefined>(
    sectionIds[0],
  );

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0];
        if (top) setActiveSection(top.target.id as Id);
      },
      // Middle band of the viewport: a section counts as active once it
      // occupies the reader's focal area, not merely when its edge appears.
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
