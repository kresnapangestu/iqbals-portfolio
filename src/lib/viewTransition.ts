import type { CSSProperties } from "react";

/**
 * Names an element for the View Transitions API.
 *
 * A name must be unique in the document and identical on both pages for the two
 * elements to be treated as the same thing. React's CSSProperties has no entry
 * for the property yet, so the cast is contained here instead of at each call.
 */
export function viewTransitionName(name: string): CSSProperties {
  return { viewTransitionName: name } as CSSProperties;
}

/** The shared name for a project's image on the card and on its detail page. */
export function projectImageTransition(projectId: string): CSSProperties {
  return viewTransitionName(`project-image-${projectId}`);
}
