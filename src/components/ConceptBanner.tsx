export function ConceptBanner() {
  return (
    <div className="border-b border-line-dark bg-bezel px-4 py-2.5 text-center text-mist shadow-md">
      <p className="mx-auto max-w-4xl text-balance text-xs font-semibold tracking-wide sm:text-sm">
        Concept site by{" "}
        <a
          href="https://quengadesigns.dev/demo?from=orland-automotive"
          target="_blank"
          rel="noopener"
          className="underline decoration-teal-light decoration-2 underline-offset-2 hover:text-teal-light"
        >
          Quenga Designs
        </a>{" "}
        &mdash; this is an unsolicited design demo, not Orland Automotive Oil &amp;
        Lube&rsquo;s official website. For the real shop, visit their{" "}
        <a
          href="https://www.facebook.com/OTownAuto/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-teal-light decoration-2 underline-offset-2 hover:text-teal-light"
        >
          Facebook page
        </a>
        .
      </p>
    </div>
  );
}
