import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { LocaleFade } from "@/components/ui/LocaleFade";
import { TagList } from "@/components/ui/Tag";
import {
  findProject,
  getAdjacentProjects,
  projectItems,
  type ProjectEntry,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { projectCopy } from "@/i18n";
import { useTranslation } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";
import { buildProjectSchema } from "@/lib/schema";
import { isSafeExternalUrl } from "@/lib/url";
import { projectImageTransition } from "@/lib/viewTransition";

interface ProjectPageProps {
  readonly project: ProjectEntry;
  readonly previous: Pick<ProjectEntry, "id" | "name"> | null;
  readonly next: Pick<ProjectEntry, "id" | "name"> | null;
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projectItems.map((project) => ({ params: { id: project.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProjectPageProps> = ({
  params,
}) => {
  const id = typeof params?.id === "string" ? params.id : undefined;
  const project = id ? findProject(id) : undefined;
  if (!project || !id) return { notFound: true };

  const adjacent = getAdjacentProjects(id);

  return {
    props: {
      project,
      previous: adjacent
        ? { id: adjacent.previous.id, name: adjacent.previous.name }
        : null,
      next: adjacent ? { id: adjacent.next.id, name: adjacent.next.name } : null,
    },
  };
};

/** Collapsible detail block. Native `<details>` — open by default, no JS. */
function DetailSection({
  title,
  body,
  defaultOpen = false,
}: {
  readonly title: string;
  readonly body: string;
  readonly defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-b border-line">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-fluid-lg font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          aria-hidden
          className="shrink-0 text-ink-subtle transition-transform duration-200 ease-smooth group-open:-rotate-180 motion-reduce:transition-none"
        >
          <path d="M6 9.5l6 6 6-6" />
        </svg>
      </summary>
      <p className="max-w-prose pb-6 text-fluid-base text-ink-muted">{body}</p>
    </details>
  );
}

export default function ProjectDetailPage({
  project,
  previous,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslation();
  const copy = projectCopy(t, project.id);
  const detailsRef = useReveal<HTMLDivElement>();

  const images = [project.imageSrc, ...(project.gallery ?? [])];
  const hasLiveUrl = isSafeExternalUrl(project.url);
  const attribution = [project.company, copy.role].filter(Boolean).join(" · ");

  // The full name rides on every page so the whole site reinforces one query.
  const pageTitle = `${project.name} | ${siteConfig.name}`;
  const pageUrl = `${siteConfig.url}/projects/${project.id}`;
  const ogImage = `${siteConfig.url}${project.imageSrc}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={copy.summary} />
        <meta name="author" content={siteConfig.name} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={copy.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content={t.meta.interfaceAlt(project.name)}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={copy.summary} />
        <meta name="twitter:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildProjectSchema(project, t)),
          }}
        />
      </Head>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-pill focus:bg-ink focus:px-5 focus:py-3 focus:text-fluid-sm focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>

      <Navbar activeSection="projects" />

      <LocaleFade>
        <main id="main" className="pt-24 sm:pt-28">
          <div className="mx-auto max-w-content px-gutter">
            <nav
              aria-label={t.projectDetail.breadcrumbLabel}
              // `gap-y-3` rather than `gap-y-1`: the links below carry vertical
              // padding for a usable touch target, so wrapped rows need the room.
              className="flex flex-wrap items-center gap-x-2 gap-y-3 py-6 text-fluid-xs text-ink-muted"
            >
              <Link
                href="/#projects"
                className="rounded-sm py-1.5 -my-1.5 underline-offset-4 hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
              >
                {t.projectDetail.home}
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/#projects"
                className="rounded-sm py-1.5 -my-1.5 underline-offset-4 hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
              >
                {t.projectDetail.projects}
              </Link>
              <span aria-hidden>/</span>
              <span aria-current="page" className="text-ink">
                {project.name}
              </span>
            </nav>
          </div>

          <div className="mx-auto grid max-w-content gap-x-14 gap-y-12 px-gutter pb-20 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-start">
            {/* Info rail — sticky on desktop, inline above the fold on mobile.
                The height cap matters on short landscape viewports: without it a
                pinned rail taller than the viewport puts its own buttons below
                the fold with no way to scroll to them. */}
            <aside className="lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              {attribution && (
                <p className="text-fluid-xs uppercase tracking-widest text-ink-subtle">
                  {attribution}
                </p>
              )}

              <h1 className="mt-3 text-fluid-2xl font-semibold tracking-tight text-ink">
                {project.name}
              </h1>

              {copy.year && (
                <p className="mt-2 text-fluid-sm text-ink-muted">{copy.year}</p>
              )}

              <p className="mt-5 text-fluid-base text-ink-muted">
                {copy.summary}
              </p>

              <div className="mt-8 border-t border-line pt-6">
                <h2 className="mb-3 text-fluid-xs uppercase tracking-widest text-ink-subtle">
                  {t.projectDetail.builtWith}
                </h2>
                <TagList
                  items={project.technologies}
                  label={t.projects.technologiesIn(project.name)}
                />
              </div>

              <div className="mt-8">
                {hasLiveUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-fluid-sm font-medium text-white transition-[background-color,transform] duration-200 ease-smooth hover:bg-ink-muted active:translate-y-px motion-reduce:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
                  >
                    {t.projectDetail.visitLiveSite}
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="transition-transform duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                    <span className="sr-only">{t.a11y.opensInNewTab}</span>
                  </a>
                ) : (
                  <p className="rounded-pill border border-dashed border-line px-6 py-3.5 text-center text-fluid-sm text-ink-subtle">
                    {t.projectDetail.notPubliclyAvailable}
                  </p>
                )}

                <Link
                  href="/#projects"
                  className="mt-3 flex w-full items-center justify-center rounded-pill border border-line px-6 py-3.5 text-fluid-sm font-medium text-ink transition-[border-color,transform] duration-200 ease-smooth hover:border-ink active:translate-y-px motion-reduce:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2"
                >
                  {t.projectDetail.allProjects}
                </Link>
              </div>
            </aside>
            {/* Gallery — one full-bleed tile, or a grid once more exist.
                Second in DOM so the project name leads on a narrow screen; the
                explicit grid placement keeps it on the left at `lg`. */}
            <div className="lg:col-start-1 lg:row-start-1">
              <div
                className={cn("grid gap-3", images.length > 1 && "sm:grid-cols-2")}
              >
                {images.map((src, index) => (
                  <div
                    key={src}
                    // The lead image is the other half of the card's named
                    // pair: it is what the thumbnail becomes on arrival.
                    style={
                      index === 0
                        ? projectImageTransition(project.id)
                        : undefined
                    }
                    className={cn(
                      // Screenshots float inside a padded tile rather than
                      // filling it, so nothing in the captured UI is cropped away.
                      "relative overflow-hidden rounded-card bg-surface-raised p-4 sm:p-6",
                      images.length === 1 ? "aspect-[16/10]" : "aspect-[4/3]",
                    )}
                  >
                    <ImageWithFallback
                      src={src}
                      alt={t.projectDetail.screenshotAlt(
                        project.name,
                        index + 1,
                      )}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      priority={index === 0}
                      fit="contain"
                    />
                  </div>
                ))}
              </div>

              <div ref={detailsRef} className="mt-14">
                <h2 className="sr-only">{t.projectDetail.detailHeading}</h2>
                <div className="border-t border-line">
                  {copy.problem && (
                    <DetailSection
                      title={t.projectDetail.problem}
                      body={copy.problem}
                      defaultOpen
                    />
                  )}
                  <DetailSection
                    title={t.projectDetail.contribution}
                    body={copy.contribution}
                    defaultOpen={!copy.problem}
                  />
                  {copy.outcome && (
                    <DetailSection
                      title={t.projectDetail.outcome}
                      body={copy.outcome}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {(previous || next) && (
            <nav
              aria-label={t.projectDetail.moreProjects}
              className="border-t border-line bg-surface-raised px-gutter py-12"
            >
              <ul className="mx-auto grid max-w-content gap-3 sm:grid-cols-2">
                {previous && (
                  <li>
                    <Link
                      href={`/projects/${previous.id}`}
                      className="group flex h-full flex-col gap-1 rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-ink hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                    >
                      <span className="text-fluid-xs uppercase tracking-widest text-ink-subtle">
                        {t.projectDetail.previous}
                      </span>
                      <span className="text-fluid-lg font-medium tracking-tight text-ink">
                        {previous.name}
                      </span>
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link
                      href={`/projects/${next.id}`}
                      className="group flex h-full flex-col gap-1 rounded-card border border-line bg-surface p-6 transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-ink hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0 sm:items-end sm:text-right"
                    >
                      <span className="text-fluid-xs uppercase tracking-widest text-ink-subtle">
                        {t.projectDetail.next}
                      </span>
                      <span className="text-fluid-lg font-medium tracking-tight text-ink">
                        {next.name}
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </main>

        <Footer />
      </LocaleFade>
    </>
  );
}
