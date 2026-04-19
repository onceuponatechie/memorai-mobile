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
          blue: "#44A5FF",
          blueDark: "#1f7acf",
          blueSoft: "#e3f1ff",
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
        brand: ["var(--font-fredoka)", "var(--font-plus-jakarta)", "system-ui", "sans-serif"],
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
        card: "0 14px 32px -18px rgba(15, 26, 61, 0.2), 0 2px 4px -2px rgba(15, 26, 61, 0.06)",
        soft: "0 6px 18px -10px rgba(15, 26, 61, 0.14)",
        float: "0 22px 44px -22px rgba(68, 165, 255, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
        pop: "0 30px 60px -24px rgba(15, 26, 61, 0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.4)",
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
