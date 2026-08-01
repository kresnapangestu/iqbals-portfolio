import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 bg-surface-inverse px-gutter py-section-y text-white"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          id="about-heading"
          index="01"
          title="About"
          tone="inverse"
        />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:items-start md:gap-14">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-card sm:w-64 md:mx-0 md:w-full md:max-w-sm">
            <Image
              src="/images/profile_picture.png"
              alt={`Portrait of ${siteConfig.name}`}
              fill
              sizes="(min-width: 768px) 24rem, 16rem"
              className="object-cover"
            />
          </div>

          <div className="space-y-5 text-fluid-base text-white/75">
            <p>
              An early interest in computers led me to study computer science at{" "}
              <span className="text-white">Politeknik Negeri Bandung</span>,
              where I fell into web development and stayed. Since then I&apos;ve
              built software for a software house and for a large corporation.
            </p>
            <p>
              My focus now is building well-designed, easy-to-use products at{" "}
              <span className="text-white">Huawei Tech Investment</span> as a
              front-end developer.
            </p>
            <p>
              Outside front-end work I&apos;m exploring networking, CI/CD
              pipelines, and homelab infrastructure. This site is one of those
              experiments: it runs on a server I built from a repurposed 2013
              laptop, deployed from my own Git runner.
            </p>
            <p>
              Away from the keyboard I&apos;m usually at a local coffee shop,
              gaming with friends, playing tennis with my club or my friends, or
              working through a playlist on{" "}
              <a
                href={siteConfig.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-inverse"
              >
                Spotify
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
