/**
 * Rich text as data.
 *
 * A few sentences on this site carry inline emphasis or a link. Splitting those
 * into `bioBefore` / `bioCompany` / `bioAfter` strings would hard-code English
 * word order into every other language, so a paragraph is instead a list of
 * parts a translator can reorder freely. `RichText` renders them.
 */
export type RichTextPart =
  | string
  | { readonly emphasis: string }
  | { readonly link: string; readonly href: string };

export type RichText = readonly RichTextPart[];

/**
 * Tags a paragraph as `RichText`.
 *
 * Without it the dictionary infers the literal array shape it was written with,
 * and a translation that emphasises a different word fails to type-check for a
 * reason that has nothing to do with correctness.
 */
export function rt(...parts: RichTextPart[]): RichText {
  return parts;
}
