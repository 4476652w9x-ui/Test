import type { Config } from "tailwindcss";

/**
 * Ainslie Plumbing Co. design tokens.
 * ─────────────────────────────────────────────────────────────
 * Palette = a single brand hue (deep eucalypt FOREST green) + a warm
 * COPPER accent, on lots of warm-white space. See BRAND.md for the rationale.
 * The semantic shadcn tokens (--background, --primary, …) live in app/globals.css
 * and map onto these scales so components stay consistent.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Deep eucalypt green — the brand spine.
        forest: {
          50: "#f1f6f2",
          100: "#dcebe0",
          200: "#bbd7c3",
          300: "#8fbb9d",
          400: "#5e9772",
          500: "#3e7a55",
          600: "#2c6142",
          700: "#234e36",
          800: "#1c3e2c",
          900: "#163024",
          950: "#0b1a13",
        },
        // Warm copper / brass accent.
        copper: {
          50: "#fbf4ee",
          100: "#f4e2d2",
          200: "#e8c3a4",
          300: "#db9f70",
          400: "#cd7f47",
          500: "#bd6630",
          600: "#a85327",
          700: "#8a4022",
          800: "#703524",
          900: "#5d2e20",
          950: "#34170f",
        },
        // Warm ink for body text / near-black surfaces.
        ink: {
          DEFAULT: "#11140f",
          soft: "#2a2e26",
          muted: "#5b6157",
        },
        // shadcn semantic tokens (driven by CSS vars in globals.css)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        // Display grotesk for big tight headlines; Inter for body.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17,20,15,0.04), 0 8px 24px -12px rgba(17,20,15,0.18)",
        lift: "0 2px 4px rgba(17,20,15,0.05), 0 24px 48px -20px rgba(17,20,15,0.28)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
