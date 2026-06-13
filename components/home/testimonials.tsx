"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { Stars } from "@/components/brand/stars";
import { SectionHeading } from "@/components/section";

/** Accessible testimonials carousel: keyboard-operable, pauses on reduced-motion. */
export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState(1);
  const reduce = useReducedMotion();
  const count = testimonials.length;

  const go = React.useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count]
  );

  // Gentle auto-advance, paused for reduced-motion users.
  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => go(index + 1), 7000);
    return () => clearInterval(t);
  }, [index, reduce, go]);

  const t = testimonials[index];

  return (
    <section className="bg-forest-50/60 py-20" aria-labelledby="reviews-heading" aria-roledescription="carousel">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Don't take our word for it"
            title={<span id="reviews-heading">Loved across the capital</span>}
            intro={`Rated ${site.rating}★ by ${site.reviewCount}+ Canberra households and businesses.`}
            className="max-w-xl"
          />
          <Link
            href="/reviews"
            className="text-sm font-semibold text-copper-600 underline-offset-4 hover:underline"
          >
            Read all reviews →
          </Link>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-soft sm:p-12">
          <Quote className="absolute right-8 top-8 size-16 text-forest-100" aria-hidden="true" />
          <div className="min-h-[200px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={reduce ? false : { opacity: 0, x: dir * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -24 }}
                transition={{ duration: 0.35 }}
              >
                <Stars rating={t.rating} size={18} />
                <blockquote className="mt-4 max-w-3xl font-display text-xl font-medium leading-snug text-forest-900 sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink-muted">
                  <span className="font-semibold text-forest-900">{t.name}</span>
                  {" · "}
                  {t.suburb} · {t.service}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5" role="tablist" aria-label="Choose review">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Review ${i + 1} of ${count}`}
                  onClick={() => go(i)}
                  className={
                    "h-2 rounded-full transition-all " +
                    (i === index ? "w-6 bg-copper-500" : "w-2 bg-forest-200 hover:bg-forest-300")
                  }
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous review"
                className="grid size-10 place-items-center rounded-full border border-border text-forest-900 transition-colors hover:bg-forest-50"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next review"
                className="grid size-10 place-items-center rounded-full border border-border text-forest-900 transition-colors hover:bg-forest-50"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
