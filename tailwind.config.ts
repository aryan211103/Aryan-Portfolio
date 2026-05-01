import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        ink: "#e8e8e8",
        muted: "#888888",
        dim: "#666666",
        line: "#1f1f1f",
        accent: "#4d9eff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider: "0.15em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
