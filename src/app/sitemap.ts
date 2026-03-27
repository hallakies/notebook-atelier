import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notebook-atelier.example";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-03-27",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
