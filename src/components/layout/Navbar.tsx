import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { navigationItems, siteConfig } from "@/data/site";
import { useTranslation } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { viewTransitionName } from "@/lib/viewTransition";
import type { SectionId } from "@/types";

interface NavbarProps {
  readonly activeSection: SectionId | undefined;
}

/**
 * Fixed header. The mobile menu is a disclosure rather than a modal: it is
 * plain markup, closes on Escape and on outside click, and needs no focus trap.
 *
 * The language switcher sits in the bar itself at every width rather than
 * inside the mobile menu, because a visitor who needs the other language should
 * not have to find it behind a hamburger first.
 */
export function Navbar({ activeSection }: NavbarProps) {
  const t = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={navRef}
      // Named for the View Transitions API: the header exists on both pages, so
      // it holds still through a navigation instead of cross-fading with the
      // content underneath it.
      style={viewTransitionName("site-header")}
      className="fixed inset-x-0 top-0 z-50 border-b border-line-inverse bg-surface-inverse/95 backdrop-blur"
    >
      {/* Reading position, drawn on the header's own edge. Scroll-driven CSS —
          no listener, and nothing at all where the timeline is unsupported.
          Deliberately not the accent: the active nav item is already the one
          yellow thing on screen. */}
      <span
        aria-hidden
        data-scroll-progress
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/40"
      />

      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-gutter py-3 sm:gap-4">
        {/* Root-relative: `#hero` alone is a dead link on a project page,
            where no such anchor exists. */}
        <Link
          href="/#hero"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Image
            src="/images/logo.png"
            width={147}
            height={35}
            alt={t.meta.logoAlt(siteConfig.name)}
            priority
            className="h-6 w-auto sm:h-[30px]"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav
            aria-label={t.a11y.primaryNav}
            className="hidden items-center gap-8 md:flex"
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={cn(
                  // `py-2 -my-2`: a 24px-tall text link is the bare minimum on a
                  // touch tablet, and the negative margin keeps the bar's height.
                  "relative rounded-sm py-2 -my-2 text-fluid-sm transition-colors duration-200 ease-smooth",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse",
                  // A rule that wipes in under the label, in whatever colour the
                  // label already is — the same gesture as the section rules.
                  "after:absolute after:inset-x-0 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-reveal after:content-['']",
                  "hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none",
                  activeSection === item.id
                    ? "text-accent after:scale-x-100"
                    : "text-white/70 hover:text-white",
                )}
              >
                {t.nav.sections[item.id]}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill border border-white/40 px-4 py-1.5 text-fluid-sm text-white transition-colors duration-200 ease-smooth hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse"
            >
              {t.nav.resume}
            </a>
          </nav>

          {/* Hairline separator, desktop only: at `md` the switcher would
              otherwise read as a fourth nav item rather than a setting. */}
          <span aria-hidden className="hidden h-5 w-px bg-white/15 md:block" />

          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="-mr-2 grid h-11 w-11 place-items-center rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            </span>
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden
            >
              {isMenuOpen ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M3.5 7h17" />
                  <path d="M3.5 12h17" />
                  <path d="M3.5 17h17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label={t.a11y.primaryNav}
          className="animate-fade-in border-t border-line-inverse px-gutter pb-4 pt-2 md:hidden motion-reduce:animate-none"
        >
          <ul className="flex flex-col">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={cn(
                    "block rounded-sm py-3 text-fluid-base",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    activeSection === item.id ? "text-accent" : "text-white/80",
                  )}
                >
                  {t.nav.sections[item.id]}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-line-inverse pt-3">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-sm py-2 text-fluid-base text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {t.nav.resume}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
