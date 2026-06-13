"use client";

import Image from "next/image";
import { Phone, ShieldCheck, Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { site, yearsInBusiness } from "@/content/site";
import { Stars } from "@/components/brand/stars";
import { CallButton, BookButton } from "@/components/brand/cta-buttons";

/**
 * Hero — asymmetric split: confident headline + dual CTA on the left, a tall
 * image panel on the right. Subtle staggered entrance; respects reduced motion
 * (Reveal/motion variants degrade to instant).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* warm gradient wash behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_15%_0%,#dcebe0_0%,transparent_55%),radial-gradient(60%_50%_at_100%_10%,#f4e2d2_0%,transparent_50%)]"
      />
      <div className="container grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/15 bg-white/70 px-3 py-1.5 text-sm shadow-soft backdrop-blur"
          >
            <Stars rating={site.rating} size={15} />
            <span className="font-medium text-forest-900">
              {site.rating}★ · {site.reviewCount}+ Google reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-forest-950 sm:text-6xl"
          >
            Canberra&apos;s plumbers who
            <span className="text-copper-600"> turn up, </span>
            and clean up.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {site.tagline} Family-owned, fully licensed plumbers &amp; gasfitters
            serving {site.regionLabel.replace(" / ACT", "")} for{" "}
            {yearsInBusiness}+ years — with same-day service and a lifetime
            workmanship guarantee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.19 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <BookButton size="lg" />
            <CallButton variant="outline" size="lg" />
          </motion.div>

          {/* Trust strip */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4"
          >
            <TrustItem icon={Clock3} label="Same-day service" />
            <TrustItem icon={ShieldCheck} label="Lifetime guarantee" />
            <TrustItem icon={Phone} label="24/7 emergency" />
            <TrustItem icon={MapPin} label="Local & family-owned" />
          </motion.ul>
        </div>

        {/* Image panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-forest-900/10">
            <Image
              src="/images/hero.svg"
              alt="A licensed Ainslie Plumbing Co. plumber at work in a Canberra home (placeholder image)."
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* floating guarantee card */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-lift sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-forest-100 text-forest-700">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-forest-900">
                  Lifetime workmanship guarantee
                </p>
                <p className="text-xs text-ink-muted">
                  Fully licensed · Since {site.foundedYear}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({
  icon: Icon,
  label,
}: {
  icon: typeof Phone;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2 font-medium text-forest-900">
      <Icon className="size-4 shrink-0 text-copper-600" aria-hidden="true" />
      {label}
    </li>
  );
}
