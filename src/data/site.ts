import type { NavigationItem, SocialLink } from "@/types";

/**
 * Identity and contact details, referenced by metadata, nav, and footer.
 *
 * Only language-neutral values live here. The job title, location phrasing, and
 * site description read differently per language and live in `src/i18n`.
 */
export const siteConfig = {
  name: "Mohammad Iqbal Kresna Pangestu",
  shortName: "Pangestu",
  email: "mohammadiqbalkresna@gmail.com",
  url: "https://kresnapangestu.com",
  resumeUrl:
    "https://drive.google.com/drive/folders/1NYDO4BkBAZ1-IMU47hyK9wnhmDt46mGF?usp=sharing",
  moreProjectsUrl:
    "https://drive.google.com/file/d/13ARBqooRlTh4BOMDtfqeWcG0Pq_VL3tA/view?usp=sharing",
  spotifyUrl: "https://open.spotify.com/user/kresnaiqbal",
} as const;

// Root-relative hrefs so the same nav works from a project page, where the
// landing page's section anchors do not exist. Labels come from the dictionary,
// keyed by `id`, so a nav link cannot exist without a translation for it.
export const navigationItems: readonly NavigationItem[] = [
  { id: "about", href: "/#about" },
  { id: "experience", href: "/#experience" },
  { id: "projects", href: "/#projects" },
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

/**
 * Greetings cycled in the hero. Deliberately *not* translated: the point is the
 * spread of languages itself, and it reads the same whichever locale is active.
 */
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
