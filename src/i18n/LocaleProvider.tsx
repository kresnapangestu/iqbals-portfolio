import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import {
  DEFAULT_LOCALE,
  dictionaries,
  localeConfig,
  LOCALE_STORAGE_KEY,
  resolveInitialLocale,
  type Dictionary,
  type Locale,
} from "@/i18n";

/**
 * How long the page holds its dimmed state before the copy swaps. The text
 * changes at the bottom of the dip, so a switch reads as one movement rather
 * than as a flash of the old language under the new one.
 */
const SWAP_MS = 140;

interface LocaleControl {
  /** Locale the rendered copy is in. Trails `selected` by one dip. */
  readonly locale: Locale;
  /** Locale the visitor has chosen. Drives the switcher, which must feel instant. */
  readonly selected: Locale;
  readonly setLocale: (locale: Locale) => void;
  /** True while the copy is mid-swap. `LocaleFade` reads this. */
  readonly isSwapping: boolean;
}

/**
 * Two contexts, deliberately.
 *
 * Text components subscribe to the dictionary alone, so the twice-per-switch
 * `isSwapping` flip re-renders only the switcher and the fade wrapper — not
 * every paragraph on the page.
 */
const TranslationContext = createContext<Dictionary>(dictionaries[DEFAULT_LOCALE]);

const LocaleControlContext = createContext<LocaleControl | undefined>(undefined);

export function LocaleProvider({ children }: { readonly children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Both server and first client render use the default, so the markup agrees
  // with the HTML; the effect below corrects it before anything is visible.
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [selected, setSelected] = useState<Locale>(DEFAULT_LOCALE);
  const swapTimer = useRef<number>();

  useEffect(() => {
    const initial = resolveInitialLocale();
    if (initial === DEFAULT_LOCALE) return;
    // No dip on first resolve: nothing has been read yet, so there is nothing
    // to transition away from.
    setSelected(initial);
    setLocaleState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeConfig[locale].htmlLang;
  }, [locale]);

  useEffect(() => () => window.clearTimeout(swapTimer.current), []);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === selected) return;

      setSelected(next);
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
      } catch {
        // Storage unavailable. The choice still applies for this visit.
      }

      window.clearTimeout(swapTimer.current);
      if (prefersReducedMotion) {
        setLocaleState(next);
        return;
      }
      swapTimer.current = window.setTimeout(
        () => setLocaleState(next),
        SWAP_MS,
      );
    },
    [prefersReducedMotion, selected],
  );

  const control = useMemo<LocaleControl>(
    () => ({ locale, selected, setLocale, isSwapping: locale !== selected }),
    [locale, selected, setLocale],
  );

  return (
    <LocaleControlContext.Provider value={control}>
      <TranslationContext.Provider value={dictionaries[locale]}>
        {children}
      </TranslationContext.Provider>
    </LocaleControlContext.Provider>
  );
}

/**
 * The active dictionary. Access is by property — `t.nav.resume` — so an invalid
 * key is a compile error and every level autocompletes.
 */
export function useTranslation(): Dictionary {
  return useContext(TranslationContext);
}

/** Current language and the setter behind the switcher. */
export function useLocale(): LocaleControl {
  const control = useContext(LocaleControlContext);
  if (!control) {
    throw new Error("useLocale must be used inside <LocaleProvider>");
  }
  return control;
}
