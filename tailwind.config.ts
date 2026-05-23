import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(30 20% 90%)",
        foreground: "#3d3430",
        background: "#faf9f6",
        "muted-foreground": "#6b6560",
        cream: "#faf9f6",
        ivory: "#fdfbf7",
        forest: {
          DEFAULT: "#1a3c34",
          light: "#2d4f4f",
        },
        gold: {
          DEFAULT: "#c5a059",
          light: "#d4b06a",
        },
        espresso: "#4b3f39",
        navy: "#003380",
        lavender: "#e0d7f7",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        vibes: ["var(--font-vibes)", "cursive"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        arch: "0 16px 40px rgba(61, 52, 48, 0.12)",
        soft: "0 8px 24px rgba(26, 60, 52, 0.08)",
      },
      maxWidth: {
        invite: "430px",
      },
    },
  },
  plugins: [],
};

export default config;
