import type { Metadata } from "next";
import { business, photos, services, siteUrl } from "@/lib/site-data";
import { Framed, PackageBoard } from "@/components/parts";

export const metadata: Metadata = {
  title: "Services | Orland Automotive Oil & Lube (Concept Site)",
  description: "Oil changes, maintenance, brakes, electrical, HVAC and diagnosis at Orland Automotive Oil & Lube, 615 Fifth St, Orland, CA.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services | Orland Automotive Oil & Lube",
    description: "Oil changes, maintenance, brakes, electrical, HVAC and diagnosis on Fifth Street in Orland.",
    url: `${siteUrl}/services`,
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Orland Automotive Oil & Lube, painted brick wall at 615 Fifth St, Orland" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="brick px-4 py-14 sm:px-6">
        <div className="painted mx-auto max-w-6xl">
          <p className="font-script text-4xl">any make, any model</p>
          <h1 className="font-block text-6xl tracking-wide sm:text-7xl">SERVICES</h1>
          <p className="mt-3 max-w-xl text-lg">Foreign or domestic. This is the list the shop verified on its own Yelp page.</p>
        </div>
      </section>
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((g) => (
            <div key={g.group} className="rounded-xl bg-white p-6 ring-1 ring-line">
              <h2 className="font-block text-3xl tracking-wide text-wall">{g.group.toUpperCase()}</h2>
              <ul className="mt-3 space-y-1.5">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="text-tab">▸</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/80">
          <p>Repair pricing depends on the job. Call for a quote.</p>
          <a href={business.phoneHref} className="btn btn-tab">
            Call {business.phone}
          </a>
        </div>
      </section>
      <section className="bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <PackageBoard />
          <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
            <Framed photo={photos.engine} sizes="(min-width: 768px) 360px, 92vw" />
            <Framed photo={photos.openDay} sizes="(min-width: 768px) 360px, 92vw" />
          </div>
        </div>
      </section>
    </>
  );
}
