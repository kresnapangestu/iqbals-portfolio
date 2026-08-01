/**
 * Shared domain types. Portfolio content is data, never JSX — every field here
 * is serialisable so entries can move to JSON or a CMS without touching the UI.
 */

/** Employment type, kept as a closed union so the UI can style each variant. */
export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Freelance"
  | "Internship";

export interface Experience {
  /** Stable key for React lists and tab wiring. */
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly employmentType: EmploymentType;
  /** Human-readable range, e.g. "October 2021 – Present". */
  readonly period: string;
  /** Month the role started, `YYYY-MM`. Drives the computed duration. */
  readonly startedAt: `${number}-${number}`;
  /** Month the role ended, `YYYY-MM`. Omit for a current role. */
  readonly endedAt?: `${number}-${number}`;
  /** Achievement-oriented bullets. One idea per entry, no nested markup. */
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  /** What the author personally contributed, separate from what the product is. */
  readonly contribution: string;
  readonly imageSrc: string;
  readonly technologies: readonly string[];
  /** Live site or case study. Absent when the work is not publicly viewable. */
  readonly url?: string;

  // --- Detail-page fields. Each is optional and its section is hidden when
  // absent, so a project carrying only the fields above still renders fully.

  /** Employer or client the work was done under, where one applies. */
  readonly company?: string;
  /** Title held on this project. */
  readonly role?: string;
  /** Delivery period, e.g. "2022 – 2023". Omit when the date is not known. */
  readonly year?: string;
  /** The need the product addresses. */
  readonly problem?: string;
  /** A stated result. Omit unless there is evidence for one. */
  readonly outcome?: string;
  /**
   * Extra screenshots beyond `imageSrc`. The gallery adapts from a single
   * full-bleed tile to a grid as more are supplied.
   */
  readonly gallery?: readonly string[];
}

export interface NavigationItem {
  readonly id: SectionId;
  readonly label: string;
  /** Root-relative so the nav works from project pages as well as the landing page. */
  readonly href: `/#${string}`;
}

export interface SocialLink {
  readonly label: string;
  readonly url: string;
  /** Icon key resolved by the presentation layer, not a component reference. */
  readonly icon: "github" | "linkedin" | "instagram";
}

/** Section anchors. Single source of truth for nav links and the scroll spy. */
export const SECTION_IDS = ["hero", "about", "experience", "projects"] as const;

export type SectionId = (typeof SECTION_IDS)[number];
