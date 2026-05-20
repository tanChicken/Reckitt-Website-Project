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
      colors: {
        brand: {
          pink: "#f20683",
          pinkDark: "#b80461",
          pinkSoft: "#fff0f8",
          navy: "#07133a",
          ink: "#172033"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(242, 6, 131, 0.14)",
        card: "0 14px 35px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
