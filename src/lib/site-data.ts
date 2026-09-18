// ---------------------------------------------------------------------------
// SPEC / CONCEPT SITE — Orland Automotive Oil & Lube, 615 Fifth St, Orland, CA
// Unsolicited demo by Quenga Designs; the shop hasn't engaged us.
//
// Re-sourced 2026-09-18 for the revamp (table: ~/Work/_revamp/orland-automotive/research.md):
// - Yelp (claimed): services "Verified by Business", hours, About, 10 reviews, dated photos
// - Google Maps: 4.8 / 52, hours, phone
// - Facebook (OTownAuto): intro ("Walkins welcome or book now"), 100% recommend / 27
// Removed from the old concept: "Since 2021" (a BBB registration date — their "NOW
// OPEN" sign was photographed Jan 2018), the invented tagline, and services not
// on their own list (tune-ups).
// ---------------------------------------------------------------------------

export const siteUrl = "https://preview.orland-automotive.quengadesigns.dev";

export const business = {
  name: "Orland Automotive Oil & Lube",
  owner: "Justin",
  address: { line1: "615 Fifth St", city: "Orland", state: "CA", zip: "95963" },
  phone: "(530) 515-6929",
  phoneHref: "tel:+15305156929",
  mapsUrl: "https://maps.google.com/?cid=5139352425096597648",
  mapsEmbed: "https://www.google.com/maps?q=Orland+Automotive+Oil%26Lube,+615+5th+St,+Orland,+CA+95963&output=embed",
  social: {
    facebook: "https://www.facebook.com/OTownAuto/",
    yelp: "https://www.yelp.com/biz/orland-automotive-orland",
    google: "https://maps.google.com/?cid=5139352425096597648",
  },
};

/** Their own words (FB intro + Yelp About). */
export const theirWords = {
  fb: "We specialize in all makes and models, foreign and domestic. Walk-ins welcome or book now.",
  yelp: "We strive to bring our customers professional service at an affordable rate.",
};

/**
 * Hours. Google: Mon–Fri 9–5, closed weekends. Yelp: Mon 9–5, Tue–Fri 9–5:30.
 * Sources disagree on the close Tue–Fri → we show 9–5 and say so.
 */
export const hours = [
  { day: "Monday – Friday", time: "9 AM – 5 PM" },
  { day: "Saturday & Sunday", time: "Closed" },
];
export const hoursNote = "Yelp lists 5:30 PM close Tuesday–Friday — call if you're cutting it close.";

export const ratings = [
  { platform: "Google", value: "4.8", count: "52 reviews", href: business.social.google },
  { platform: "Yelp", value: "5.0", count: "10 reviews", href: business.social.yelp },
  { platform: "Facebook", value: "100%", count: "recommend · 27 reviews", href: business.social.facebook },
];

/** The oil-change package, off their wall board (Yelp photo, Oct 2019). */
export const board = {
  change: ["Oil (up to 5 quarts)", "Oil filter"],
  checkFill: ["Tire pressure", "Transmission / transaxle fluid", "Differential fluid", "Power steering fluid", "Windshield washer fluid", "Battery water"],
  inspect: ["Brake fluid level", "Serpentine belts", "Wiper blades", "Antifreeze / coolant levels", "Engine air filtration", "Exterior lights", "Chassis (lubricate when applicable)"],
  clean: ["Exterior windows", "Vacuum interior floors"],
};

/** Prices off the Sep 28, 2022 board photo. Full Synthetic is cut off in the photo. */
export const boardPrices = {
  date: "their board, photographed Sep 2022",
  tiers: [
    { name: "Conventional", price: "$65.99" },
    { name: "High Mileage", price: "$79.99" },
    { name: "Synthetic Blend", price: "$89.99" },
    { name: "Full Synthetic", price: "Ask" },
  ],
};

/** Yelp "Services Offered — Verified by Business", grouped. */
export const services = [
  {
    group: "Maintenance",
    items: ["Oil changes", "Routine maintenance", "Fluids & filters", "Fuel system cleaning", "Battery service"],
  },
  {
    group: "Repair",
    items: ["Brake repair", "Battery & electrical repair", "A/C & heating (HVAC) repair", "Electronics installation"],
  },
  {
    group: "Diagnosis",
    items: ["Check engine light", "Engine oil light", "No-start", "Noise & vibration", "TPMS (tire pressure) light", "Transmission leak inspection"],
  },
  {
    group: "Buying a car?",
    items: ["Pre-purchase inspection"],
  },
];

export const reviews = [
  {
    quote: "Justin there at the shop really cares about his customers and does quality work. Always gets me in quick and leaves me happy with reasonable prices and quality work!",
    name: "Shawn D.",
    platform: "Yelp",
    date: "Mar 2026",
    href: business.social.yelp,
  },
  {
    quote: "Called this morning around 930 and was able to get a 1pm appointment. I was in and out of my appointment within like 15 freaking minutes.",
    name: "Sasha S.",
    platform: "Google",
    date: "Jul 2026",
    href: business.social.google,
  },
  {
    quote: "Very professional and knowledgeable. Great prices for an honest work load. I came from out of town and he got me in and back on the road with no price gouging.",
    name: "Darchelle E.",
    platform: "Yelp",
    date: "Jul 2026",
    href: business.social.yelp,
  },
  {
    quote: "The person on duty checked the car, read the error log and cleared the codes. The car started up without any trouble and we continued on our journey. And the guy won't take the money for helping us out.",
    name: "Alex L.",
    platform: "Yelp",
    date: "Dec 2025",
    href: business.social.yelp,
  },
  {
    quote: "They keep your car's needs on record and let you know what is good and what needs to be repaired. They are always upfront and honest.",
    name: "A. C.",
    platform: "Google",
    date: "Mar 2026",
    href: business.social.google,
  },
  {
    quote: "A quick scan tool diagnosis revealed that my battery was bad… The owner ordered me a new battery which arrived within 10 to 15 minutes, while we were waiting I decided to get an oil change at the same time.",
    name: "Quint M.",
    platform: "Yelp",
    date: "Feb 2025",
    href: business.social.yelp,
  },
];

export type Photo = { src: string; alt: string; w: number; h: number; caption: string };

export const photos = {
  storefront: {
    src: "/photos/storefront.webp",
    alt: "The shop's oxblood-red brick wall with white lettering reading Orland Automotive Oil & Lube, an oil and filter change banner, and a car parked in front under a blue sky.",
    w: 1000,
    h: 1000,
    caption: "615 Fifth St · Yelp, 2022",
  },
  bay: {
    src: "/photos/shop-bay.webp",
    alt: "Inside the shop: a red classic Corvette with its hood up on a lift, shelves of motor oil behind it.",
    w: 960,
    h: 720,
    caption: "In the bay · their Facebook",
  },
  openDay: {
    src: "/photos/now-open.webp",
    alt: "The shopfront with a lit NOW OPEN sign above an open roll-up bay door and a car lift inside.",
    w: 960,
    h: 720,
    caption: "Opening days · Yelp, Jan 2018",
  },
  engine: {
    src: "/photos/intake-gaskets.webp",
    alt: "An engine bay with the intake manifold off, showing fresh blue intake gaskets seated on the cylinder head.",
    w: 900,
    h: 1200,
    caption: "Under the hood · their Facebook, May 2025",
  },
  board: {
    src: "/photos/service-board.webp",
    alt: "Their wall board listing the oil change package — change, check/fill, inspect and clean — above the price tiers.",
    w: 750,
    h: 1000,
    caption: "The package board · Yelp, 2019 (older prices)",
  },
};

export const navLinks = [
  { label: "Oil change", href: "/#package" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit", href: "/#visit" },
];
