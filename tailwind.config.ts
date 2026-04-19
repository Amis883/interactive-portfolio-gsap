import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
      },
      colors: {
        green: {
          400: "#4ade80",
          500: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
