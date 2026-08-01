/**
 * Whether a string is a link we are willing to render as an anchor.
 *
 * Guards the data layer, not programmer error: content may gain a malformed or
 * `javascript:` URL, and the UI should degrade to plain text rather than ship a
 * broken or unsafe link.
 */
export function isSafeExternalUrl(url: string | undefined): url is string {
  if (!url) return false;
  try {
    const { protocol } = new URL(url);
    return protocol === "https:" || protocol === "http:";
  } catch {
    return false;
  }
}
