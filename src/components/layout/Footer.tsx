import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    // No top padding: the preceding section already ends on the section rhythm.
    <footer className="bg-surface px-gutter pb-12 pt-16">
      <div className="mx-auto max-w-content">
        <div className="rounded-card bg-surface-inverse px-gutter py-12 text-center sm:py-16">
          <p className="text-fluid-lg font-medium text-white">
            Have something you need built?
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block break-all rounded-sm text-fluid-xl font-semibold tracking-tight text-white underline-offset-8 transition-colors duration-200 ease-smooth hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse"
          >
            {siteConfig.email}
          </a>
          <p className="mx-auto mt-4 max-w-md text-fluid-sm text-white/60">
            Open to possibilities. A short outline of the work and your timeline
            is enough to start a conversation.
          </p>

          <ul
            aria-label="Social profiles"
            className="mt-8 flex justify-center gap-6 rail:hidden"
          >
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-pill text-white/80 transition-colors duration-200 ease-smooth hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="sr-only">{link.label}</span>
                  <SocialIcon icon={link.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-fluid-xs text-ink-muted">
          Designed and built by {siteConfig.name}. Self-hosted with Next.js.
        </p>
      </div>
    </footer>
  );
}
