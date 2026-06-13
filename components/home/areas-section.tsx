import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { areas } from "@/content/areas";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

/** Service-areas list with a lightweight "map" panel (placeholder for an embed). */
export function AreasSection() {
  return (
    <section className="container py-20" aria-labelledby="areas-heading">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Map placeholder panel */}
        <div className="relative order-2 overflow-hidden rounded-[2rem] bg-forest-900 p-8 text-forest-50 shadow-lift lg:order-1 lg:aspect-square lg:p-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:linear-gradient(#5e9772_1px,transparent_1px),linear-gradient(90deg,#5e9772_1px,transparent_1px)] [background-size:40px_40px]"
          />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <span className="grid size-12 place-items-center rounded-xl bg-copper-500 text-white">
                <MapPin className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">
                Right across Canberra &amp; the region
              </h3>
              <p className="mt-3 max-w-sm text-forest-200">
                {site.regionLabel}. If you&apos;re in the capital or just over the
                border, we&apos;ve got you covered.
              </p>
            </div>
            {/* TODO(owner): replace with an embedded Google Map of your service area. */}
            <p className="mt-8 text-xs text-forest-300">
              Map embed placeholder — drop in a Google Maps iframe of your
              coverage area here.
            </p>
          </div>
        </div>

        {/* Areas list */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Service areas"
            title={<span id="areas-heading">Your local plumber, wherever you are</span>}
            intro="Individually-served suburbs across the ACT, Queanbeyan and Jerrabomberra."
            className="max-w-xl"
          />
          <Stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((a) => (
              <StaggerItem key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-forest-900 shadow-soft transition-all hover:-translate-y-0.5 hover:border-copper-300 hover:shadow-lift"
                >
                  {a.name}
                  <ArrowRight
                    className="size-4 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-copper-600"
                    aria-hidden="true"
                  />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
