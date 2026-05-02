import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "porto-dark": "#0e0e0e",
        "porto-cream": "#e2d9c8",
        "porto-gold": "#c9a55a",
        "porto-rim": "#1d1d1d",
        "porto-muted": "#9e9080",
      },
      fontFamily: {
        display: ["Cardo", "Georgia", "serif"],
        body: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
