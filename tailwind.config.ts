import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          gold: "#D4AF37",
          goldLight: "#F6E79D",
          goldDark: "#9A7B1C",
          ivory: "#FBF8EE",
          parchment: "#F4ECD8",
          maroon: "#6B1426",
          maroonDark: "#480815",
          emerald: "#1B4D3E",
          emeraldDark: "#0E2F25",
          ink: "#2C2214",
          muted: "#786951",
        },
      },
      fontFamily: {
        sinhala: ["var(--font-sinhala)", "Abhaya Libre", "Noto Serif Sinhala", "serif"],
        sinhalaHeading: ["var(--font-sinhala-heading)", "Yaldevi", "Abhaya Libre", "serif"],
        serif: ["var(--font-serif)", "Cinzel", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        'royal-gold': '0 10px 30px -10px rgba(212, 175, 55, 0.45)',
        'royal-glow': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'card-rich': '0 20px 45px -15px rgba(44, 34, 20, 0.15)',
        'scroll-inner': 'inset 0 0 30px rgba(154, 123, 28, 0.15)',
      },
      keyframes: {
        unrollScroll: {
          '0%': { transform: 'scaleX(0.2) scaleY(0.95)', opacity: '0' },
          '100%': { transform: 'scaleX(1) scaleY(1)', opacity: '1' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmerGold: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'unroll': 'unrollScroll 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'gentleFloat 4s ease-in-out infinite',
        'shimmer': 'shimmerGold 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
