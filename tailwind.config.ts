import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        muted: "#62666f",
        line: "#e5e7eb",
        surface: "#f7f7f8",
        mist: "#f1f5f9",
        accent: {
          blue: "#2563eb",
          green: "#12815f",
          coral: "#c2410c",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)",
        hairline: "0 1px 0 rgba(255, 255, 255, 0.75) inset",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sheen: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(110%)" },
        },
      },
      animation: {
        rise: "rise 720ms ease both",
        sheen: "sheen 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
