/*
 * Concept-demo view beacon.
 *
 * Reports once per session that this demo was opened, so outreach can be
 * prioritised by who actually looked. Sends only the subdomain slug and the
 * referrer — no identifiers, no cookies, nothing when Do-Not-Track is on.
 *
 * Deliberately a plain external script rather than a React component: these
 * sites ship a strict `script-src 'self'` CSP, and an external file is served
 * under that policy without needing inline execution.
 *
 * Visiting any demo with ?qd-optout=1 sets a permanent local opt-out — that's
 * how Marcel silences his own visits, which would otherwise swamp the signal.
 *
 * Silent on every failure path: this is analytics, and a business owner
 * looking at a site built for them must never see it break.
 */
(function () {
  "use strict";

  var ENDPOINT = "https://quengadesigns.dev/api/demo-view";
  var SESSION_KEY = "qd-demo-view-sent";
  var OPTOUT_KEY = "qd-optout";

  try {
    if (window.location.search.indexOf("qd-optout") !== -1) {
      localStorage.setItem(OPTOUT_KEY, "1");
    }
    if (localStorage.getItem(OPTOUT_KEY)) return;

    // Only the real deployed demos report — not localhost or preview URLs.
    if (!/\.quengadesigns\.dev$/.test(window.location.hostname)) return;

    if (navigator.doNotTrack === "1") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    var slug = window.location.hostname.split(".")[0];
    if (!slug) return;

    var referrerHostname = null;
    try {
      referrerHostname = document.referrer ? new URL(document.referrer).hostname : null;
    } catch {}
    var payload = JSON.stringify({ slug: slug, referrer: referrerHostname });

    // text/plain keeps this a CORS-simple request: sendBeacon cannot survive a
    // preflight, and the route parses the body as JSON regardless.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: "text/plain" }));
    } else {
      fetch(ENDPOINT, { method: "POST", body: payload, keepalive: true }).catch(function () {});
    }
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* private-mode storage errors and the like — never surface */
  }
})();

/*
 * Provenance tripwire.
 *
 * Every deployed Quenga Designs site carries a unique canary id in a
 * <meta name="qd-provenance"> tag. If this code is ever found running on a
 * host that ISN'T ours, it reports the canary + that host to the portal so
 * the copy surfaces on the Code Alerts board. It reports ONLY that our code
 * is live at hostname X — never anything about that site's visitors. On our
 * own domains (and local/preview builds) it stays completely silent.
 */
(function () {
  "use strict";
  try {
    var host = window.location.hostname;
    if (/(^|\.)quengadesigns\.dev$/.test(host)) return;
    if (/\.vercel\.app$/.test(host)) return;
    if (host === "localhost" || host === "127.0.0.1" || host === "::1") return;

    var meta = document.querySelector('meta[name="qd-provenance"]');
    var canary = meta && meta.getAttribute("content");
    if (!canary) return;

    var PROV_KEY = "qd-prov-sent";
    if (sessionStorage.getItem(PROV_KEY)) return;

    var payload = JSON.stringify({
      canary: canary,
      host: host,
      referrer: document.referrer || null,
    });
    var PROV_ENDPOINT = "https://quengadesigns.dev/api/provenance-ping";
    if (navigator.sendBeacon) {
      navigator.sendBeacon(PROV_ENDPOINT, new Blob([payload], { type: "text/plain" }));
    } else {
      fetch(PROV_ENDPOINT, { method: "POST", body: payload, keepalive: true }).catch(function () {});
    }
    sessionStorage.setItem(PROV_KEY, "1");
  } catch {
    /* never surface */
  }
})();
