import { business } from "@/lib/site-data";
import { Year } from "@/components/Year";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-asphalt-darker">
      <div className="checker-stripe" />
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.04em] text-chalk">
              Orland Automotive Oil &amp; Lube
            </p>
            <p className="mt-2 text-sm text-chalk-dim">
              {business.address.line1}
              <br />
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.15em] text-safety-yellow">
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-chalk-dim">
              <li>
                <a href={`tel:${business.phoneHref}`} className="hover:text-safety-yellow">
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-safety-yellow"
                >
                  Get directions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.15em] text-safety-yellow">
              Find Us Online
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-chalk-dim">
              <li>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-safety-yellow"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={business.social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-safety-yellow"
                >
                  Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-xs text-chalk-dim/70">
          <p>
            &copy; <Year /> This is a concept demo built by{" "}
            <a
              href="https://quengadesigns.dev"
              target="_blank"
              rel="noopener"
              className="underline hover:text-safety-yellow"
            >
              Quenga Designs
            </a>{" "}
            for portfolio purposes. It is not affiliated with or endorsed by Orland
            Automotive Oil &amp; Lube, and it is not indexed by search engines.
          </p>
        </div>
      </div>
    </footer>
  );
}
