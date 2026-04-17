import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://varl.net";

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const, lastModified: "2026-03-30" },
    { path: "/health", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-03-30" },
    { path: "/food", priority: 0.9, changeFrequency: "weekly" as const, lastModified: "2026-03-30" },
    { path: "/science", priority: 0.9, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-02-20" },
    { path: "/investors", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
    { path: "/partnerships", priority: 0.8, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
    { path: "/publications", priority: 0.7, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const, lastModified: "2026-01-10" },
    { path: "/api", priority: 0.6, changeFrequency: "monthly" as const, lastModified: "2026-03-30" },
    { path: "/latest", priority: 0.7, changeFrequency: "weekly" as const, lastModified: "2026-03-30" },
    { path: "/api-access", priority: 0.5, changeFrequency: "yearly" as const, lastModified: "2026-01-10" },
    { path: "/compliance", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
    { path: "/api-policy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: "2025-12-01" },
  ];

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/latest/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(route.lastModified),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...articleRoutes,
  ];
}
