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
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Vitality Core — primary palette
        "reckitt-pink":            "#E80044",
        "deep-navy":               "#001E50",
        "energy-orange":           "#FF593D",
        "surface-gray":            "#F8F9FB",
        "border-subtle":           "#E7E9EF",
        // Vitality Core — surface tiers
        "surface-container-lowest":"#ffffff",
        "surface-container-low":   "#f0f3ff",
        "surface-container":       "#e7eefe",
        "surface-container-high":  "#e2e8f8",
        "surface-container-highest":"#dce2f3",
        // Vitality Core — text & state
        "on-surface":              "#151c27",
        "on-surface-variant":      "#5d3f40",
        "secondary":               "#475d92",
        "secondary-container":     "#adc3fe",
        "secondary-fixed-dim":     "#b0c6ff",
        "primary":                 "#ba0035",
        "primary-container":       "#e80044",
        "primary-fixed":           "#ffdada",
        "primary-fixed-dim":       "#ffb3b6",
        "inverse-surface":         "#2a313d",
        "inverse-on-surface":      "#ebf1ff",
        "inverse-primary":         "#ffb3b6",
        "surface-variant":         "#dce2f3",
        "surface-dim":             "#d3daea",
        "outline-variant":         "#e7bcbd",
        "error":                   "#ba1a1a",
        "error-container":         "#ffdad6",
        "on-error-container":      "#93000a",
        "tertiary-container":      "#d63c23",
        "on-tertiary-container":   "#fffcff",
        "on-primary":              "#ffffff",
        "on-secondary":            "#ffffff",
        // Brand aliases mapped to Vitality Core values
        brand: {
          pink:     "#E80044",
          pinkDark: "#ba0035",
          pinkSoft: "#ffdada",
          pinkMid:  "#ffb3b6",
          navy:     "#001E50",
          ink:      "#151c27",
        },
      },
      borderRadius: {
        sm:      "0.25rem",   // 4px
        DEFAULT: "0.5rem",    // 8px
        md:      "0.75rem",   // 12px
        lg:      "0.5rem",    // 8px  — buttons / chips
        xl:      "1rem",      // 16px — containers / cards
        "2xl":   "1rem",
        "3xl":   "1rem",
        "4xl":   "1rem",
        full:    "9999px",
      },
      boxShadow: {
        // Vitality Core: ultra-soft deep-navy tints only
        card:        "0 1px 2px rgba(0,30,80,0.04), 0 4px 8px rgba(0,30,80,0.04)",
        "card-hover":"0 8px 24px -4px rgba(0,30,80,0.10)",
        cardHover:   "0 8px 24px -4px rgba(0,30,80,0.10)", // backwards compat alias
        soft:        "0 8px 24px rgba(0,30,80,0.06)",
        pink:        "0 4px 14px rgba(232,0,68,0.22)",
        pinkLg:      "0 8px 24px rgba(232,0,68,0.30)",
        nav:         "0 1px 0 #E7E9EF",
      },
      keyframes: {
        fadeSlideUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideDown: {
          "0%":   { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.35s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":       "fadeIn 0.25s ease both",
        "scale-in":      "scaleIn 0.3s cubic-bezier(0.22,1,0.36,1) both",
        "slide-down":    "slideDown 0.25s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22,1,0.36,1)",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
