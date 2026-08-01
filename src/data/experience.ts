import type { Experience } from "@/types";

/**
 * Professional history, newest first. Copy is tightened from the original
 * portfolio text — no achievement, metric, or technology is added here that
 * was not already claimed in the source content.
 */
export const experienceData: readonly Experience[] = [
  {
    id: "huawei",
    company: "Huawei",
    role: "Front-end Developer",
    employmentType: "Full-time",
    period: "October 2021 – Present",
    startedAt: "2021-10",
    highlights: [
      "Revamped and maintained large-scale web applications through XL Axiata’s transformation into XLSMART, improving operational visibility for the Service Operation Center.",
      "Led the XLMS migration of mission-critical legacy modules to Next.js and Tailwind CSS, roughly 50% less development time and 20% faster load speeds.",
      "Built an executive dashboard in Next.js, FusionCharts, Tailwind CSS, and Material UI for real-time KPI and service-performance monitoring by C-level stakeholders.",
      "Delivered 40+ telecom analytics dashboards serving 500+ daily users, with charts, tables, and maps built on Recharts and FusionCharts.",
      "Applied Atomic Design and a modular architecture, raising component reuse and cutting development time by roughly 30%.",
      "Kept legacy React reporting and analytics applications running with zero disruption throughout the modernization.",
    ],
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
    role: "Front-end Developer",
    employmentType: "Part-time",
    period: "July 2023 – July 2024",
    startedAt: "2023-07",
    endedAt: "2024-07",
    highlights: [
      "Built a React application for BPLDH that streamlines funding requests and verifies stakeholder submissions.",
      "Shipped the external-facing flows used by BPLDH applicants alongside the internal tooling used to process them.",
      "Structured the UI with Atomic Design so external and internal surfaces shared one component layer.",
    ],
    technologies: ["React", "React Hook Form"],
  },
  {
    id: "sama",
    company: "Sama",
    role: "Front-end Developer & UI/UX Designer",
    employmentType: "Freelance",
    period: "July 2022 – February 2023",
    startedAt: "2022-07",
    endedAt: "2023-02",
    highlights: [
      "Designed and built products across a point-of-sale system, a learning platform, and a waste-management application.",
      "Developed the MasukBersama landing page and web application in Next.js and Tailwind CSS, and designed its interface.",
      "Built the DALANG waste-management and recycling application in React.",
      "Designed interfaces for an in-house application of the Indonesian Ministry of Manpower, the Oil Mart cashier app, and a valve manufacturer’s company profile.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
  },
  {
    id: "qtasnim",
    company: "Qtasnim",
    role: "Front-end Developer",
    employmentType: "Part-time",
    period: "October 2021 – December 2021",
    startedAt: "2021-10",
    endedAt: "2021-12",
    highlights: [
      "Developed and maintained major features of the Biro Klasifikasi Indonesia (BKI) web application.",
      "Built responsive, accessible interfaces with React, Formik, and Material UI.",
      "Coordinated with an external company’s team to deliver critical BKI features, and maintained code quality through review.",
    ],
    technologies: ["React", "Formik", "Material UI"],
  },
  {
    id: "bigio",
    company: "BIGIO",
    role: "Front-end Developer",
    employmentType: "Internship",
    period: "July 2020 – October 2020",
    startedAt: "2020-07",
    endedAt: "2020-10",
    highlights: [
      "Built the BIG Audit Trail web application, which records actions, changes, and transactions across systems and business processes with their timestamp and originating user.",
      "Contributed to BUSAMI, the mobile application that won the team the BIG Hackathon.",
    ],
    technologies: ["Laravel", "Bootstrap"],
  },
];
