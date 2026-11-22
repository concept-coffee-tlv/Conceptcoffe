import type { MetadataRoute } from "next"
import { isPreview } from "@/lib/seo"
import { site } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } }

  // Public pages are open to search, AI search and training crawlers.
  // Authentication, rather than robots.txt, must protect any private endpoint.
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_vercel/"] },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
