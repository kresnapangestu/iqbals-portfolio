import Head from "next/head";

import { Footer } from "@/components/layout/Footer";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { SocialRail } from "@/components/layout/SocialRail";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { LocaleFade } from "@/components/ui/LocaleFade";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { localeConfig } from "@/i18n";
import { useLocale, useTranslation } from "@/i18n/LocaleProvider";
import { buildPersonSchema, buildWebSiteSchema } from "@/lib/schema";
import { SECTION_IDS } from "@/types";

export default function HomePage() {
  const t = useTranslation();
  const { locale } = useLocale();
  const activeSection = useActiveSection(SECTION_IDS);

  // Full name first: this page's main search job is to rank for the name itself.
  const pageTitle = `${siteConfig.name} | ${t.meta.jobTitle}`;
  const ogImage = `${siteConfig.url}/images/profile_picture.png`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="author" content={siteConfig.name} />
        <link rel="canonical" href={siteConfig.url} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content={localeConfig[locale].ogLocale} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta
          property="og:image:alt"
          content={t.meta.portraitAlt(siteConfig.name)}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={t.meta.description} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          // Static, author-controlled objects. No user input reaches this string.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              buildPersonSchema(t),
              buildWebSiteSchema(t, locale),
            ]),
          }}
        />
      </Head>

      <IntroOverlay />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-fluid-sm focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>

      {/* Header and rail stay outside the fade: dimming the control you just
          pressed reads as the page stalling rather than as it responding. */}
      <Navbar activeSection={activeSection} />
      <SocialRail />

      <LocaleFade>
        <main id="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>

        <Footer />
      </LocaleFade>
    </>
  );
}
