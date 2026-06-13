import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { JsonLd, localBusinessSchema } from "@/components/seo/json-ld";
import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhyChoose } from "@/components/home/why-choose";
import { FeaturedHeating } from "@/components/home/featured-heating";
import { Testimonials } from "@/components/home/testimonials";
import { AreasSection } from "@/components/home/areas-section";
import { CtaBand } from "@/components/home/cta-band";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <ServicesGrid />
      <WhyChoose />
      <FeaturedHeating />
      <Testimonials />
      <AreasSection />
      <CtaBand />
    </>
  );
}
