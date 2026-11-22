import { getTranslations, setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { articlePath, getBlogPosts } from "@/lib/contentful"
import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import { PageStructuredData } from "@/components/structured-data"
import { Link } from "@/src/i18n/navigation"
import Image from "next/image"

export const revalidate = 60 // Revalidate every 60 seconds

export const generateMetadata = pageMetadata("/blog")

export default async function BlogPage({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: "blogPage" })
  const posts = await getBlogPosts()
  const translations = posts.filter((post) => post.locale === locale)
  const english = locale === "he" ? posts.filter((post) => post.locale === "en" && !translations.some(({ id }) => id === post.id)) : []
  const articles = [...translations, ...english]

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/blog" name={t("eyebrow")} />
      <main id="main-content" tabIndex={-1}>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("eyebrow")}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            {articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {t("noPosts")}
                </p>
              </div>
            ) : (
              <>
                {english.length > 0 && <p className="mb-8 text-muted-foreground">{t("englishNotice")}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((post) => (
                    <Link
                      key={`${post.locale}/${post.slug}`}
                      href={articlePath(post.slug)}
                      locale={post.locale === locale ? undefined : post.locale}
                      hrefLang={post.locale}
                      lang={post.locale}
                      dir={post.locale === "he" ? "rtl" : "ltr"}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all"
                    >
                      {post.coverImage && <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={post.coverImage.url}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>}
                      <div className="p-6">
                        <time dateTime={post.publishedDate} className="block text-xs text-accent font-medium uppercase tracking-wider mb-2">
                          {new Intl.DateTimeFormat(post.locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(post.publishedDate))}
                        </time>
                        <h2 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
