import type { MonthKey } from "@/lib/duration";

/**
 * "October 2021 – Present" / "Oktober 2021 – Sekarang".
 *
 * Month names come from `Intl` rather than from a translated list: it is the
 * platform's own data, already correct for every locale, and it removes twelve
 * strings per language that nobody would otherwise think to check.
 *
 * The range is built from the same `YYYY-MM` fields the duration uses, so the
 * displayed period cannot drift from the computed one.
 */
export function formatPeriod(
  startedAt: MonthKey,
  endedAt: MonthKey | undefined,
  intlLocale: string,
  presentLabel: string,
): string {
  const format = (month: MonthKey) => {
    const [year, monthOfYear] = month.split("-").map(Number);
    if (year === undefined || monthOfYear === undefined) return month;
    // UTC on both sides: a local-time date at midnight can land in the previous
    // month for negative offsets, renaming the month by one.
    return new Intl.DateTimeFormat(intlLocale, {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, monthOfYear - 1, 1)));
  };

  return `${format(startedAt)} – ${endedAt ? format(endedAt) : presentLabel}`;
}
