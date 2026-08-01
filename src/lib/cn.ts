/** Joins class names, dropping falsy entries. */
export function cn(
  ...classNames: readonly (string | false | null | undefined)[]
): string {
  return classNames.filter(Boolean).join(" ");
}
