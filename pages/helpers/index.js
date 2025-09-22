import moment from "moment";

export function diffInYearsMonths(startDate, endDate) {
  const start = moment(startDate, "MMMM YYYY");
  const end = endDate ? moment(endDate, "MMMM YYYY") : moment();

  if (!start.isValid() || (endDate && !end.isValid())) {
    return "Invalid date format. Use 'MMMM YYYY' (e.g., July 2024)";
  }

  let diffInMonths = end.diff(start, "months");
  const isFuture = diffInMonths < 0;
  diffInMonths = Math.abs(diffInMonths);

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (parts.length === 0) parts.push("0 months");

  // If endDate was given, just show raw difference
  if (endDate) {
    return parts.join(" ");
  }

  // If comparing to today, add ago / in
  return isFuture ? `${parts.join(" ")}` : `${parts.join(" ")}`;
}
