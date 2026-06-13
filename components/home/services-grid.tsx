import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

/** "Our services" — every category as a card linking to its page. */
export function ServicesGrid() {
  return (
    <section className="container py-20" aria-labelledby="services-heading">
      <SectionHeading
        eyebrow="What we do"
        title={<span id="services-heading">Plumbing &amp; gas, done properly</span>}
        intro="From a 2am burst pipe to a full bathroom renovation, one local team covers the lot — licensed, guaranteed, and tidy."
        className="max-w-2xl"
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-copper-300 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-forest-100 text-forest-700 transition-colors group-hover:bg-copper-100 group-hover:text-copper-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="size-5 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-forest-900">
                  {s.navLabel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.subServices.slice(0, 3).map((sub) => (
                    <li
                      key={sub.title}
                      className="rounded-full bg-forest-50 px-2.5 py-1 text-xs font-medium text-forest-700"
                    >
                      {sub.title}
                    </li>
                  ))}
                </ul>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
