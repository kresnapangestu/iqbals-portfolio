import type { AppProps } from "next/app";
import Head from "next/head";

import { useRouteViewTransition } from "@/hooks/useRouteViewTransition";
import { LocaleProvider } from "@/i18n/LocaleProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  // Navigation between the landing page and a project page runs inside a View
  // Transition, so the thumbnail that was clicked carries into the detail page.
  useRouteViewTransition();

  return (
    // Mounted above the router, so the chosen language survives navigation
    // between the landing page and a project page without a re-read.
    <LocaleProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B0B0B" />
      </Head>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
