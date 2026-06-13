/**
 * ───────────────────────────────────────────────────────────────────────────
 *  TESTIMONIALS
 * ───────────────────────────────────────────────────────────────────────────
 *  ⚠ PLACEHOLDER COPY. Replace with the business's real, verifiable Google
 *  reviews before launch — including in the AggregateRating schema (content/site.ts).
 *  Do not publish review counts/ratings you can't substantiate.
 */

export type Testimonial = {
  quote: string;
  name: string;
  suburb: string;
  service: string;
  rating: 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Burst pipe at 9pm on a Sunday and they actually answered. On site within the hour, made it safe, and back the next morning to finish the job properly. Couldn't fault them.",
    name: "Rebecca M.",
    suburb: "Ainslie",
    service: "Emergency plumbing",
    rating: 5,
  },
  {
    quote:
      "Switched our old gas ducted heating over to reverse-cycle. They walked us through the running costs honestly, did the gas disconnection safely, and left the place spotless.",
    name: "David & Sue T.",
    suburb: "Curtin",
    service: "Heating changeover",
    rating: 5,
  },
  {
    quote:
      "No hot water on the coldest week of the year. New heat pump system installed the same day and they sorted the rebate paperwork too. Genuinely lovely to deal with.",
    name: "Priya K.",
    suburb: "Bonner",
    service: "Hot water",
    rating: 5,
  },
  {
    quote:
      "Used the CCTV camera to show me exactly why the drain kept blocking — tree roots in an old clay pipe — then relined it without digging up the garden. Worth every cent.",
    name: "Tom H.",
    suburb: "Hawker",
    service: "Drains & relining",
    rating: 5,
  },
  {
    quote:
      "Honest pricing, turned up when they said they would, and the pensioner discount was a genuine help. This is how a local trade should be run.",
    name: "Margaret W.",
    suburb: "Mawson",
    service: "General plumbing",
    rating: 5,
  },
  {
    quote:
      "Full bathroom renovation rough-in and fit-off. Coordinated perfectly with our builder and tiler, hit every date, quality tapware. Highly recommend.",
    name: "James L.",
    suburb: "Kingston",
    service: "Renovation",
    rating: 5,
  },
];
