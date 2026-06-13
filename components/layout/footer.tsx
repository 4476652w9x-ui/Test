import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { site, yearsInBusiness } from "@/content/site";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { Logo } from "@/components/brand/logo";
import { Stars } from "@/components/brand/stars";

export function Footer() {
  return (
    <footer className="mt-24 bg-forest-950 text-forest-100">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand + contact */}
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest-200">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-2">
            <Stars rating={site.rating} />
            <span className="text-sm text-forest-200">
              {site.rating}★ from {site.reviewCount}+ Google reviews
            </span>
          </div>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-copper-300">
              <Phone className="size-4 text-copper-400" aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-copper-300">
              <Mail className="size-4 text-copper-400" aria-hidden="true" />
              {site.email}
            </a>
            <p className="flex items-center gap-2.5 text-forest-200">
              <MapPin className="size-4 text-copper-400" aria-hidden="true" />
              {site.regionLabel}
            </p>
          </div>
        </div>

        {/* Services */}
        <nav aria-label="Footer services" className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-300">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-forest-200 hover:text-copper-300">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Areas */}
        <nav aria-label="Footer service areas" className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-300">
            Service Areas
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="text-forest-200 hover:text-copper-300">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div className="lg:col-span-2">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-forest-300">
            <Clock className="size-4" aria-hidden="true" /> Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-forest-200">
            {site.hours.map((h) => (
              <li key={h.days} className="flex flex-col">
                <span className="font-medium text-forest-100">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg bg-copper-500/15 px-3 py-2 text-xs text-copper-200">
            {site.emergencyNote}
          </p>
        </div>
      </div>

      {/* Trust / legal strip */}
      <div className="border-t border-forest-800/60">
        <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs text-forest-300 sm:flex-row sm:items-center">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-copper-400" aria-hidden="true" />
              {site.licence}
            </span>
            <span>ABN {site.abn}</span>
            <span>Serving Canberra since {site.foundedYear} · {yearsInBusiness}+ years</span>
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
