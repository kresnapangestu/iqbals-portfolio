import { useEffect, useState } from "react";

import { heroGreetings, siteConfig } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const GREETING_INTERVAL_MS = 3200;

export function Hero() {
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
        <span className="sr-only">Hello</span>, my name is
      </p>

      <h1
        id="hero-heading"
        className="mt-4 max-w-[18ch] text-fluid-3xl font-semibold tracking-tight text-ink"
      >
        {siteConfig.name}
      </h1>

      <p className="mt-4 text-fluid-xl font-light text-ink-muted">
        {siteConfig.role} based in {siteConfig.location}.
      </p>

      <p className="mt-8 max-w-prose text-fluid-base text-ink-muted">
        I build operational dashboards and modernise legacy front-ends at{" "}
        <span className="font-medium text-ink">Huawei Tech Investment</span>.
        Over four years that work has covered more than 40 telecom analytics
        dashboards used by over 500 people a day. I design a good share of what
        I build, and I care about interfaces that stay readable under real data.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-pill bg-ink px-6 py-3 text-fluid-sm font-medium text-white transition-colors duration-200 ease-smooth hover:bg-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          View selected work
        </a>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill border border-line px-6 py-3 text-fluid-sm font-medium text-ink transition-colors duration-200 ease-smooth hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
        >
          View resume
        </a>
      </div>
    </section>
  );
}
