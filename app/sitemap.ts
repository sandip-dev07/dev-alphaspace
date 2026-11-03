import type { MetadataRoute } from "next";
import { contentUpdated, siteUrl, sitemapRoutes } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentUpdated);

  return sitemapRoutes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
