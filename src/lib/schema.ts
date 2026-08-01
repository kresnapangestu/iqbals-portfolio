import { experienceData } from "@/data/experience";
import { projectItems } from "@/data/projects";
import { siteConfig, socialLinks } from "@/data/site";
import type { Project } from "@/types";

/** Every technology named anywhere in the content, deduplicated. */
function knownTechnologies(): string[] {
  const all = [
    ...experienceData.flatMap((role) => role.technologies),
    ...projectItems.flatMap((project) => project.technologies),
  ];
  return [...new Set(all)].sort();
}

/**
 * Person schema for the landing page.
 *
 * This is the record a search engine reads to connect the name to the person,
 * so it carries employer, education, location, and profiles rather than the
 * bare minimum. Every value comes from content already on the site.
 */
export function buildPersonSchema() {
  const currentRole = experienceData[0];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile_picture.png`,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
    ...(currentRole
      ? {
          worksFor: {
            "@type": "Organization",
            name: currentRole.company,
          },
        }
      : {}),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Politeknik Negeri Bandung",
    },
    knowsAbout: knownTechnologies(),
    sameAs: socialLinks.map((link) => link.url),
  };
}

/** Website schema, so the site itself is a named entity alongside the person. */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.name} portfolio`,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#person` },
  };
}

/** Per-project schema plus its breadcrumb trail. */
export function buildProjectSchema(project: Project) {
  const projectUrl = `${siteConfig.url}/projects/${project.id}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.name,
      url: projectUrl,
      description: project.summary,
      image: `${siteConfig.url}${project.imageSrc}`,
      creator: { "@id": `${siteConfig.url}/#person` },
      keywords: project.technologies.join(", "),
      ...(project.year ? { dateCreated: project.year } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${siteConfig.url}/#projects`,
        },
        { "@type": "ListItem", position: 3, name: project.name },
      ],
    },
  ];
}
