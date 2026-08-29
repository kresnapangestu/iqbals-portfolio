/**
 * Shared domain types. Portfolio content is data, never JSX — every field here
 * is serialisable so entries can move to JSON or a CMS without touching the UI.
 *
 * These describe *structure*: identifiers, dates, technologies, image paths.
 * Prose that a reader sees lives in `src/i18n`, keyed by the ids below, so a
 * second language adds copy without duplicating a single date or file path.
 */

/** Employment type, kept as a closed union so each variant has a translation. */
export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Freelance"
  | "Internship";

export interface Experience {
  /** Stable key for React lists, tab wiring, and the copy lookup. */
  readonly id: string;
  /** Company name. A proper noun — not translated. */
  readonly company: string;
  readonly employmentType: EmploymentType;
  /** Month the role started, `YYYY-MM`. Drives the displayed period and duration. */
  readonly startedAt: `${number}-${number}`;
  /** Month the role ended, `YYYY-MM`. Omit for a current role. */
  readonly endedAt?: `${number}-${number}`;
  readonly technologies: readonly string[];
}

export interface Project {
  readonly id: string;
  /** Product name. A proper noun — not translated. */
  readonly name: string;
  readonly imageSrc: string;
  /** `cover` (default) crops to fill; `contain` shows the whole screenshot uncropped. */
  readonly fit?: "cover" | "contain";
  readonly technologies: readonly string[];
  /** Live site or case study. Absent when the work is not publicly viewable. */
  readonly url?: string;
  /** Employer or client the work was done under, where one applies. */
  readonly company?: string;
  /**
   * Extra screenshots beyond `imageSrc`. The gallery adapts from a single
   * full-bleed tile to a grid as more are supplied.
   */
  readonly gallery?: readonly string[];
  /**
   * Width hint per `gallery` image (index-aligned with `gallery`, not
   * `imageSrc` — that one is always a full-width row). Omit for every image
   * full width, the default single-column stack. `"half"` pairs with its
   * neighbours two-up at `sm` and above; still full width below that.
   */
  readonly galleryLayout?: readonly ("full" | "half")[];
}

export interface NavigationItem {
  readonly id: SectionId;
  /** Root-relative so the nav works from project pages as well as the landing page. */
  readonly href: `/#${string}`;
}

export interface SocialLink {
  /** Platform name. A proper noun — not translated. */
  readonly label: string;
  readonly url: string;
  /** Icon key resolved by the presentation layer, not a component reference. */
  readonly icon: "github" | "linkedin" | "instagram";
}

/** Section anchors. Single source of truth for nav links and the scroll spy. */
export const SECTION_IDS = ["hero", "about", "experience", "projects"] as const;

export type SectionId = (typeof SECTION_IDS)[number];
