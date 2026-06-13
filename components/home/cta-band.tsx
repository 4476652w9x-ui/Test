import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { CallButton, BookButton } from "@/components/brand/cta-buttons";

/** Strong final conversion band. Reused at the foot of most pages. */
export function CtaBand({
  title = "Got a plumbing or gas job? Let's sort it.",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container pb-4 pt-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-copper-500 px-8 py-14 text-center shadow-lift sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),radial-gradient(circle_at_80%_60%,#fff_0,transparent_35%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-copper-50">
            {subtitle ??
              `${site.tagline} Same-day service and a lifetime workmanship guarantee, every time.`}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton variant="white" size="lg" />
            <CallButton variant="forest" size="lg" />
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper-50">
            <Phone className="size-4" aria-hidden="true" />
            {site.emergencyNote}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
