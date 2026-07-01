import type { MetadataRoute } from "next";
import { aiReadableFeedUrls } from "@/lib/aiFeeds";
import { getCollection } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/hackkit/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/events/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resources/", priority: 0.85, changeFrequency: "monthly" },
  { path: "/community/", priority: 0.75, changeFrequency: "monthly" },
  { path: "/tatianasf/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/log/", priority: 0.3, changeFrequency: "monthly" }
] as const;

const machineReadableRoutes = [
  { url: aiReadableFeedUrls.profile, priority: 0.7, changeFrequency: "weekly" },
  { url: aiReadableFeedUrls.sections, priority: 0.7, changeFrequency: "weekly" },
  { url: aiReadableFeedUrls.llms, priority: 0.7, changeFrequency: "weekly" }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const hackkitRoutes = getCollection("hackkit").map((item) => ({
    path: `/hackkit/${item.slug}/` as const,
    priority: 0.72,
    changeFrequency: "monthly" as const
  }));
  const resourceRoutes = getCollection("resources").map((item) => ({
    path: `/resources/${item.slug}/` as const,
    priority: 0.72,
    changeFrequency: "monthly" as const
  }));

  const htmlRoutes = [...staticRoutes, ...hackkitRoutes, ...resourceRoutes].map(
    (route) => ({
      url: new URL(route.path, SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })
  );

  const feedRoutes = machineReadableRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  return [...htmlRoutes, ...feedRoutes];
}
