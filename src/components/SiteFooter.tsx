import { business, hours } from "@/lib/site-data";

const links = [
  { label: "Facebook", href: business.social.facebook },
  { label: "Yelp", href: business.social.yelp },
  { label: "Google Maps", href: business.social.google },
];

export function SiteFooter() {
  return (
    <footer className="brick text-sign">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="painted">
          <p className="font-script text-4xl leading-none">Orland Automotive</p>
          <p className="font-block text-3xl tracking-wide">OIL &amp; LUBE</p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="font-bold">
            {business.address.line1}, {business.address.city}, {business.address.state} {business.address.zip}
          </p>
          <p>
            <a href={business.phoneHref} className="font-bold underline underline-offset-4">
              {business.phone}
            </a>
          </p>
          {hours.map((h) => (
            <p key={h.day} className="text-sign/90">
              {h.day}: {h.time}
            </p>
          ))}
        </div>
        <ul className="flex flex-wrap content-start gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-md bg-black/25 px-4 text-sm font-bold hover:bg-black/40">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-wall-deep">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-5 text-xs leading-relaxed text-sign/85 sm:px-6">
          <p>Photos: from the shop&rsquo;s Facebook page and Yelp listing (owner and customer uploads). Reviews quoted from Yelp and Google with links to the originals.</p>
          <p>
            Concept demo by{" "}
            <a href="https://quengadesigns.dev/demo?from=orland-automotive" target="_blank" rel="noopener" className="font-bold text-sky underline underline-offset-4">
              Quenga Designs
            </a>{" "}
            &mdash; unsolicited, not Orland Automotive Oil &amp; Lube&rsquo;s official website and not affiliated with or endorsed by the shop.
          </p>
        </div>
      </div>
    </footer>
  );
}
