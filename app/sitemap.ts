import type { MetadataRoute } from "next"
import { articlePath, getBlogPosts, postAlternates } from "@/lib/contentful"
import { audiencePagesPublished, audiencePaths, isPreview, languageAlternates, publicPages } from "@/lib/seo"
import { localizedUrl } from "@/lib/site"
import { routing } from "@/src/i18n/routing"

export const revalidate = 300

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isPreview) return []

  const entries: MetadataRoute.Sitemap = []
  for (const path of Object.keys(publicPages)) {
    if (!audiencePagesPublished && audiencePaths.some((draft) => draft === path)) continue
    for (const locale of routing.locales) {
      if (path === "/policy" && locale === "he") continue
      entries.push({
        url: localizedUrl(locale, path),
        alternates: path === "/policy" ? undefined : { languages: languageAlternates({ en: path, he: path }) },
      })
    }
  }

  const posts = await getBlogPosts()
  for (const post of posts) {
    const languages = languageAlternates(postAlternates(posts, post))
    entries.push({
      url: localizedUrl(post.locale, articlePath(post.slug)),
      lastModified: post.updatedAt,
      alternates: languages ? { languages } : undefined,
    })
  }
  return entries
}
