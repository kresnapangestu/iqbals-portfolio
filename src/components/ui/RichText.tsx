import { Fragment } from "react";

import type { RichText as RichTextParts } from "@/i18n/types";

interface RichTextProps {
  readonly parts: RichTextParts;
  /** `inverse` sits on dark surfaces, `default` on light ones. */
  readonly tone?: "default" | "inverse";
}

const emphasisClass = {
  default: "font-medium text-ink",
  inverse: "text-white",
} as const;

const linkClass = {
  default:
    "rounded-sm text-accent-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2",
  inverse:
    "rounded-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse",
} as const;

/**
 * Renders a translated paragraph that carries inline emphasis or a link.
 *
 * The alternative — splitting the sentence into three strings around the
 * emphasised word — bakes English word order into every other language. Here a
 * translator moves the emphasised part wherever their grammar puts it.
 */
export function RichText({ parts, tone = "default" }: RichTextProps) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <Fragment key={index}>{part}</Fragment>;
        }
        if ("emphasis" in part) {
          return (
            <span key={index} className={emphasisClass[tone]}>
              {part.emphasis}
            </span>
          );
        }
        return (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass[tone]}
          >
            {part.link}
          </a>
        );
      })}
    </>
  );
}
