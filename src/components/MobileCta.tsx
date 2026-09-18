import { business } from "@/lib/site-data";

// Trade → the one action is a call ("walk-ins welcome or book now").
export function MobileCta() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_auto] gap-2 border-t-2 border-wall-deep bg-sign p-2 md:hidden">
      <a href={business.phoneHref} className="btn btn-tab w-full">
        Call {business.phone}
      </a>
      <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line px-4">
        Directions
      </a>
    </nav>
  );
}
