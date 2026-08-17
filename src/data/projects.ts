import type { Project } from "@/types";

/**
 * Selected work — structure only. Summaries, contributions, roles, years, and
 * the detail-page prose are translatable and live in `src/i18n/<locale>.ts`
 * under `content.projects`, keyed by the ids below.
 *
 * `url` is omitted where the product is not publicly viewable.
 *
 * Order matters: the landing page highlights the first `HIGHLIGHT_COUNT`
 * entries (see `sections/Projects`). Every entry keeps its own detail page.
 */
const entries = [
  {
    id: "sentinel",
    name: "Sentinel",
    imageSrc: "/images/sentinel_login.webp",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "ECharts",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "FastAPI",
      "scikit-learn",
    ],
    // Not publicly deployed, so no `url`.
  },
  {
    id: "next_pmt_cmt",
    name: "XLSmart Next PMT/CMT",
    imageSrc: "/images/next-pmt-cmt-v2.webp",
    technologies: ["Next JS", "Zustand", "Recharts", "Leaflet"],
    company: "Huawei",
  },
  {
    id: "xl-axiata",
    name: "XLSmart PMT/CMT",
    imageSrc: "/images/ui-pmt-cmt.webp",
    technologies: ["React", "Material UI", "FusionCharts", "Leaflet Maps"],
    company: "Huawei",
  },
  {
    id: "ourinvitation",
    name: "Ourinvitation.id",
    imageSrc: "/images/ourinvitation.webp",
    technologies: ["React", "Next.js", "Tailwind CSS", "SCSS"],
    url: "https://ourinvitation.id",
  },
  {
    id: "bpdlh",
    name: "BPDLH Management System",
    imageSrc: "/images/bpdlh.webp",
    technologies: ["React", "Identity Server", "React Hook Form", "Redux"],
    company: "STARA",
    // Internal government system, so no `url`.
  },
  {
    id: "mybki",
    name: "myBKI",
    imageSrc: "/images/bki.webp",
    technologies: ["React", "Formik"],
    company: "Qtasnim",
  },
  {
    id: "masukbersama",
    name: "MasukBersama",
    imageSrc: "/images/masukbersama_exam.webp",
    gallery: ["/images/masukbersama_landingpage.webp"],
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    url: "https://masukbersama.vercel.app",
    company: "Sama",
  },
  {
    id: "mubarokulhuda",
    name: "SPP Mubarokulhuda",
    imageSrc: "/images/mubarokulhuda.webp",
    technologies: ["React", "Figma"],
    company: "Self Employed",
  },
] as const satisfies readonly Project[];

/**
 * Ids that every dictionary must carry copy for. Derived rather than declared:
 * adding a project here turns every incomplete translation into a type error.
 */
export type ProjectId = (typeof entries)[number]["id"];

export type ProjectEntry = Project & { readonly id: ProjectId };

/**
 * Re-typed to the `Project` shape so optional fields stay addressable, while
 * `id` keeps its literal type — that is what lets a copy lookup be checked.
 */
export const projectItems: readonly ProjectEntry[] = entries;

/** Lookup by route param. */
export function findProject(id: string): ProjectEntry | undefined {
  return projectItems.find((project) => project.id === id);
}

/** Neighbours for the previous/next footer, wrapping at both ends. */
export function getAdjacentProjects(id: string): {
  previous: ProjectEntry;
  next: ProjectEntry;
} | null {
  const index = projectItems.findIndex((project) => project.id === id);
  if (index === -1 || projectItems.length < 2) return null;

  const previous =
    projectItems[(index - 1 + projectItems.length) % projectItems.length];
  const next = projectItems[(index + 1) % projectItems.length];
  if (!previous || !next) return null;

  return { previous, next };
}
