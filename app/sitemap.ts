import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/hackkit", "/events", "/resources", "/community", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://codexsf.com${route}`,
    lastModified: new Date()
  }));
}
