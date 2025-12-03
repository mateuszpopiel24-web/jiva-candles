import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        jiva: {
          beige: "#F9F6F2",
          brown: "#3C2A1E",
          gold: "#D2A85E",
          cream: "#FDF9F5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
