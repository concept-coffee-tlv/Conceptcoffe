import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { hasLocale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { documentToReactComponents, type Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, type TopLevelBlock } from "@contentful/rich-text-types"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { breadcrumbs, businessId, JsonLd } from "@/components/structured-data"
import { articlePath, findArticle, getAssetData, getBlogPosts, postAlternates } from "@/lib/contentful"
import { createPageMetadata } from "@/lib/seo"
import { localizedUrl } from "@/lib/site"
import { Link } from "@/src/i18n/navigation"
import { routing, type Locale } from "@/src/i18n/routing"

export const revalidate = 60

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.locale === params.locale).map(({ slug }) => ({ slug }))
}

function firstParagraph(blocks: TopLevelBlock[]) {
  const paragraph = blocks.find((block) => block.nodeType === BLOCKS.PARAGRAPH)
  return paragraph?.content.map((node) => "value" in node ? node.value : "").join("").trim() ?? ""
}

const relatedWorkshops: Record<string, string> = {
  "cup-guide": "cupping",
  "how-to-make-batch-brew-coffee": "custom",
  "how-to-make-v60": "custom",
  "cold-brew": "custom",
  "french-press": "custom",
  "brew-moka-pot": "custom",
}

async function articleForRoute(params: Props["params"]) {
  const { locale, slug } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const posts = await getBlogPosts()
  const post = findArticle(posts, locale, slug)
  if (!post) notFound()
  if (post.locale !== locale || post.slug !== slug) redirect(`/${post.locale}${articlePath(post.slug)}`)
  return { post, posts }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post, posts } = await articleForRoute(params)
  return createPageMetadata({
    locale: post.locale,
    path: articlePath(post.slug),
    copy: {
      title: post.title.replace(/\s+/g, " "),
      description: post.excerpt || firstParagraph(post.content.content).slice(0, 170) || post.title,
    },
    alternates: postAlternates(posts, post),
    image: post.coverImage ?? undefined,
    article: { publishedTime: post.publishedDate, modifiedTime: post.updatedAt },
  })
}

function renderOptions(locale: Locale): Options {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-10 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-disc list-outside ps-6 mb-6 space-y-2 text-muted-foreground">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="list-decimal list-outside ps-6 mb-6 space-y-2 text-muted-foreground">{children}</ol>
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <blockquote className="border-s-4 border-accent ps-6 italic my-8 text-foreground">{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = getAssetData(node.data.target, locale)
        if (!asset) return null
        if (asset.type.startsWith("video/")) {
          return (
            <div className="my-10 w-full aspect-video rounded-xl overflow-hidden">
              <video src={asset.url} controls preload="metadata" playsInline className="w-full h-full object-cover" />
            </div>
          )
        }
        if (!asset.type.startsWith("image/")) return null
        return (
          <div className="my-10 relative w-full aspect-video rounded-xl overflow-hidden">
            <Image src={asset.url} alt={asset.alt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
          </div>
        )
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const href = node.data.uri
        if (typeof href !== "string" || !/^(https?:\/\/|mailto:|tel:|\/(?![\\/])|#)/i.test(href)) return children
        return <a href={href} className="text-foreground underline underline-offset-4 hover:text-accent">{children}</a>
      },
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { post, posts } = await articleForRoute(params)
  const { locale, slug } = post
  setRequestLocale(locale)

  const t = await getTranslations("blogPage")
  const path = articlePath(slug)
  const url = localizedUrl(locale, path)
  const versions = postAlternates(posts, post)
  const englishSlug = posts.find((version) => version.id === post.id && version.locale === "en")?.slug ?? slug
  const related = relatedWorkshops[englishSlug]
  const workshops = await getTranslations("workshopsPage.workshops")

  return (
    <>
      <Header localizedPaths={{ en: versions.en ?? "/blog", he: versions.he ?? "/blog" }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          breadcrumbs(locale, [{ name: t("eyebrow"), path: "/blog" }, { name: post.title, path }]),
          {
            "@type": "BlogPosting",
            "@id": `${url}#article`,
            headline: post.title,
            description: post.excerpt || firstParagraph(post.content.content).slice(0, 170) || post.title,
            mainEntityOfPage: url,
            inLanguage: locale,
            datePublished: post.publishedDate,
            dateModified: post.updatedAt,
            image: post.coverImage?.url,
            author: post.author ? { "@type": "Person", name: post.author } : undefined,
            publisher: { "@id": businessId },
          },
        ],
      }} />
      <main id="main-content" tabIndex={-1}>
        <section className="pt-28 pb-16 lg:pt-32 lg:pb-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              {t("backToBlog")}
            </Link>

            <article className={post.coverImage ? "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start" : "max-w-3xl"}>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  <time dateTime={post.publishedDate}>
                    {new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(post.publishedDate))}
                  </time>
                  {post.author && <> · <bdi>{post.author}</bdi></>}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                  {post.title}
                </h1>
                {documentToReactComponents(post.content, renderOptions(locale))}
                {related && (
                  <aside className="mt-10 border-t border-border pt-6">
                    <h2 className="font-serif text-2xl font-bold mb-3">{t("relatedWorkshop")}</h2>
                    <Link href={`/workshops/${related}`} className="font-medium underline underline-offset-4">
                      {workshops(`${related}.title`)}
                    </Link>
                  </aside>
                )}
              </div>

              {post.coverImage && (
                <div className="rounded-xl overflow-hidden max-w-[400px] mx-auto lg:mx-0">
                  <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.alt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 448px) 400px, calc(100vw - 3rem)"
                    className="w-full h-auto"
                  />
                </div>
              )}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
