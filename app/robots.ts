import type { MetadataRoute } from "next";

// Disallow all crawling until launch (see robots in app/layout.tsx).
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
