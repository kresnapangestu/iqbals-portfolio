import type { Experience } from "@/types";

/**
 * Professional history, newest first — structure only.
 *
 * Role titles and achievement bullets are translatable and live in
 * `src/i18n/<locale>.ts` under `content.experience`, keyed by the ids below.
 * No achievement, metric, or technology is claimed here or there that was not
 * already in the author's own source content.
 */
const entries = [
  {
    id: "huawei",
    company: "Huawei",
    employmentType: "Full-time",
    startedAt: "2021-10",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "FusionCharts",
    ],
  },
  {
    id: "stara",
    company: "STARA",
    employmentType: "Part-time",
    startedAt: "2023-07",
    endedAt: "2024-07",
    technologies: ["React", "React Hook Form"],
  },
  {
    id: "sama",
    company: "Sama",
    employmentType: "Freelance",
    startedAt: "2022-07",
    endedAt: "2023-02",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    id: "qtasnim",
    company: "Qtasnim",
    employmentType: "Part-time",
    startedAt: "2021-10",
    endedAt: "2021-12",
    technologies: ["React", "Formik", "Material UI"],
  },
  {
    id: "bigio",
    company: "BIGIO",
    employmentType: "Internship",
    startedAt: "2020-07",
    endedAt: "2020-10",
    technologies: ["Laravel", "Bootstrap"],
  },
] as const satisfies readonly Experience[];

/**
 * Ids that every dictionary must carry copy for. Derived rather than declared:
 * adding a role here turns every incomplete translation into a type error.
 */
export type ExperienceId = (typeof entries)[number]["id"];

export type ExperienceEntry = Experience & { readonly id: ExperienceId };

/**
 * Re-typed to the `Experience` shape so optional fields stay addressable, while
 * `id` keeps its literal type — that is what lets a copy lookup be checked.
 */
export const experienceData: readonly ExperienceEntry[] = entries;
