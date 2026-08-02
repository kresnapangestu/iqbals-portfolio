import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, socialLinks } from "@/data/site";

/**
 * Fixed social rail and email, shown from large screens up.
 *
 * Colour comes from `mix-blend-difference` rather than from tracking which
 * section is behind it: the rail crosses the light/dark boundary mid-scroll, and
 * blending stays legible through the transition instead of snapping a beat late.
 *
 * Hidden below `rail` because the footer already carries the same links, and
 * because narrower viewports have no gutter to spare: the content column runs
 * the full width there, so a fixed rail would sit on top of it.
 */
export function SocialRail() {
  return (
    <div className="pointer-events-none hidden text-white mix-blend-difference rail:block">
      <ul
        aria-label="Social profiles"
        className="pointer-events-auto fixed bottom-0 left-gutter z-40 flex flex-col items-center gap-5 after:h-24 after:w-px after:bg-current after:opacity-40"
      >
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-sm p-1 transition-transform duration-200 ease-smooth hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <span className="sr-only">{link.label}</span>
              <SocialIcon icon={link.icon} className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>

      <div className="pointer-events-auto fixed bottom-0 right-gutter z-40 flex flex-col items-center gap-5 after:h-24 after:w-px after:bg-current after:opacity-40">
        <a
          href={`mailto:${siteConfig.email}`}
          // `px-1.5 -mx-1.5` widens the hit area of the vertical text without
          // moving it off the rail's centre line.
          className="rounded-sm px-1.5 -mx-1.5 text-fluid-xs tracking-widest [writing-mode:vertical-rl]"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
