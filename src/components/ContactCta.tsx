import { business } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.25em] text-safety-yellow">
            No Appointment Needed
          </p>
          <h2 className="mt-2 font-display text-3xl uppercase tracking-tight text-chalk sm:text-4xl">
            Swing by, or give us a call first.
          </h2>
          <p className="mt-3 max-w-xl text-chalk-dim">
            Oil changes are walk-in — for anything bigger, call ahead and{" "}
            {business.manager} can tell you what to expect.
          </p>
        </div>
        <a
          href={`tel:${business.phoneHref}`}
          className="shrink-0 rounded-sm border-2 border-safety-yellow bg-safety-yellow px-8 py-4 text-center font-display text-lg uppercase tracking-[0.08em] text-asphalt-darker transition hover:bg-safety-yellow-light hover:border-safety-yellow-light"
        >
          Call {business.phone}
        </a>
      </div>
    </section>
  );
}
