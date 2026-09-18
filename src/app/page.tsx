import Link from "next/link";
import { business, hours, hoursNote, photos, services, siteUrl, theirWords } from "@/lib/site-data";
import { Framed, PackageBoard, RatingStrip, ReviewGrid } from "@/components/parts";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}${photos.storefront.src}`,
  telephone: "+15305156929",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
  ],
  hasMap: business.mapsUrl,
  sameAs: [business.social.facebook, business.social.yelp],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: 52, bestRating: "5" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero: their painted wall */}
      <section aria-labelledby="hero-title" className="bg-[linear-gradient(180deg,#77adf0_0,#a9cbf5_38%,#efede9_38%)]">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6">
          <div className="brick overflow-hidden rounded-t-2xl border-b-8 border-wall-deep px-6 pt-10 pb-8 sm:px-12 sm:pt-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <span className="lit text-sm sm:text-base">Walk-ins welcome</span>
                <h1 id="hero-title" className="painted mt-6">
                  <span className="block font-script text-[clamp(3.2rem,10vw,5.8rem)] leading-[0.95]">Orland Automotive</span>
                  <span className="block font-block text-[clamp(3.6rem,13vw,7.5rem)] leading-[0.85] tracking-wide">OIL &amp; LUBE</span>
                </h1>
                <p className="mt-6 max-w-lg text-lg text-sign">
                  Oil changes and complete repair for any make and model, foreign or domestic &mdash; on Fifth Street in Orland.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={business.phoneHref} className="btn btn-sign">
                    Call {business.phone}
                  </a>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn border-2 border-sign text-sign">
                    Directions
                  </a>
                </div>
              </div>
              <Framed photo={photos.storefront} sizes="(min-width: 1024px) 460px, 90vw" priority className="rotate-1" />
            </div>
          </div>
          <div className="rounded-b-2xl bg-concrete px-6 py-5 sm:px-12">
            <RatingStrip />
          </div>
        </div>
      </section>

      {/* Package */}
      <section id="package" aria-labelledby="package-title" className="scroll-mt-16 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-3xl text-wall">the performance package</p>
          <h2 id="package-title" className="font-block text-5xl tracking-wide sm:text-6xl">EVERY OIL CHANGE</h2>
          <p className="mt-2 max-w-2xl text-lg text-ink/85">
            What their board says comes with it &mdash; &ldquo;{theirWords.yelp}&rdquo;
          </p>
          <div className="mt-8">
            <PackageBoard />
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-script text-3xl text-wall">and the rest of the car</p>
            <h2 id="services-title" className="font-block text-5xl tracking-wide sm:text-6xl">COMPLETE AUTO REPAIR</h2>
            <p className="mt-3 text-lg">{theirWords.fb}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {services.map((g) => (
                <li key={g.group} className="rounded-xl bg-asphalt p-4">
                  <h3 className="font-block text-xl tracking-wide text-wall">{g.group.toUpperCase()}</h3>
                  <p className="mt-1 text-sm">{g.items.slice(0, 3).join(" · ")}{g.items.length > 3 ? " …" : ""}</p>
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn btn-tab mt-6">
              All services
            </Link>
          </div>
          <Framed photo={photos.bay} sizes="(min-width: 1024px) 560px, 92vw" />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-16 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-script text-3xl text-wall">ask for Justin</p>
          <h2 id="reviews-title" className="font-block text-5xl tracking-wide sm:text-6xl">WHAT ORLAND SAYS</h2>
          <div className="mt-8">
            <ReviewGrid />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" aria-labelledby="visit-title" className="brick scroll-mt-16 px-4 py-16 text-sign sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="painted">
            <p className="font-script text-4xl">come on by</p>
            <h2 id="visit-title" className="font-block text-5xl tracking-wide sm:text-6xl">615 FIFTH ST</h2>
            <p className="mt-2 text-lg">
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>
            <dl className="mt-6 space-y-1 text-lg" style={{ textShadow: "none" }}>
              {hours.map((h) => (
                <div key={h.day} className="flex max-w-sm justify-between gap-4 border-b border-sign/25 py-2">
                  <dt>{h.day}</dt>
                  <dd className="font-bold">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 max-w-sm text-sm text-sign/90" style={{ textShadow: "none" }}>
              {hoursNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3" style={{ textShadow: "none" }}>
              <a href={business.phoneHref} className="btn btn-sign">
                Call {business.phone}
              </a>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn border-2 border-sign text-sign">
                Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border-4 border-sign/80 bg-white">
            <iframe title="Map: Orland Automotive Oil & Lube, 615 Fifth St, Orland" src={business.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full lg:h-full lg:min-h-[420px]" />
          </div>
        </div>
      </section>
    </>
  );
}
