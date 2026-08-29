import { useEffect, useRef, useState } from "react";

import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { useTranslation } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

interface LightboxImage {
  readonly src: string;
  readonly alt: string;
}

interface ImageLightboxProps {
  readonly images: readonly LightboxImage[];
  readonly index: number;
  readonly onIndexChange: (index: number) => void;
  readonly onClose: () => void;
}

/** Drag/swipe past this many pixels counts as a deliberate page, not a tap. */
const SWIPE_THRESHOLD = 60;

/**
 * Full-screen viewer for a gallery: Escape and backdrop click close it,
 * arrow keys and the prev/next buttons page through, and the image itself
 * drags with a pointer (mouse or touch — one event model covers both) to the
 * same effect. No focus trap: three focusable controls in a fixed overlay
 * don't need one, same call the Navbar's disclosure menu makes.
 */
export function ImageLightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: ImageLightboxProps) {
  const t = useTranslation();
  const dialogRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const canPage = images.length > 1;

  const goPrevious = () =>
    canPage && onIndexChange((index - 1 + images.length) % images.length);
  const goNext = () => canPage && onIndexChange((index + 1) % images.length);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images.length]);

  const image = images[index];
  if (!image) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-4 animate-fade-in sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full p-2.5 text-white/80 transition-colors duration-200 ease-smooth hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
        <span className="sr-only">{t.lightbox.close}</span>
      </button>

      {canPage && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrevious();
            }}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2.5 text-white/80 transition-colors duration-200 ease-smooth hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4"
          >
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
            <span className="sr-only">{t.lightbox.previous}</span>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2.5 text-white/80 transition-colors duration-200 ease-smooth hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4"
          >
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span className="sr-only">{t.lightbox.next}</span>
          </button>
        </>
      )}

      <div
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => {
          if (!canPage) return;
          dragStartX.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (dragStartX.current === null) return;
          setDragX(event.clientX - dragStartX.current);
        }}
        onPointerUp={() => {
          if (dragStartX.current === null) return;
          if (dragX <= -SWIPE_THRESHOLD) goNext();
          else if (dragX >= SWIPE_THRESHOLD) goPrevious();
          dragStartX.current = null;
          setDragX(0);
        }}
        style={{
          transform: dragX ? `translateX(${dragX}px)` : undefined,
          transition: dragStartX.current === null ? "transform 200ms" : "none",
        }}
        className={cn(
          "relative h-[75vh] w-full max-w-5xl touch-pan-y",
          canPage && "cursor-grab active:cursor-grabbing",
        )}
      >
        <ImageWithFallback
          key={image.src}
          src={image.src}
          alt={image.alt}
          sizes="90vw"
          fit="contain"
          priority
        />
      </div>

      {canPage && (
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-fluid-xs text-white/70">
          {t.lightbox.counter(index + 1, images.length)}
        </p>
      )}
    </div>
  );
}
