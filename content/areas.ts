/**
 * ───────────────────────────────────────────────────────────────────────────
 *  SERVICE AREAS CONTENT MODEL
 * ───────────────────────────────────────────────────────────────────────────
 *  Each area generates a static, individually-titled page at
 *  /service-areas/[slug] for local SEO ("Plumber in Belconnen"). The `blurb`
 *  and `landmarks` make each page genuinely local rather than boilerplate.
 */

export type Area = {
  slug: string;
  name: string;
  /** Localised intro referencing the district. */
  blurb: string;
  /** A few suburbs/landmarks to ground the copy locally. */
  landmarks: string[];
};

export const areas: Area[] = [
  {
    slug: "belconnen",
    name: "Belconnen",
    blurb:
      "From the lakeside units to the established homes of Aranda and Hawker, " +
      "Belconnen's mix of older and newer housing throws up everything from " +
      "tree-root drain blockages to ageing hot water systems. We know the area well.",
    landmarks: ["Aranda", "Hawker", "Kaleen", "Bruce", "Lake Ginninderra"],
  },
  {
    slug: "gungahlin",
    name: "Gungahlin",
    blurb:
      "Gungahlin's newer estates come with their own quirks — modern fixtures, " +
      "instantaneous gas systems and tight new-build plumbing. We service the " +
      "whole district, from Crace to Bonner.",
    landmarks: ["Crace", "Bonner", "Harrison", "Forde", "Casey"],
  },
  {
    slug: "inner-north",
    name: "Inner North",
    blurb:
      "The leafy streets of the Inner North are full of character homes with " +
      "character plumbing — clay pipes, old gas heating and the odd surprise " +
      "behind the walls. We renovate and repair them with respect.",
    landmarks: ["Ainslie", "Braddon", "Dickson", "Lyneham", "O'Connor"],
  },
  {
    slug: "inner-south",
    name: "Inner South",
    blurb:
      "From Kingston's apartments to the established homes of Forrest and " +
      "Griffith, the Inner South needs plumbers who work cleanly and respect a " +
      "premium home. That's us.",
    landmarks: ["Kingston", "Forrest", "Griffith", "Manuka", "Yarralumla"],
  },
  {
    slug: "woden-valley",
    name: "Woden Valley",
    blurb:
      "Woden's classic 1960s and 70s homes are due for hot water upgrades, " +
      "heating changeovers and bathroom renovations — and we do all three. " +
      "Reliable local service across the valley.",
    landmarks: ["Curtin", "Garran", "Hughes", "Lyons", "Mawson"],
  },
  {
    slug: "weston-creek",
    name: "Weston Creek",
    blurb:
      "Weston Creek's family homes keep us busy with blocked drains, hot water " +
      "and gas-to-electric heating changeovers. Friendly, on-time service from " +
      "Holder to Chapman.",
    landmarks: ["Holder", "Chapman", "Duffy", "Stirling", "Waramanga"],
  },
  {
    slug: "tuggeranong",
    name: "Tuggeranong",
    blurb:
      "Across the Tuggeranong Valley — from Wanniassa to Conder — we handle " +
      "everything from emergency burst pipes to full bathroom renovations, with " +
      "the same up-front pricing every time.",
    landmarks: ["Wanniassa", "Kambah", "Calwell", "Conder", "Greenway"],
  },
  {
    slug: "queanbeyan",
    name: "Queanbeyan",
    blurb:
      "Just across the border, Queanbeyan's mix of old and new homes is right " +
      "in our service area. Same fast response, same lifetime guarantee, no " +
      "extra fuss for crossing into NSW.",
    landmarks: ["Karabar", "Jerrabomberra", "Crestwood", "Googong", "Greenleigh"],
  },
  {
    slug: "jerrabomberra",
    name: "Jerrabomberra",
    blurb:
      "Jerrabomberra's modern family homes and acreage properties need plumbers " +
      "who'll turn up and do it right. We cover the whole estate and out toward " +
      "Googong.",
    landmarks: ["Googong", "Environa", "Poplars", "The Tralee"],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
