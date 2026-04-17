import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/api-access", "/api/contact"],
      },
    ],
    sitemap: "https://varl.net/sitemap.xml",
  };
}
