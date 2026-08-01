import type { NavigationItem, SocialLink } from "@/types";

/** Identity and contact details, referenced by metadata, nav, and footer. */
export const siteConfig = {
  name: "Mohammad Iqbal Kresna Pangestu",
  shortName: "Pangestu",
  role: "Front-end Developer",
  location: "Bandung & Jakarta",
  email: "mohammadiqbalkresna@gmail.com",
  url: "https://kresnapangestu.com",
  description:
    "Front-end developer in Bandung and Jakarta. Four years building telecom operations dashboards and migrating legacy front-ends to React and Next.js.",
  resumeUrl:
    "https://drive.google.com/drive/folders/1NYDO4BkBAZ1-IMU47hyK9wnhmDt46mGF?usp=sharing",
  moreProjectsUrl:
    "https://drive.google.com/file/d/13ARBqooRlTh4BOMDtfqeWcG0Pq_VL3tA/view?usp=sharing",
  spotifyUrl: "https://open.spotify.com/user/kresnaiqbal",
} as const;

// Root-relative hrefs so the same nav works from a project page, where the
// landing page's section anchors do not exist.
export const navigationItems: readonly NavigationItem[] = [
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
];

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/kresnapangestu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/kresnaiqbal",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    url: "https://instagram.com/pangestuportfolio",
    icon: "instagram",
  },
];

/** Greetings cycled in the hero. Order is intentional: English first. */
export const heroGreetings: readonly string[] = [
  "Hello",
  "Nǐ hǎo",
  "Bonjour",
  "Halo",
  "Konnichiwa",
  "Ahoj",
  "Hola",
  "Namaste",
  "Здравствуйте",
  "Ciao",
  "Annyeong",
  "Olá",
];
