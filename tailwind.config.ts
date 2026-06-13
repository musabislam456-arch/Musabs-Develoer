import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFC",
        "canvas-alt": "#F1EFFB",
        surface: "#FFFFFF",
        ink: "#14121F",
        "ink-soft": "#6B6680",
        "ink-faint": "#A8A3BE",
        line: "rgba(20, 18, 31, 0.08)",
        primary: {
          DEFAULT: "#5B4DF5",
          soft: "#8A7CFF",
          deep: "#3F2FE0",
        },
        accent: {
          DEFAULT: "#0FD3D9",
          soft: "#6FF0F2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(20,18,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,18,31,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(91,77,245,0.16) 0%, rgba(15,211,217,0.08) 45%, rgba(250,250,252,0) 100%)",
        "noise-gradient":
          "linear-gradient(135deg, #5B4DF5 0%, #8A7CFF 50%, #0FD3D9 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(20, 18, 31, 0.06)",
        "glass-lg": "0 20px 60px rgba(91, 77, 245, 0.12)",
        glow: "0 0 40px rgba(91, 77, 245, 0.25)",
        "glow-accent": "0 0 40px rgba(15, 211, 217, 0.25)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        blink: "blink 1s step-end infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
