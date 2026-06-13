/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SERVICES CONTENT MODEL
 * ───────────────────────────────────────────────────────────────────────────
 *  Each top-level service generates a static page at /services/[slug] and a
 *  card on the home page. Add, reorder or reword freely — the UI is data-driven.
 *  `icon` is a lucide-react icon name (see components/icon.tsx for the map).
 */

import type { LucideIcon } from "lucide-react";
import {
  Siren,
  Wrench,
  Waves,
  Flame,
  ThermometerSun,
  Droplets,
  Hammer,
} from "lucide-react";

export type SubService = {
  title: string;
  blurb: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Short label for nav/cards. */
  navLabel: string;
  icon: LucideIcon;
  /** One-line summary for cards & meta description. */
  summary: string;
  /** Intro paragraph for the service page H1 section. */
  intro: string;
  subServices: SubService[];
  whatToExpect: string[];
  faqs: ServiceFaq[];
  /** Pin to the primary nav bar (in addition to the Services dropdown). */
  pinned?: boolean;
  /** Feature prominently on the home page (seasonal block). */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "emergency",
    title: "Emergency & Same-Day Plumbing",
    navLabel: "Emergency & Same-Day",
    icon: Siren,
    pinned: true,
    summary:
      "24/7 rapid response for burst pipes, gas leaks and no-hot-water emergencies across Canberra.",
    intro:
      "When water's where it shouldn't be, every minute counts. Our Canberra " +
      "emergency plumbers answer the phone day and night, arrive fast in fully " +
      "stocked vans, and make the problem safe before it becomes a disaster.",
    subServices: [
      {
        title: "24/7 emergency response",
        blurb:
          "A real local plumber on the phone any hour — not a call centre. We prioritise true emergencies and give you an honest ETA.",
      },
      {
        title: "Burst & leaking pipes",
        blurb:
          "We isolate the leak, stop the damage and repair or replace the failed section — then help you dry out and prevent a repeat.",
      },
      {
        title: "Gas make-safe",
        blurb:
          "Smell gas? Licensed gasfitters isolate the supply, find the source and make your home safe before any repair.",
      },
    ],
    whatToExpect: [
      "Phone triage so you can act safely while we're on the way",
      "Up-front pricing confirmed before we start work",
      "Make-safe first, full repair options explained second",
      "Tidy site and a follow-up to make sure it's truly fixed",
    ],
    faqs: [
      {
        q: "How quickly can you get to me in an emergency?",
        a: "For genuine emergencies across Canberra and Queanbeyan we aim to be on site the same day, and usually within a couple of hours. We'll give you a realistic ETA when you call and talk you through making things safe in the meantime.",
      },
      {
        q: "What should I do while I wait for a burst pipe?",
        a: "Turn off your water at the main meter (usually near the front boundary), switch off any electric hot water system, and move valuables away from the water. We'll talk you through it on the phone.",
      },
      {
        q: "Do you charge more for after-hours call-outs?",
        a: "After-hours and weekend emergency work carries a call-out fee, which we'll always confirm with you up-front. No surprises on the invoice — ever.",
      },
    ],
  },
  {
    slug: "general-plumbing",
    title: "General Plumbing",
    navLabel: "General Plumbing",
    icon: Wrench,
    summary:
      "Taps, toilets, leak detection and backflow testing — the everyday plumbing that keeps a home running.",
    intro:
      "The bread and butter of a well-run home. From a dripping tap to a hidden " +
      "leak pushing up your water bill, we diagnose properly the first time and " +
      "fix it to last.",
    subServices: [
      {
        title: "Taps & toilets",
        blurb:
          "Repairs and replacements for leaking taps, running toilets, mixers and cisterns — water-efficient options that cut your bills.",
      },
      {
        title: "Leak detection & burst pipes",
        blurb:
          "Non-invasive leak detection to pinpoint hidden leaks before they wreck floors and walls, with clean, durable repairs.",
      },
      {
        title: "Backflow prevention & testing",
        blurb:
          "Installation, annual testing and certification of backflow devices to keep your drinking water safe and you compliant.",
      },
    ],
    whatToExpect: [
      "A proper diagnosis, not a guess — we find the real cause",
      "Quality fittings that meet Australian Standards",
      "Water-efficiency advice to lower your bills",
      "Compliance certificates where required",
    ],
    faqs: [
      {
        q: "Why is my water bill suddenly high?",
        a: "A hidden leak — a slow toilet, an underground pipe or a failing seal — is the usual culprit. Our leak detection finds it without tearing your home apart, and we'll show you exactly what we found.",
      },
      {
        q: "How often does backflow need testing?",
        a: "Testable backflow prevention devices must be tested annually by a licensed plumber and the results lodged with Icon Water. We handle the test, the certificate and the lodgement for you.",
      },
    ],
  },
  {
    slug: "drains-stormwater",
    title: "Drains & Stormwater",
    navLabel: "Drains & Stormwater",
    icon: Waves,
    summary:
      "Blocked drains, CCTV diagnosis, no-dig pipe relining and stormwater drainage design.",
    intro:
      "Blocked, broken or backing up? We clear it fast and, just as importantly, " +
      "find out why it happened — so you're not calling us back next month.",
    subServices: [
      {
        title: "Blocked drains",
        blurb:
          "CCTV camera inspection, high-pressure water jetting and electric eel to clear blockages and show you the cause on screen.",
      },
      {
        title: "Sewer & stormwater repairs",
        blurb:
          "Excavation and repair of collapsed, cracked or root-invaded sewer and stormwater lines, done to code.",
      },
      {
        title: "Pipe relining (no-dig)",
        blurb:
          "Rehabilitate failing pipes from the inside with no-dig relining — no torn-up gardens, driveways or slabs.",
      },
      {
        title: "Flood prevention & drainage design",
        blurb:
          "Surface and sub-surface drainage solutions to keep stormwater away from your home during Canberra downpours.",
      },
    ],
    whatToExpect: [
      "CCTV footage so you can see the problem yourself",
      "Clear options: clear-and-go vs. permanent repair",
      "No-dig relining wherever it's the better long-term fix",
      "Drainage advice to stop it happening again",
    ],
    faqs: [
      {
        q: "What's causing my drain to keep blocking?",
        a: "Tree roots, collapsed pipes, grease build-up or simply ageing clay pipes are the common offenders in Canberra's older suburbs. Our CCTV inspection shows the exact cause so we can recommend a permanent fix, not just a temporary clear.",
      },
      {
        q: "What is pipe relining and is it worth it?",
        a: "Relining creates a new pipe inside your old one using a resin liner — no excavation, no destroyed landscaping, and a result that typically lasts 50+ years. For most damaged pipes it's faster, cleaner and cheaper overall than dig-and-replace.",
      },
    ],
  },
  {
    slug: "hot-water",
    title: "Hot Water Systems",
    navLabel: "Hot Water",
    icon: Droplets,
    summary:
      "Same-day hot water repairs & replacement — heat pump, solar, gas and electric systems.",
    intro:
      "No hot water is a same-day problem, and we treat it like one. We repair " +
      "where it makes sense, replace fast when it doesn't, and help you choose a " +
      "system that's cheaper to run.",
    subServices: [
      {
        title: "Repairs & same-day replacement",
        blurb:
          "Most common hot water systems back up and running the same day, with major brands carried on the van.",
      },
      {
        title: "Heat pump systems",
        blurb:
          "High-efficiency heat pump hot water — including PV solar connection — to slash your energy bills and emissions.",
      },
      {
        title: "Gas, electric & solar",
        blurb:
          "Supply and install of continuous-flow gas, electric and solar hot water, sized correctly for your household.",
      },
    ],
    whatToExpect: [
      "Honest repair-vs-replace advice — no upsell",
      "Same-day swap-overs for common failures",
      "Guidance on ACT & federal rebates for efficient systems",
      "Correctly sized so you never run cold",
    ],
    faqs: [
      {
        q: "Should I repair or replace my hot water system?",
        a: "If your system is under ~8 years old and the fault is minor (element, thermostat, valve), repair is usually the call. Older tanks that are leaking or rusting through are a replace. We'll give you the honest answer and the running-cost difference.",
      },
      {
        q: "Are heat pump hot water systems worth it in Canberra?",
        a: "Yes — modern heat pumps perform well even through Canberra winters and use roughly a third of the energy of a standard electric tank. Paired with solar, they're one of the cheapest ways to heat water, and there are rebates that bring the up-front cost right down.",
      },
    ],
  },
  {
    slug: "heating-cooling",
    title: "Heating & Cooling",
    navLabel: "Heating & Cooling",
    icon: ThermometerSun,
    featured: true,
    summary:
      "Built for Canberra winters: gas ducted heating, reverse-cycle changeovers and evaporative cooling.",
    intro:
      "Canberra's climate is not gentle. We service, repair and install heating " +
      "and cooling that's matched to our frosty winters and dry summers — and " +
      "we'll help you make the switch to cheaper, cleaner electric where it stacks up.",
    subServices: [
      {
        title: "Gas ducted heating",
        blurb:
          "Service, repair and installation of gas ducted heating — including safety checks and carbon-monoxide testing.",
      },
      {
        title: "Gas → reverse-cycle changeover",
        blurb:
          "Switch from gas to efficient reverse-cycle, including safe gas disconnection and abolishment.",
      },
      {
        title: "Evaporative cooling",
        blurb:
          "Service, repair and replacement of ducted evaporative cooling — ideal for Canberra's dry summer heat.",
      },
    ],
    whatToExpect: [
      "Pre-winter servicing and carbon-monoxide safety testing",
      "Clear comparison of gas vs. reverse-cycle running costs",
      "Safe, certified gas disconnection on changeovers",
      "Systems sized for the whole home, not just one room",
    ],
    faqs: [
      {
        q: "Should I switch from gas ducted heating to reverse-cycle?",
        a: "For most Canberra homes, modern reverse-cycle is now cheaper to run and far lower in emissions than gas ducted heating, with rebates available to help with the switch. We'll assess your home and give you a straight comparison before you spend a cent.",
      },
      {
        q: "Why does my gas heater need a carbon monoxide test?",
        a: "Ageing gas heaters can develop cracked heat exchangers that leak carbon monoxide — a serious safety risk. Annual servicing with a CO test is the only reliable way to catch it. It's a small cost for genuine peace of mind.",
      },
      {
        q: "When should I service my heating before winter?",
        a: "Book in during autumn (March–May). It avoids the first-cold-snap rush, catches any faults before you rely on the system, and means you're not left cold waiting for parts in July.",
      },
    ],
  },
  {
    slug: "gasfitting",
    title: "Gasfitting",
    navLabel: "Gasfitting",
    icon: Flame,
    summary:
      "Fully licensed gasfitters: leak detection, make-safe, cooktop & appliance connection, commercial.",
    intro:
      "Gas is unforgiving of shortcuts. Our fully licensed gasfitters do it by " +
      "the book — leak detection, appliance connections and commercial work, all " +
      "certified and compliant.",
    subServices: [
      {
        title: "Gas leak detection & make-safe",
        blurb:
          "Fast, methodical leak detection and immediate make-safe to protect your household.",
      },
      {
        title: "Cooktops & appliance connection",
        blurb:
          "Compliant connection of cooktops, ovens, heaters and outdoor BBQ points, with certification.",
      },
      {
        title: "Commercial gasfitting",
        blurb:
          "Commercial kitchen and plant gasfitting for Canberra businesses, fully certified to AS/NZS 5601.",
      },
    ],
    whatToExpect: [
      "Licensed gasfitters and a compliance certificate every time",
      "Safety-first: make-safe before anything else",
      "Tidy, code-compliant appliance connections",
      "Documentation you can hand to an insurer or landlord",
    ],
    faqs: [
      {
        q: "I can smell gas — what should I do right now?",
        a: "Don't use switches, flames or your phone indoors. Turn off the gas at the meter if it's safe to reach, open doors and windows, get everyone outside, and call us (or 000 if it's serious) from outside. We'll make it safe.",
      },
      {
        q: "Do I legally need a licensed gasfitter?",
        a: "Yes. In the ACT all gas work must be carried out by a licensed gasfitter and certified. We provide the compliance certificate as standard, which you'll need for insurance and resale.",
      },
    ],
  },
  {
    slug: "renovations-roofing",
    title: "Renovations & Roofing",
    navLabel: "Renovations & Roofing",
    icon: Hammer,
    summary:
      "Bathroom, kitchen & laundry renovations, rainwater tanks & pumps, gutters and roof repairs.",
    intro:
      "The plumbing behind a great renovation — and the roof plumbing that keeps " +
      "the weather out. We work cleanly, hit our dates, and coordinate with your " +
      "other trades.",
    subServices: [
      {
        title: "Bathroom, kitchen & laundry renovations",
        blurb:
          "Full rough-in and fit-off for renovations, coordinated with your builder, tiler and electrician.",
      },
      {
        title: "Rainwater tanks & pumps",
        blurb:
          "Supply, install and connect rainwater tanks and pump systems for garden, toilet and laundry use.",
      },
      {
        title: "Gutters & roof repairs",
        blurb:
          "Roof plumbing, gutter and downpipe repair and replacement to keep Canberra's weather where it belongs.",
      },
    ],
    whatToExpect: [
      "Clear scope and dates, coordinated with your other trades",
      "Clean rough-in that passes inspection first time",
      "Quality tapware and fixtures, installed to last",
      "A tidy site at the end of every day",
    ],
    faqs: [
      {
        q: "Do you work with my builder or designer?",
        a: "Absolutely. We're used to slotting into a renovation alongside builders, tilers, cabinetmakers and electricians, hitting the rough-in and fit-off dates so your project stays on track.",
      },
      {
        q: "Can you install a rainwater tank for garden and toilet use?",
        a: "Yes. We'll size the tank and pump to your roof catchment and usage, and plumb it compliantly to garden taps, toilets and the laundry where you want it.",
      },
    ],
  },
];

/** Lookup helpers. */
export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const pinnedServices = services.filter((s) => s.pinned);
export const featuredService = services.find((s) => s.featured);
