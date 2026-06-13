/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ───────────────────────────────────────────────────────────────────────────
 *  This is the first file the owner will want to edit. Phone, ABN, licence and
 *  hours flow from here into the header, footer, click-to-call links and the
 *  JSON-LD structured data. Everything marked  ⚠ PLACEHOLDER  needs the
 *  business's real details before go-live.
 */

export const site = {
  name: "Ainslie Plumbing Co.",
  legalName: "Ainslie Plumbing Co. Pty Ltd", // ⚠ PLACEHOLDER — confirm legal entity
  shortName: "Ainslie Plumbing",
  tagline: "On time. Cleaned up. Guaranteed.",
  description:
    "Family-owned Canberra plumbers & licensed gasfitters. Same-day service, " +
    "lifetime workmanship guarantee, and the kind of clean, on-time work the " +
    "capital's homes deserve.",

  // Contact ──────────────────────────────────────────────────────────────────
  phone: "0411 111 111", // ⚠ PLACEHOLDER
  phoneHref: "tel:+61411111111", // ⚠ PLACEHOLDER — keep in sync with phone
  emergencyPhone: "0411 111 111", // ⚠ PLACEHOLDER — 24/7 line
  emergencyPhoneHref: "tel:+61411111111",
  email: "hello@ainslieplumbingco.com.au", // ⚠ PLACEHOLDER

  // Web ───────────────────────────────────────────────────────────────────────
  domain: "ainslieplumbingco.com.au",
  url: "https://ainslieplumbingco.com.au",

  // Credentials & trust ───────────────────────────────────────────────────────
  abn: "00 000 000 000", // ⚠ PLACEHOLDER
  licence: "ACT Plumbers & Gasfitters Licence #00000", // ⚠ PLACEHOLDER
  foundedYear: 2009, // ⚠ PLACEHOLDER — drives "X+ years in Canberra"
  rating: 4.8,
  reviewCount: 312, // ⚠ PLACEHOLDER — keep in sync with Google
  googleReviewsUrl: "https://g.page/r/REPLACE_ME", // ⚠ PLACEHOLDER

  // Region ────────────────────────────────────────────────────────────────────
  regionLabel: "Canberra / ACT, Queanbeyan & Jerrabomberra",
  address: {
    // ⚠ PLACEHOLDER — used in LocalBusiness schema. Use the real trading address.
    street: "PO Box 0000",
    suburb: "Ainslie",
    region: "ACT",
    postcode: "2602",
    country: "AU",
  },
  geo: { lat: -35.2618, lng: 149.1448 }, // ⚠ PLACEHOLDER — Ainslie approx.

  // Opening hours (display + schema) ──────────────────────────────────────────
  hours: [
    { days: "Mon – Fri", time: "7:00am – 5:00pm" },
    { days: "Saturday", time: "8:00am – 2:00pm" },
    { days: "Sunday", time: "Emergency call-outs only" },
  ],
  emergencyNote: "24/7 emergency response, 365 days a year.",

  // Social (optional) ─────────────────────────────────────────────────────────
  social: {
    facebook: "", // ⚠ PLACEHOLDER
    instagram: "", // ⚠ PLACEHOLDER
  },
} as const;

/** Convenience: "15+ years" derived from foundedYear. */
export const yearsInBusiness = new Date().getFullYear() - site.foundedYear;
