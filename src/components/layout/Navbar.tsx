import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/types";

interface NavbarProps {
  readonly activeSection: SectionId | undefined;
}

/**
 * Fixed header. The mobile menu is a disclosure rather than a modal: it is
 * plain markup, closes on Escape and on outside click, and needs no focus trap.
 */
export function Navbar({ activeSection }: NavbarProps) {
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
      className="fixed inset-x-0 top-0 z-50 border-b border-line-inverse bg-surface-inverse/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-gutter py-3">
        {/* Root-relative: `#hero` alone is a dead link on a project page,
            where no such anchor exists. */}
        <Link
          href="/#hero"
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Image
            src="/images/logo.png"
            width={130}
            height={30}
            alt={`${siteConfig.name}, back to home`}
            priority
            className="h-6 w-auto sm:h-[30px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={cn(
                "rounded-sm text-fluid-sm transition-colors duration-200 ease-smooth",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse",
                activeSection === item.id
                  ? "text-accent"
                  : "text-white/70 hover:text-white",
              )}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-pill border border-white/40 px-4 py-1.5 text-fluid-sm text-white transition-colors duration-200 ease-smooth hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="-mr-2 grid h-11 w-11 place-items-center rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
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

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
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
                  {item.label}
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
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
