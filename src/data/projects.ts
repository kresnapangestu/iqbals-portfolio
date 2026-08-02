import type { Project } from "@/types";

/**
 * Selected work. `url` is omitted where the product is not publicly viewable.
 *
 * REVIEW NEEDED — `company`, `role`, `year`, `problem`, and `outcome` were
 * drafted by inference from the existing project copy and `experience.ts`, not
 * from a primary source. Each inference is marked `INFERRED` with the evidence
 * it rests on. Correct or delete any that is wrong; every one of these fields is
 * optional and its section disappears when removed. Where no evidence existed
 * (Ourinvitation.id and SPP Mubarokulhuda have no company or date anywhere in
 * the repo) the fields are simply absent rather than guessed.
 */
export const projectItems: readonly Project[] = [
  {
    id: "sentinel",
    name: "Sentinel",
    summary:
      "A telecom KPI monitoring system that flags anomalies in network time series, built as thesis research: Z-Score for univariate detection and Isolation Forest for multivariate.",
    contribution:
      "Built the whole system: the Next.js dashboard, the NestJS gateway that owns database access, and the FastAPI service holding the detection algorithms.",
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
    // Dates from the project's own commit history (first commit May 2025, most
    // recent March 2026). Not publicly deployed, so no `url`.
    role: "Full-stack Developer",
    year: "2025 – 2026",
    problem:
      "Network KPI degradation hides in thousands of time-series points, and reviewing charts by hand catches it late — if at all.",
  },
  {
    id: "xl-axiata",
    name: "XL Axiata PMT/CMT",
    summary:
      "A Service Operation Center for XL Axiata, presenting operational data as charts, maps, and tables for senior stakeholders.",
    contribution: "Built the web application in React with FusionCharts.",
    imageSrc: "/images/xl.webp",
    technologies: ["React", "FusionCharts"],
    // INFERRED from experience.ts (Huawei, Oct 2021 – Present): the XL Axiata
    // work is described there as part of that role.
    company: "Huawei",
    role: "Front-end Developer",
    year: "2021 – Present",
    problem:
      "Service Operation Center staff and senior stakeholders needed operational telecom data in one place, readable at a glance rather than assembled from separate reports.",
    // INFERRED, and the weakest claim here: experience.ts attributes "40+
    // dashboards serving 500+ daily users" to the Huawei role overall, not to
    // this project specifically. Narrow or cut it if that overstates the scope.
    outcome:
      "Part of a telecom analytics dashboard suite that experience records put at 40+ dashboards and 500+ daily users.",
  },
  {
    id: "ourinvitation",
    name: "Ourinvitation.id",
    summary:
      "An online wedding invitation platform offering a cheaper, more efficient, and more environmentally friendly alternative to printed invitations.",
    contribution:
      "Migrated the product from React and SCSS to Next.js and Tailwind CSS, and built the landing page plus three invitation themes.",
    imageSrc: "/images/ourinvitation.webp",
    technologies: ["React", "Next.js", "Tailwind CSS", "SCSS"],
    url: "https://ourinvitation.id",
    // No company or date evidence in the repo — deliberately omitted.
    role: "Front-end Developer",
    problem:
      "Printed wedding invitations are expensive and wasteful, and the existing React and SCSS codebase was costly to extend with new themes.",
  },
  {
    id: "masukbersama",
    name: "MasukBersama",
    summary:
      "A dual-platform learning product helping high school students test their competence before the college entrance exam.",
    contribution:
      "Built the web application in Next.js and Tailwind CSS, and designed the interface.",
    imageSrc: "/images/masukbersama_exam.webp",
    gallery: ["/images/masukbersama_landingpage.webp"],
    technologies: ["Next.js", "Tailwind CSS", "Figma"],
    url: "https://masukbersama.vercel.app",
    // INFERRED from experience.ts (Sama, July 2022 – February 2023), which names
    // MasukBersama directly.
    company: "Sama",
    role: "Front-end Developer & UI/UX Designer",
    year: "2022 – 2023",
    problem:
      "Students had no low-stakes way to gauge their readiness before sitting the college entrance test.",
  },
  {
    id: "mybki",
    name: "myBKI",
    summary:
      "A Service Operation Center for Biro Klasifikasi Indonesia, presenting operational data as charts, maps, and tables.",
    contribution:
      "Built the web application in React, using Formik for form handling and validation.",
    imageSrc: "/images/bki.webp",
    technologies: ["React", "Formik"],
    // INFERRED from experience.ts (Qtasnim, October – December 2021), which
    // names the BKI web application directly.
    company: "Qtasnim",
    role: "Front-end Developer",
    year: "2021",
    problem:
      "Operational and classification data was spread across systems, leaving no single view for the teams that had to act on it.",
  },
  {
    id: "mubarokulhuda",
    name: "SPP Mubarokulhuda",
    summary:
      "A cross-platform tuition system for Madrasah Mubarokulhuda covering manual and bank-transfer payments, arrears, financial reports, and payment recaps.",
    contribution:
      "Built the web application in React and designed both the web and mobile interfaces.",
    imageSrc: "/images/mubarokulhuda.webp",
    technologies: ["React", "Figma"],
    // Former URL https://sppmubarokulhuda.netlify.app now returns 404 — removed
    // so the page shows "Not publicly available" rather than a broken link.
    // No company or date evidence in the repo — deliberately omitted.
    role: "Front-end Developer & UI/UX Designer",
    problem:
      "Parents and school administrators were tracking tuition payments and arrears by hand, with no shared record either side could rely on.",
  },
];

/** Lookup by route param. */
export function findProject(id: string): Project | undefined {
  return projectItems.find((project) => project.id === id);
}

/** Neighbours for the previous/next footer, wrapping at both ends. */
export function getAdjacentProjects(id: string): {
  previous: Project;
  next: Project;
} | null {
  const index = projectItems.findIndex((project) => project.id === id);
  if (index === -1 || projectItems.length < 2) return null;

  const previous = projectItems[(index - 1 + projectItems.length) % projectItems.length];
  const next = projectItems[(index + 1) % projectItems.length];
  if (!previous || !next) return null;

  return { previous, next };
}
