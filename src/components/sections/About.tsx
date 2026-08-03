import Image from "next/image";

import { RichText } from "@/components/ui/RichText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";
import { useTranslation } from "@/i18n/LocaleProvider";

export function About() {
  const t = useTranslation();

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
          title={t.about.heading}
          tone="inverse"
        />

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:items-start md:gap-14">
          <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-card sm:w-64 md:mx-0 md:w-full md:max-w-sm">
            <Image
              src="/images/profile_picture.png"
              alt={t.meta.portraitAlt(siteConfig.name)}
              fill
              sizes="(min-width: 768px) 24rem, 16rem"
              className="object-cover"
            />
          </div>

          <div className="space-y-5 text-fluid-base text-white/75">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <RichText parts={paragraph} tone="inverse" />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
