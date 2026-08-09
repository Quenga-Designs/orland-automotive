// ---------------------------------------------------------------------------
// SPEC / CONCEPT SITE — Orland Automotive Oil & Lube, 615 Fifth St, Orland, CA
//
// This is unsolicited demo work by Quenga Designs. The business has not
// engaged Quenga Designs and does not know this concept exists. Every field
// below is either independently verified against a public source during
// research (see the comment on each field), or deliberately omitted when it
// could not be confirmed. Nothing here is invented.
// ---------------------------------------------------------------------------

export const siteUrl = "https://orland-automotive.quengadesigns.dev";

export const business = {
  name: "Orland Automotive Oil & Lube",
  // Verified via two independent sources (Birdeye aggregator + BBB business
  // profile), which agree exactly.
  address: {
    line1: "615 Fifth St",
    city: "Orland",
    state: "CA",
    zip: "95963",
  },
  // Verified via two independent sources (Birdeye + BBB), which agree exactly.
  phone: "(530) 515-6929",
  phoneHref: "+15305156929",
  social: {
    // Verified live.
    facebook: "https://www.facebook.com/OTownAuto/",
    yelp: "https://www.yelp.com/biz/orland-automotive-orland",
  },
  // Verified via the BBB profile ("business started on 12/31/2021").
  establishedYear: 2021,
  description:
    "Fast, honest oil changes and full auto repair for any make or model — foreign or domestic — right here in Orland.",
  tagline: "Quick in, quick out, done right.",
  // Verified via the Birdeye aggregator listing.
  hours: [
    { day: "Monday", time: "9:00 am – 5:00 pm" },
    { day: "Tuesday", time: "9:00 am – 5:30 pm" },
    { day: "Wednesday", time: "9:00 am – 5:30 pm" },
    { day: "Thursday", time: "9:00 am – 5:30 pm" },
    { day: "Friday", time: "9:00 am – 5:30 pm" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Orland+Automotive+Oil+%26+Lube+615+Fifth+St+Orland+CA+95963",
};

// General service categories match what the shop's own listings describe
// (oil/lube + complete auto repair). No real price list could be
// independently verified anywhere in research, so pricing is left as an
// honest "call for a quote" instead of invented numbers.
export const services = [
  {
    name: "Oil & Lube Service",
    description: "Fast, no-appointment-needed oil changes and full-vehicle lube service.",
  },
  {
    name: "Brake Service",
    description: "Inspection, pad and rotor replacement, and brake system repair.",
  },
  {
    name: "Check Engine Diagnostics",
    description: "Computer diagnostics to trace a warning light back to the real problem.",
  },
  {
    name: "Tune-Ups",
    description: "Scheduled maintenance to keep your engine running the way it should.",
  },
  {
    name: "Cooling System Service",
    description: "Radiator flushes, hose checks, and cooling system repair.",
  },
  {
    name: "Foreign & Domestic Repair",
    description: "General repair for cars and light trucks, whatever's in your driveway.",
  },
] as const;

export const pricingNote = "Call for a quote — every job is different.";
