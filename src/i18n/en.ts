import { siteConfig } from "@/data/site";
import type { ExperienceId } from "@/data/experience";
import type { ProjectId } from "@/data/projects";
import { rt } from "@/i18n/richText";
import type {
  DurationStrings,
  ExperienceCopy,
  ProjectCopy,
  RichText,
} from "@/i18n/types";
import type { EmploymentType, SectionId } from "@/types";

/**
 * English — the reference dictionary.
 *
 * `Dictionary` is derived from this object, so every other language is checked
 * against it: a missing key, a stray key, or a helper with the wrong signature
 * is a compile error rather than a string that silently falls back.
 *
 * Values are plain data or small pure functions. A function is how a phrase
 * takes a value without a runtime interpolation format — the argument list is
 * the contract, and the compiler enforces it in every language.
 */
export const en = {
  meta: {
    jobTitle: "Front-end Developer",
    description:
      "Front-end developer in Bandung and Jakarta. Four years building telecom operations dashboards and migrating legacy front-ends to React and Next.js.",
    siteName: (name: string) => `${name} portfolio`,
    portraitAlt: (name: string) => `Portrait of ${name}`,
    logoAlt: (name: string) => `${name}, back to home`,
    interfaceAlt: (project: string) => `${project} interface`,
  },

  a11y: {
    skipToContent: "Skip to content",
    primaryNav: "Primary",
    socialProfiles: "Social profiles",
    opensInNewTab: "(opens in a new tab)",
  },

  nav: {
    sections: {
      hero: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
    } satisfies Record<SectionId, string>,
    resume: "Resume",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    /** Group label for the language switcher, and each option's spoken name. */
    languageLabel: "Language",
    languageOption: (language: string) => `Switch to ${language}`,
  },

  hero: {
    /** Read aloud in place of the rotating greeting, which changes silently. */
    greeting: "Hello",
    introSuffix: ", my name is",
    roleLine: "Front-end Developer based in Bandung & Jakarta.",
    bio: rt(
      "I build operational dashboards and modernise legacy front-ends at ",
      { emphasis: "Huawei Tech Investment" },
      ". Over four years that work has covered more than 40 telecom analytics dashboards used by over 500 people a day. I design much of what I build, and the interfaces stay readable when the data gets messy.",
    ),
    ctaWork: "View selected work",
    ctaResume: "View resume",
  },

  about: {
    heading: "About",
    paragraphs: [
      rt(
        "An early interest in computers led me to study computer science at ",
        { emphasis: "Politeknik Negeri Bandung" },
        ", where I fell into web development and stayed. Since then I’ve built software for a software house and for a large corporation, and I’m now continuing that path toward a bachelor’s degree in Informatics Engineering at ",
        { emphasis: "Universitas Jenderal Achmad Yani (UNJANI)" },
        ".",
      ),
      rt(
        "My focus now is front-end work at ",
        { emphasis: "Huawei Tech Investment" },
        ": operational dashboards that network teams open every day and have to trust.",
      ),
      rt(
        "Outside front-end work I’m exploring networking, CI/CD pipelines, and homelab infrastructure. This site is one of those experiments: it runs on a server I built from a repurposed 2013 laptop, deployed from my own Git runner.",
      ),
      rt(
        "Away from the keyboard I’m usually at a local coffee shop, gaming with friends, playing tennis with my club or my friends, or working through a playlist on ",
        { link: "Spotify", href: siteConfig.spotifyUrl },
        ".",
      ),
    ] as readonly RichText[],
  },

  experience: {
    heading: "Where I’ve worked",
    companiesLabel: "Companies",
    employmentType: {
      "Full-time": "Full-time",
      "Part-time": "Part-time",
      Freelance: "Freelance",
      Internship: "Internship",
    } satisfies Record<EmploymentType, string>,
    /** Stands in for the end month of a role that is still running. */
    present: "Present",
    technologiesAt: (company: string) => `Technologies used at ${company}`,
    viewResume: "View full resume",
    duration: {
      lessThanMonth: "less than a month",
      years: (count: number) => `${count} year${count === 1 ? "" : "s"}`,
      months: (count: number) => `${count} month${count === 1 ? "" : "s"}`,
      combine: (years: string, months: string) => `${years} ${months}`,
    } satisfies DurationStrings,
  },

  projects: {
    heading: "Selected work",
    empty: "Selected work is being updated.",
    seeMore: "See more work",
    viewProject: "View project",
    technologiesIn: (project: string) => `Technologies used in ${project}`,
  },

  projectDetail: {
    breadcrumbLabel: "Breadcrumb",
    home: "Home",
    projects: "Projects",
    builtWith: "Built with",
    visitLiveSite: "Visit live site",
    notPubliclyAvailable: "Not publicly available",
    allProjects: "All projects",
    /** Screen-reader heading for the collapsible detail stack. */
    detailHeading: "Project detail",
    problem: "The problem",
    contribution: "What I built",
    outcome: "Outcome",
    moreProjects: "More projects",
    previous: "← Previous",
    next: "Next →",
    screenshotAlt: (project: string, index: number) =>
      `${project} screenshot ${index}`,
  },

  footer: {
    prompt: "Have something you need built?",
    note: "Open to opportunities. A short outline of the work and your timeline is enough to start a conversation.",
    credit: (name: string) =>
      `Designed and built by ${name}. Self-hosted with Next.js.`,
  },

  media: {
    /** Shown when an image file is missing, in place of a broken frame. */
    previewUnavailable: "Preview unavailable",
  },

  lightbox: {
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    counter: (current: number, total: number) => `${current} of ${total}`,
  },

  notFound: {
    title: "Page not found",
    heading: "This page doesn’t exist.",
    body: "The link may be out of date, or the page may have moved. Everything else is still one click away.",
    cta: "Back to home",
  },

  content: {
    experience: {
      huawei: {
        role: "Front-end Developer",
        highlights: [
          "Revamped and maintained large-scale web applications through XL Axiata’s transformation into XLSmart, improving operational visibility for the Service Operation Center.",
          "Led the XLMS migration of mission-critical legacy modules to Next.js and Tailwind CSS, roughly 50% less development time and 20% faster load speeds.",
          "Built an executive dashboard in Next.js, FusionCharts, Tailwind CSS, and Material UI for real-time KPI and service-performance monitoring by C-level stakeholders.",
          "Delivered 40+ telecom analytics dashboards serving 500+ daily users, with charts, tables, and maps built on Recharts and FusionCharts.",
          "Applied Atomic Design and a modular architecture, raising component reuse and cutting development time by roughly 30%.",
          "Kept legacy React reporting and analytics applications running with zero disruption throughout the modernization.",
        ],
      },
      stara: {
        role: "Front-end Developer",
        highlights: [
          "Built a React application for BPDLH that streamlines funding requests and verifies stakeholder submissions.",
          "Shipped the external-facing flows used by BPDLH applicants alongside the internal tooling used to process them.",
          "Structured the UI with Atomic Design so external and internal surfaces shared one component layer.",
        ],
      },
      sama: {
        role: "Front-end Developer & UI/UX Designer",
        highlights: [
          "Designed and built products across a point-of-sale system, a learning platform, and a waste-management application.",
          "Developed the MasukBersama landing page and web application in Next.js and Tailwind CSS, and designed its interface.",
          "Built the DALANG waste-management and recycling application in React.",
          "Designed interfaces for an in-house application of the Indonesian Ministry of Manpower, the Oil Mart cashier app, and a valve manufacturer’s company profile.",
        ],
      },
      qtasnim: {
        role: "Front-end Developer",
        highlights: [
          "Developed and maintained major features of the Biro Klasifikasi Indonesia (BKI) web application.",
          "Built responsive, accessible interfaces with React, Formik, and Material UI.",
          "Coordinated with an external company’s team to deliver critical BKI features, and maintained code quality through review.",
        ],
      },
      bigio: {
        role: "Front-end Developer",
        highlights: [
          "Built the BIG Audit Trail web application, which records actions, changes, and transactions across systems and business processes with their timestamp and originating user.",
          "Contributed to BUSAMI, the mobile application that won the team the BIG Hackathon.",
        ],
      },
    } satisfies Record<ExperienceId, ExperienceCopy>,

    projects: {
      artemis: {
        summary:
          "A self-hosted AI chat workspace for internal technical teams: model switching, saved personas, file attachments, and generation parameters, built in front of a swappable AI provider layer instead of a third-party vendor.",
        contribution:
          "Built the entire frontend solo: the chat interface, conversation management, model and persona system, and settings, with Next.js App Router and an Atomic Design component architecture.",
        role: "Front-end Developer",
        year: "2026 – Present",
      },
      next_pmt_cmt: {
        summary:
          "A centralised monitoring dashboard for XLSmart, showing Telco API performance in real time from national down to district level on Network Operations Center big-screen displays.",
        contribution:
          "Led the system architecture, migration, and front-end development using Next.js, Zustand, and Recharts.",
        role: "Front-end Developer",
        year: "2023 – Present",
        problem:
          "The Network Operations Center (NOC) team and business stakeholders needed a centralized monitoring platform to track the real-time performance of Telco APIs across National, Provincial, City, and District levels. Previously, critical operational dashboards were scattered across multiple systems, including PMT-CMT, making it difficult to monitor network health, investigate incidents, and make timely operational decisions.",

        outcome:
          "Delivered a centralized monitoring platform that unified critical PMT-CMT dashboards into a modern solution optimized for 24/7 NOC big-screen displays. The platform provides real-time visibility into Telco API performance across all operational regions, accelerates incident detection, improves monitoring efficiency, and enables faster, data-driven operational decision-making.",
      },
      "xl-axiata": {
        summary:
          "A Service Operation Center for XLSmart, presenting operational data as charts, maps, and tables for senior stakeholders.",
        contribution: "Built the web application in React with FusionCharts.",
        role: "Front-end Developer",
        year: "2021 – Present",
        problem:
          "Service Operation Center staff and senior stakeholders needed operational telecom data in one place, readable at a glance rather than assembled from separate reports.",
        outcome:
          "Part of a telecom analytics suite of 40+ dashboards serving 500+ daily users.",
      },
      ourinvitation: {
        summary:
          "An online wedding invitation platform: cheaper than printing, sent in a message, and nothing thrown away afterwards.",
        contribution:
          "Migrated the product from React and SCSS to Next.js and Tailwind CSS, and built the landing page plus three invitation themes.",
        role: "Front-end Developer",
        problem:
          "Printed wedding invitations are expensive and wasteful, and the existing React and SCSS codebase was costly to extend with new themes.",
      },
      bpdlh: {
        summary:
          "A funding management system for BPDLH, the Indonesia Environment Fund: stakeholders file funding requests on one side, reviewers verify them on the other.",
        contribution:
          "Built both the applicant-facing and back-office React applications: Identity Server for sign-in, React Hook Form for the submission forms, Redux for review state.",
        role: "Front-end Developer",
        year: "2023 – 2024",
        problem:
          "Funding requests and the documents backing them moved by hand, leaving reviewers no consistent way to verify a stakeholder submission and no single view of where allocation stood.",
        outcome:
          "Requests and verification run through one system, which improved resource allocation and day-to-day operations. Structuring the UI with Atomic Design let the external and internal applications share one component layer.",
      },
      masukbersama: {
        summary:
          "A dual-platform learning product helping high school students test their competence before the college entrance exam.",
        contribution:
          "Built the web application in Next.js and Tailwind CSS, and designed the interface.",
        role: "Front-end Developer & UI/UX Designer",
        year: "2022 – 2023",
        problem:
          "Students had no low-stakes way to gauge their readiness before sitting the college entrance test.",
      },
      mybki: {
        summary:
          "A Service Operation Center for Biro Klasifikasi Indonesia, presenting operational data as charts, maps, and tables.",
        contribution:
          "Built the web application in React, using Formik for form handling and validation.",
        role: "Front-end Developer",
        year: "2021",
        problem:
          "Operational and classification data was spread across systems, leaving no single view for the teams that had to act on it.",
      },
      mubarokulhuda: {
        summary:
          "A cross-platform tuition system for Madrasah Mubarokulhuda covering manual and bank-transfer payments, arrears, financial reports, and payment recaps.",
        contribution:
          "Built the web application in React and designed both the web and mobile interfaces.",
        role: "Front-end Developer & UI/UX Designer",
        problem:
          "Parents and school administrators were tracking tuition payments and arrears by hand, with no shared record either side could rely on.",
      },
    } satisfies Record<ProjectId, ProjectCopy>,
  },
};

/**
 * The contract every language implements. Derived from `en` so the two can
 * never drift: there is no separate interface to remember to update.
 */
export type Dictionary = typeof en;
