import Image from "next/image";
import { useState } from "react";

import { useTranslation } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

interface ImageWithFallbackProps {
  readonly src: string;
  readonly alt: string;
  readonly sizes: string;
  readonly priority?: boolean;
  readonly className?: string;
  /**
   * `cover` fills the frame and crops — right for decorative thumbnails.
   * `contain` shows the whole image — right for UI screenshots, where a crop
   * removes the very thing being shown.
   */
  readonly fit?: "cover" | "contain";
}

/**
 * Fills its positioned parent, falling back to a label if the file is missing.
 *
 * The parent's background shows through until the image paints, which is why
 * opacity is never gated on an `onLoad` handler: that event fires before
 * hydration for cached images, leaving them permanently invisible.
 */
export function ImageWithFallback({
  src,
  alt,
  sizes,
  priority = false,
  className,
  fit = "cover",
}: ImageWithFallbackProps) {
  const t = useTranslation();
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <p className="absolute inset-0 grid place-items-center px-4 text-center text-fluid-xs text-ink-subtle">
        {t.media.previewUnavailable}
      </p>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      onError={() => setHasFailed(true)}
      className={cn(fit === "contain" ? "object-contain" : "object-cover", className)}
    />
  );
}
