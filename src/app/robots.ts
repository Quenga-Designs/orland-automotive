import type { MetadataRoute } from "next";

// This is an unsolicited concept/spec site — the business has not engaged
// Quenga Designs and does not know it exists. It must never be indexed or
// crawled, so search engines don't surface it as if it were the shop's real
// site. Keep this fully disallowed; there is no scenario where this
// particular deployment should allow crawling.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
