import type { MetadataRoute } from "next";

// Auto-generated sitemap.xml for Google Search Console.
// Served at https://fatibuclub.fatibuclub.workers.dev/sitemap.xml
const SITE_URL = "https://fatibuclub.fatibuclub.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
