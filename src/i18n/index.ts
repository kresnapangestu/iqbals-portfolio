import type { ProjectId } from "@/data/projects";
import { en, type Dictionary } from "@/i18n/en";
import { id } from "@/i18n/id";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type Locale,
  type LocaleConfig,
  type ProjectCopy,
} from "@/i18n/types";

export { DEFAULT_LOCALE, LOCALES };
export type { Dictionary, Locale, LocaleConfig };

/**
 * A project's copy, widened to `ProjectCopy`.
 *
 * The dictionaries keep each project's exact shape, which is what forces a
 * translation to carry the same optional sections as the English original.
 * That precision is unusable at the call site — the union has no common
 * `outcome` — so reading goes through here, where the declared return type
 * puts the optional fields back without loosening the check upstream.
 */
export function projectCopy(t: Dictionary, id: ProjectId): ProjectCopy {
  return t.content.projects[id];
}

/** Every dictionary, by code. The only place a language is wired in. */
export const dictionaries: Record<Locale, Dictionary> = { en, id };

/** Presentation and platform metadata per language. */
export const localeConfig: Record<Locale, LocaleConfig> = {
  en: {
    label: "EN",
    nativeName: "English",
    htmlLang: "en",
    intlLocale: "en-US",
    ogLocale: "en_US",
  },
  id: {
    label: "ID",
    nativeName: "Bahasa Indonesia",
    htmlLang: "id",
    intlLocale: "id-ID",
    ogLocale: "id_ID",
  },
};

/** Where the choice is remembered between visits. */
export const LOCALE_STORAGE_KEY = "portfolio.locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/**
 * The language to open in: a previous choice first, then what the browser asks
 * for, then English.
 *
 * Runs on the client only. Rendering the server's HTML in a stored language is
 * impossible without a cookie round-trip, and reading `localStorage` during
 * render would make the first paint disagree with the server's markup.
 */
export function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Private mode or a blocked origin: fall through to the browser's setting.
  }

  // `languages` is ordered by preference; the first supported one wins.
  const preferred = window.navigator.languages ?? [window.navigator.language];
  for (const tag of preferred) {
    const base = tag.split("-")[0]?.toLowerCase();
    if (isLocale(base)) return base;
  }

  return DEFAULT_LOCALE;
}
