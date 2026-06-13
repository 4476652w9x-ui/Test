import Link from "next/link";
import Image from "next/image";
import { Check, Snowflake } from "lucide-react";
import { featuredService } from "@/content/services";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

/**
 * Seasonal feature block for Heating & Cooling — given visual weight because
 * Canberra winters drive a lot of demand. Dark forest panel for contrast.
 */
export function FeaturedHeating() {
  const svc = featuredService;
  if (!svc) return null;

  return (
    <section className="container py-20">
      <Reveal className="overflow-hidden rounded-[2rem] bg-forest-900 text-forest-50 shadow-lift">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          {/* Copy */}
          <div className="p-8 sm:p-12 lg:p-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-copper-500/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
              <Snowflake className="size-4" aria-hidden="true" />
              Built for Canberra winters
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Heating &amp; cooling that beats the frost
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-forest-200">
              {svc.intro}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {svc.subServices.map((sub) => (
                <li key={sub.title} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-copper-400" aria-hidden="true" />
                  <span className="text-forest-100">{sub.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="copper" size="lg">
                <Link href={`/services/${svc.slug}`}>Explore heating &amp; cooling</Link>
              </Button>
              <Button asChild variant="white" size="lg">
                <Link href="/contact">Book a pre-winter service</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[280px] lg:h-full lg:min-h-[460px]">
            <Image
              src="/images/heating.svg"
              alt="Gas ducted heating and reverse-cycle system service in a Canberra home (placeholder image)."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
