import { business } from "@/lib/site-data";

export function VisitSection() {
  return (
    <section id="visit" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-teal">
            Come By
          </p>
          <h2 className="mt-2 font-display text-4xl uppercase tracking-tight text-ink sm:text-5xl">
            Visit the Shop
          </h2>

          <dl className="mt-8 space-y-6 text-ink-dim">
            <div>
              <dt className="font-display text-sm uppercase tracking-[0.15em] text-teal">
                Address
              </dt>
              <dd className="mt-1">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.state} {business.address.zip}
                <br />
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block underline decoration-amber/60 underline-offset-4 hover:text-amber"
                >
                  Get directions on Google Maps
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-display text-sm uppercase tracking-[0.15em] text-teal">
                Reach Out
              </dt>
              <dd className="mt-1 space-y-1">
                <p>
                  <a href={`tel:${business.phoneHref}`} className="hover:text-amber">
                    {business.phone}
                  </a>
                </p>
              </dd>
            </div>

            <div>
              <dt className="font-display text-sm uppercase tracking-[0.15em] text-teal">
                Find Us Online
              </dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  Facebook
                </a>
                <a
                  href={business.social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber"
                >
                  Yelp
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-sm border border-line bg-paper-raised p-8 shadow-sm shadow-ink/5">
          <p className="font-display text-sm uppercase tracking-[0.15em] text-teal">
            Hours
          </p>
          <ul className="mt-4 divide-y divide-line text-sm">
            {business.hours.map((entry) => (
              <li key={entry.day} className="flex items-center justify-between py-2.5">
                <span className="text-ink">{entry.day}</span>
                <span className="tabular-nums text-ink-dim">{entry.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-ink-dim/70">
            Hours are sourced from public business listings and may not be current.
            Please call {business.phone} before visiting.
          </p>
        </div>
      </div>
    </section>
  );
}
