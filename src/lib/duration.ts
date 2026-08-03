import type { DurationStrings } from "@/i18n/types";

/** `YYYY-MM` month key, e.g. "2021-10". */
export type MonthKey = `${number}-${number}`;

export function toMonthIndex(month: MonthKey): number {
  const [year, monthOfYear] = month.split("-").map(Number);
  if (
    year === undefined ||
    monthOfYear === undefined ||
    Number.isNaN(year) ||
    Number.isNaN(monthOfYear)
  ) {
    throw new Error(`Invalid month key: ${month}`);
  }
  return year * 12 + (monthOfYear - 1);
}

/**
 * Elapsed time between two months, as "2 years 3 months" / "2 tahun 3 bulan".
 *
 * Replaces the moment.js helper: the only date work in the project is a
 * whole-month difference, which needs no date library.
 *
 * Language lives in `strings`, not here — English pluralises, Indonesian does
 * not, and a third language may put the unit first. This function only decides
 * *which* pieces apply.
 *
 * @param startedAt Month the period began.
 * @param endedAt   Month the period ended. Defaults to the current month,
 *                  which is what makes an ongoing role's duration self-update.
 */
export function formatDuration(
  startedAt: MonthKey,
  endedAt: MonthKey | undefined,
  strings: DurationStrings,
  now: Date = new Date(),
): string {
  const start = toMonthIndex(startedAt);
  const end =
    endedAt === undefined
      ? now.getFullYear() * 12 + now.getMonth()
      : toMonthIndex(endedAt);

  const totalMonths = Math.max(0, end - start);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0 && months === 0) return strings.lessThanMonth;
  if (years === 0) return strings.months(months);
  if (months === 0) return strings.years(years);
  return strings.combine(strings.years(years), strings.months(months));
}
