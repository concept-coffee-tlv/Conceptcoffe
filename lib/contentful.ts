import { createClient, type Asset, type EntryFieldTypes } from "contentful"
import type { Document } from "@contentful/rich-text-types"
import { cache } from "react"
import { routing, type Locale } from "@/src/i18n/routing"

type BlogEntry = {
  contentTypeId: "myBlogs"
  fields: {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    excerpt: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
    coverImage: EntryFieldTypes.AssetLink
    publishedDate: EntryFieldTypes.Date
    author: EntryFieldTypes.Symbol
  }
}

type LocalizedAsset = Asset<"WITH_ALL_LOCALES">

export const contentfulLocales = {
  en: process.env.CONTENTFUL_EN_LOCALE || "en-US",
  he: process.env.CONTENTFUL_HE_LOCALE || "he",
} satisfies Record<Locale, string>

export type BlogPost = {
  id: string
  locale: Locale
  title: string
  slug: string
  excerpt: string
  author?: string
  coverImage: { url: string; alt: string } | null
  content: Document
  publishedDate: string
  updatedAt: string
}

export function getAssetData(asset: LocalizedAsset | undefined, locale: Locale) {
  const language = contentfulLocales[locale]
  const defaultLanguage = contentfulLocales.en
  const file = asset?.fields?.file?.[language] ?? asset?.fields?.file?.[defaultLanguage]
  if (!file?.url || !URL.canParse(file.url, "https://images.ctfassets.net")) return null
  const url = new URL(file.url, "https://images.ctfassets.net")
  if (url.protocol !== "https:") return null
  const alt = asset?.fields?.description?.[language]
    || asset?.fields?.title?.[language]
    || (locale === "en" ? "" : asset?.fields?.description?.[defaultLanguage] || asset?.fields?.title?.[defaultLanguage])
    || ""
  return { url: url.href, alt, type: file.contentType }
}

export function articlePath(slug: string) {
  return `/blog/${encodeURIComponent(slug)}`
}

export const getBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !accessToken) {
    if (process.env.VERCEL_ENV === "production") {
      throw new Error("Configure the Contentful delivery credentials for the production site.")
    }
    return []
  }

  const client = createClient({
    space,
    accessToken,
    timeout: 8000,
    retryOnError: false,
  }).withAllLocales.withoutUnresolvableLinks

  const posts: BlogPost[] = []
  const limit = 100
  for (let skip = 0; ; skip += limit) {
    const response = await client.getEntries<BlogEntry>({ content_type: "myBlogs", limit, skip, order: ["sys.id"] })
    for (const entry of response.items) {
      const { fields, sys } = entry
      for (const locale of routing.locales) {
        const language = contentfulLocales[locale]
        if (locale === "he" && language === contentfulLocales.en) continue

        // Inspect explicit field values with locale=* so CMS fallbacks cannot create translations.
        const title = fields.title?.[language]?.trim()
        const content = fields.content?.[language]
        const slug = fields.slug?.[language]?.trim() || fields.slug?.[contentfulLocales.en]?.trim()
        const publishedDate = fields.publishedDate?.[language] ?? fields.publishedDate?.[contentfulLocales.en]
        if (!title || !content?.content?.length || !slug || /[/\\?#\s]/u.test(slug) || slug === "." || slug === "..") continue
        if (!publishedDate || !Number.isFinite(Date.parse(publishedDate))) continue

        const cover = getAssetData(fields.coverImage?.[language] ?? fields.coverImage?.[contentfulLocales.en], locale)
        posts.push({
          id: sys.id,
          locale,
          title,
          slug,
          excerpt: fields.excerpt?.[language]?.trim() || "",
          author: fields.author?.[language]?.trim() || fields.author?.[contentfulLocales.en]?.trim() || undefined,
          coverImage: cover?.type.startsWith("image/") ? cover : null,
          content,
          publishedDate,
          updatedAt: sys.updatedAt,
        })
      }
    }
    if (skip + response.items.length >= response.total || response.items.length === 0) break
  }

  // The earliest article wins a slug collision to keep the existing URL stable.
  posts.sort((a, b) => Date.parse(a.publishedDate) - Date.parse(b.publishedDate))
  const unique = new Map<string, BlogPost>()
  for (const post of posts) {
    const key = `${post.locale}/${post.slug}`
    if (!unique.has(key)) unique.set(key, post)
  }
  return [...unique.values()].reverse()
})

export function postAlternates(posts: BlogPost[], post: BlogPost) {
  const paths: Partial<Record<Locale, string>> = {}
  for (const version of posts) {
    if (version.id === post.id) paths[version.locale] = articlePath(version.slug)
  }
  return paths
}

export function findArticle(posts: BlogPost[], locale: Locale, slug: string) {
  const exact = posts.find((post) => post.slug === slug && post.locale === locale)
  if (exact) return exact

  // Older links used the same slug in both languages. Resolve those via the entry ID.
  const legacy = posts.find((post) => post.slug === slug)
  return legacy && (posts.find((post) => post.id === legacy.id && post.locale === locale) ?? legacy)
}
