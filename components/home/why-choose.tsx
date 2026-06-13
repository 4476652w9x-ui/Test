import { ShieldCheck, BadgeCheck, Home, Zap, HeartHandshake, Clock3 } from "lucide-react";
import { site, yearsInBusiness } from "@/content/site";
import { SectionHeading } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Lifetime workmanship guarantee",
    body: "We stand behind every job. If our workmanship ever fails, we come back and make it right — for as long as you own the home.",
  },
  {
    icon: BadgeCheck,
    title: "Fully licensed plumbers & gasfitters",
    body: "Every job is done by licensed tradespeople and certified to Australian Standards — with the paperwork to prove it.",
  },
  {
    icon: Clock3,
    title: "Same-day service",
    body: "Call before midday and we'll do our best to be there the same day. Real ETAs, no all-day waiting windows.",
  },
  {
    icon: Home,
    title: "Local & family-owned",
    body: `Canberra born and run for ${yearsInBusiness}+ years. We know the suburbs, the soils and the quirks of the capital's homes.`,
  },
  {
    icon: HeartHandshake,
    title: "Honest, up-front pricing",
    body: "You approve the price before we start. No nasty surprises on the invoice, and a genuine seniors & pensioner discount.",
  },
  {
    icon: Zap,
    title: "Clean, tidy, on time",
    body: "We protect your floors, clean up after ourselves and leave your home better than we found it. Every visit.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-forest-50/60 py-20" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why Canberra chooses us"
          title={
            <span id="why-heading">
              The trades experience you wish was normal
            </span>
          }
          intro={`${site.rating}★ across ${site.reviewCount}+ reviews isn't luck — it's the result of turning up, doing it right, and cleaning up.`}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-soft ring-1 ring-forest-900/5">
                  <span className="grid size-12 place-items-center rounded-xl bg-copper-100 text-copper-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-forest-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {r.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
