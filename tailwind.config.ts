import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        hero: "clamp(3rem, 8vw, 7rem)",
        display: "clamp(2rem, 5vw, 4rem)",
      },
    },
  },
  plugins: [],
};

export default config;
