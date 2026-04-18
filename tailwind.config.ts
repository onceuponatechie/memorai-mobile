import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3d7de8",
          blueDark: "#2c5fc7",
          blueSoft: "#e8f0ff",
        },
        ink: {
          navy: "#0f1a3d",
          slate: "#6b7a99",
          muted: "#a6b0c3",
          line: "#eef1f7",
        },
        accent: {
          purple: "#8b7cf6",
          orchid: "#c77dff",
          coral: "#ff6f61",
          butter: "#ffd166",
          mint: "#7bd389",
          sky: "#62c4ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["30px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "800" }],
        h1: ["22px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "700" }],
        h2: ["18px", { lineHeight: "24px", fontWeight: "700" }],
        body: ["15px", { lineHeight: "22px", fontWeight: "500" }],
        small: ["13px", { lineHeight: "18px", fontWeight: "500" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      borderRadius: {
        card: "20px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 8px 24px -12px rgba(15, 26, 61, 0.12)",
        soft: "0 4px 16px -8px rgba(15, 26, 61, 0.08)",
        float: "0 18px 40px -20px rgba(61, 125, 232, 0.45)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-4px) scale(1.02)" },
        },
      },
      animation: {
        floaty: "floaty 3.5s ease-in-out infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        bounceSoft: "bounceSoft 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
