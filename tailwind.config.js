/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      fontFamily: {
        sans: ["DMSans", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#0F172A",
          foreground: "#FFFFFF",
        },
        muted: "#64748B",
        border: "#E2E8F0",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};
