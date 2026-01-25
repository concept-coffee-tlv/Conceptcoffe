import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import Image from "next/image"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const revalidate = 60 // Revalidate every 60 seconds

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Rich text rendering options
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-10 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-foreground">
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { url, title } = node.data.target.fields.file
      const imageUrl = `https:${url}`
      return (
        <div className="my-10 relative w-full aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        className="text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                {format(new Date(post.publishedDate), "MMMM d, yyyy")}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="relative w-full aspect-[16/9] mb-12 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage.url}
                  alt={post.coverImage.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <article>
                {documentToReactComponents(post.content, renderOptions)}
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
