/** `YYYY-MM` month key, e.g. "2021-10". */
type MonthKey = `${number}-${number}`;

function toMonthIndex(month: MonthKey): number {
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

function pluralize(count: number, unit: string): string {
  return `${count} ${unit}${count === 1 ? "" : "s"}`;
}

/**
 * Elapsed time between two months, as "2 years 3 months".
 *
 * Replaces the moment.js helper: the only date work in the project is a
 * whole-month difference, which needs no date library.
 *
 * @param startedAt Month the period began.
 * @param endedAt   Month the period ended. Defaults to the current month,
 *                  which is what makes an ongoing role's duration self-update.
 */
export function formatDuration(
  startedAt: MonthKey,
  endedAt?: MonthKey,
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

  if (years === 0 && months === 0) return "less than a month";
  if (years === 0) return pluralize(months, "month");
  if (months === 0) return pluralize(years, "year");
  return `${pluralize(years, "year")} ${pluralize(months, "month")}`;
}
