import type { Config } from "tailwindcss";

/**
 * Design tokens for the portfolio.
 *
 * The palette is the one the site already had — black surfaces, white type, and
 * the signature yellow — expressed as named tokens instead of hex literals
 * scattered through inline styles. `accent.ink` is a darkened member of the same
 * yellow family, added because the original gold did not meet AA on white.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // The fixed social rail and email sit in the viewport gutters, so they may
      // only appear once the viewport is wider than the content column plus the
      // room both rails need. Below this they would sit on top of the content.
      screens: {
        rail: "1440px",
      },

      colors: {
        ink: {
          DEFAULT: "#0B0B0B",
          muted: "#5C5C5C",
          subtle: "#8A8A8A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          inverse: "#0B0B0B",
          raised: "#F6F6F3",
        },
        accent: {
          DEFAULT: "#FFF66B",
          // Readable on white (~5.6:1) where the signature yellow is not.
          ink: "#6F6000",
        },
        line: {
          DEFAULT: "#E5E5E0",
          inverse: "rgba(255, 255, 255, 0.16)",
        },
      },

      fontFamily: {
        sans: ["DMSans", "system-ui", "sans-serif"],
      },

      // Fluid scale. Every step interpolates between its 320px and 1440px value,
      // so type is intentional at every width instead of only at breakpoints.
      fontSize: {
        "fluid-xs": ["clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)", "1.5"],
        "fluid-sm": ["clamp(0.875rem, 0.84rem + 0.18vw, 0.9375rem)", "1.6"],
        "fluid-base": ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", "1.65"],
        "fluid-lg": ["clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem)", "1.55"],
        "fluid-xl": ["clamp(1.375rem, 1.2rem + 0.8vw, 2rem)", "1.35"],
        "fluid-2xl": ["clamp(1.75rem, 1.4rem + 1.6vw, 3rem)", "1.2"],
        "fluid-3xl": ["clamp(2.25rem, 1.6rem + 3.2vw, 4.5rem)", "1.05"],
      },

      // One spacing rhythm, referenced by name instead of tuned per element.
      spacing: {
        "section-y": "clamp(4rem, 3rem + 6vw, 9rem)",
        gutter: "clamp(1.25rem, 0.75rem + 2.5vw, 4rem)",
      },

      maxWidth: {
        content: "76rem",
        prose: "68ch",
      },

      borderRadius: {
        card: "1.25rem",
        pill: "999px",
      },

      // The one sanctioned shadow. It is a response to hover, never ambient.
      boxShadow: {
        lift: "0 4px 24px rgba(0, 0, 0, 0.08)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        // Exponential ease-out. Leaves immediately and settles slowly, so an
        // arrival reads as decided rather than as something being eased in.
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },

      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(0.75rem)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },

      // `forwards`, never `both`: `both` applies the keyframe's *start* state
      // before the animation runs, which leaves content at opacity 0 whenever
      // animations are throttled (background tab) or never start.
      animation: {
        "fade-rise": "fade-rise 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in": "fade-in 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
