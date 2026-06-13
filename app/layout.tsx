import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontDisplay, fontInter } from "./fonts";
import { site } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "plumber Canberra",
    "gasfitter Canberra",
    "emergency plumber Canberra",
    "hot water Canberra",
    "blocked drains Canberra",
    "gas ducted heating Canberra",
  ],
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1c3e2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={cn(fontDisplay.variable, fontInter.variable)}>
      <body className="min-h-dvh font-sans">
        <Header />
        {/* pb to clear the mobile sticky bar */}
        <main id="main" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
