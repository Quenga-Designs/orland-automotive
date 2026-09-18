import type { Metadata } from "next";
import { business, photos, services } from "@/lib/site-data";
import { Framed, PackageBoard } from "@/components/parts";

export const metadata: Metadata = {
  title: "Services — Orland Automotive Oil & Lube (Concept Site)",
  description: "Oil changes, maintenance, brakes, electrical, HVAC and diagnosis at Orland Automotive Oil & Lube, 615 Fifth St, Orland, CA.",
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
        <p className="mx-auto mt-6 max-w-6xl text-sm text-ink/80">
          Repair pricing depends on the job &mdash; call{" "}
          <a href={business.phoneHref} className="font-bold underline underline-offset-4">
            {business.phone}
          </a>{" "}
          for a quote.
        </p>
      </section>
      <section className="bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <PackageBoard />
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            <Framed photo={photos.engine} sizes="(min-width: 768px) 360px, 92vw" />
            <Framed photo={photos.board} sizes="(min-width: 768px) 360px, 92vw" />
            <Framed photo={photos.openDay} sizes="(min-width: 768px) 360px, 92vw" />
          </div>
        </div>
      </section>
    </>
  );
}
