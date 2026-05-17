import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/services",
  "/tarifs",
  "/a-propos",
  "/faq",
  "/contact",
  "/blog",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : 0.8,
  }));

  const posts = getAllPostSlugs().map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
