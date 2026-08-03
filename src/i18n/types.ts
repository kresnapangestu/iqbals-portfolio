import type { RichText } from "@/i18n/richText";

/**
 * Supported locales.
 *
 * Adding one means: add the code here, add a `localeConfig` entry in
 * `src/i18n/index.ts`, and add a dictionary file typed as `Dictionary`. The
 * compiler then reports every string the new language is missing. Nothing in
 * the components changes.
 */
export const LOCALES = ["en", "id"] as const;

export type Locale = (typeof LOCALES)[number];

/** Falls back to English: it is the shape all other dictionaries are typed against. */
export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleConfig {
  /** Two-letter badge shown in the switcher. */
  readonly label: string;
  /** Endonym, used for the switcher's accessible name. */
  readonly nativeName: string;
  /** `<html lang>` value. */
  readonly htmlLang: string;
  /** BCP 47 tag handed to `Intl`, which needs the region for month names. */
  readonly intlLocale: string;
  /** Open Graph `og:locale` value. */
  readonly ogLocale: string;
}

/** Translatable copy for one role. Everything else about it is structural data. */
export interface ExperienceCopy {
  readonly role: string;
  readonly highlights: readonly string[];
}

/** Translatable copy for one project. Optional fields hide their section when absent. */
export interface ProjectCopy {
  readonly summary: string;
  readonly contribution: string;
  readonly role?: string;
  /** Delivery period as displayed, e.g. "2021 – Present" / "2021 – Sekarang". */
  readonly year?: string;
  readonly problem?: string;
  readonly outcome?: string;
}

/** Pieces `formatDuration` assembles, so the lib stays free of language rules. */
export interface DurationStrings {
  readonly lessThanMonth: string;
  readonly years: (count: number) => string;
  readonly months: (count: number) => string;
  readonly combine: (years: string, months: string) => string;
}

export type { RichText };
