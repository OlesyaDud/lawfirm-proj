/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This is critical!
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#f9fafb",
        "muted-foreground": "#a1a1aa",
        "law-gold": "#eab308",
      },
      fontFamily: {
        serif: ["Georgia", ...fontFamily.serif],
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(90deg, #facc15, #eab308)",
      },
      boxShadow: {
        "gold-glow": "0 0 10px 2px rgba(234, 179, 8, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
