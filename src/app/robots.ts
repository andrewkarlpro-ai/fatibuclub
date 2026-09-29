import type { MetadataRoute } from "next";

// Auto-generated robots.txt for Google Search Console.
// Served at https://fatibuclub.fatibuclub.workers.dev/robots.txt
const SITE_URL = "https://fatibuclub.fatibuclub.workers.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
