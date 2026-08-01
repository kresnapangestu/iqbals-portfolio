import type { GetServerSideProps } from "next";

import { projectItems } from "@/data/projects";
import { siteConfig } from "@/data/site";

/**
 * Sitemap generated from the project data rather than kept as a static file,
 * so adding a project cannot leave the sitemap silently out of date.
 */
function buildSitemap(): string {
  const today = new Date().toISOString().slice(0, 10);

  const urls = [
    { loc: siteConfig.url, priority: "1.0", changefreq: "monthly" },
    ...projectItems.map((project) => ({
      loc: `${siteConfig.url}/projects/${project.id}`,
      priority: "0.8",
      changefreq: "yearly",
    })),
  ];

  const body = urls
    .map(
      ({ loc, priority, changefreq }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export const getServerSideProps: GetServerSideProps = ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");
  res.write(buildSitemap());
  res.end();
  return Promise.resolve({ props: {} });
};

/** Never rendered: getServerSideProps writes the response directly. */
export default function Sitemap() {
  return null;
}
