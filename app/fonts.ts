/**
 * Typography — self-hosted via next/font (zero layout shift, no external requests
 * at runtime, works on Vercel with zero config).
 *
 * Display: Bricolage Grotesque — a confident, slightly characterful modern
 *   grotesk for big, tight headlines. This stands in for "Clash Display" so the
 *   project runs out of the box from Google Fonts. To use the real Clash Display
 *   instead, see BRAND.md → "Swapping in Clash Display" (drop the font files in
 *   /app/fonts and switch this to next/font/local).
 * Body: Inter — clean, highly legible, great at small sizes.
 */
import { Bricolage_Grotesque, Inter } from "next/font/google";

export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
