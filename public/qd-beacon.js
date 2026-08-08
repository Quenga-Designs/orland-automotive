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
    } catch (e) {}
    var payload = JSON.stringify({ slug: slug, referrer: referrerHostname });

    // text/plain keeps this a CORS-simple request: sendBeacon cannot survive a
    // preflight, and the route parses the body as JSON regardless.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([payload], { type: "text/plain" }));
    } else {
      fetch(ENDPOINT, { method: "POST", body: payload, keepalive: true }).catch(function () {});
    }
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch (e) {
    /* private-mode storage errors and the like — never surface */
  }
})();
