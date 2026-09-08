import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jewellery-black": "#050505",
        "deep-burgundy": "#240609",
        "luxury-gold": "#D4AF37",
        "champagne": "#F5E6C8",
        "rose-gold": "#B76E79",
        "diamond-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "jewellery-gradient": "linear-gradient(135deg, #050505 0%, #240609 50%, #050505 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5E6C8 50%, #B76E79 100%)",
        "burgundy-glow": "radial-gradient(circle at 50% 50%, rgba(36, 6, 9, 0.8) 0%, rgba(5, 5, 5, 0.95) 100%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 4s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "0.2" },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(212, 175, 55, 0.25)",
        "gold-glow-lg": "0 0 60px -10px rgba(212, 175, 55, 0.35)",
        "burgundy-glow": "0 0 50px -5px rgba(74, 16, 21, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
