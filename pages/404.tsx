import Head from "next/head";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LocaleFade } from "@/components/ui/LocaleFade";
import { siteConfig } from "@/data/site";
import { useTranslation } from "@/i18n/LocaleProvider";

/**
 * Replaces Next's built-in 404, which is English-only and would be the one
 * page on the site that ignores the language choice. Keeps the header, so the
 * switcher and the way back are both still there.
 */
export default function NotFoundPage() {
  const t = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t.notFound.title} | ${siteConfig.name}`}</title>
        {/* A missing page has nothing worth indexing. */}
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar activeSection={undefined} />

      <LocaleFade>
        <main
          id="main"
          className="mx-auto flex min-h-[70vh] max-w-content flex-col justify-center px-gutter pb-section-y pt-32 sm:pt-40"
        >
          <p
            aria-hidden
            className="font-mono text-fluid-sm text-ink-subtle"
          >
            404
          </p>

          <h1 className="mt-4 max-w-[16ch] text-fluid-3xl font-semibold tracking-tight text-ink">
            {t.notFound.heading}
          </h1>

          <p className="mt-6 max-w-prose text-fluid-base text-ink-muted">
            {t.notFound.body}
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-block rounded-pill bg-ink px-6 py-3 text-fluid-sm font-medium text-white transition-colors duration-200 ease-smooth hover:bg-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
            >
              {t.notFound.cta}
            </Link>
          </div>
        </main>

        <Footer />
      </LocaleFade>
    </>
  );
}
