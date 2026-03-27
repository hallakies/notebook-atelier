import type { MetadataRoute } from "next";
import { buyingGuides } from "@/content/buying-guides";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notebook-at.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const guideEntries: MetadataRoute.Sitemap = buyingGuides.map((guide) => ({
    url: `${siteUrl}/buying-guides/${guide.slug}`,
    lastModified: guide.publishedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: "2026-03-27",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/buying-guides`,
      lastModified: "2026-03-28",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guideEntries,
  ];
}
