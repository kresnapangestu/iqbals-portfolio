import { useEffect, useState } from "react";

import { RichText } from "@/components/ui/RichText";
import { heroGreetings, siteConfig } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useTranslation } from "@/i18n/LocaleProvider";

const GREETING_INTERVAL_MS = 3200;

export function Hero() {
  const t = useTranslation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = window.setInterval(
      () => setGreetingIndex((index) => (index + 1) % heroGreetings.length),
      GREETING_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  // Index is always in range, but the compiler cannot know that.
  const greeting = heroGreetings[greetingIndex] ?? heroGreetings[0];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-content px-gutter pb-section-y pt-32 sm:pt-40"
    >
      <p className="text-fluid-lg text-ink-muted">
        {/* The word changes in place; announcing every swap would be noise. */}
        <span
          key={greeting}
          aria-hidden
          className="inline-block animate-fade-in font-medium text-ink motion-reduce:animate-none"
        >
          {greeting}
        </span>
        <span className="sr-only">{t.hero.greeting}</span>
        {t.hero.introSuffix}
      </p>

      <h1
        id="hero-heading"
        className="mt-4 max-w-[18ch] text-fluid-3xl font-semibold tracking-tight text-ink"
      >
        {siteConfig.name}
      </h1>

      <p className="mt-4 text-fluid-xl font-light text-ink-muted">
        {t.hero.roleLine}
      </p>

      <p className="mt-8 max-w-prose text-fluid-base text-ink-muted">
        <RichText parts={t.hero.bio} />
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-pill bg-ink px-6 py-3 text-fluid-sm font-medium text-white transition-colors duration-200 ease-smooth hover:bg-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          {t.hero.ctaWork}
        </a>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill border border-line px-6 py-3 text-fluid-sm font-medium text-ink transition-colors duration-200 ease-smooth hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          {t.hero.ctaResume}
        </a>
      </div>
    </section>
  );
}
