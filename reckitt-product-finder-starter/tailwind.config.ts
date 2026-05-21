import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          pink: "#f20683",
          pinkDark: "#b80461",
          pinkSoft: "#fff0f8",
          pinkMid: "#fce4f3",
          navy: "#07133a",
          ink: "#172033",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(242, 6, 131, 0.16)",
        card: "0 4px 24px rgba(15, 23, 42, 0.07), 0 1px 4px rgba(15, 23, 42, 0.04)",
        cardHover: "0 12px 40px rgba(15, 23, 42, 0.12), 0 2px 8px rgba(15, 23, 42, 0.06)",
        pink: "0 8px 30px rgba(242, 6, 131, 0.25)",
        nav: "0 1px 0 rgba(15, 23, 42, 0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.25s ease both",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
