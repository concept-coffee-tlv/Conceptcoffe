import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllBlogPosts } from "@/lib/contentful"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"

export const revalidate = 60 // Revalidate every 60 seconds

export const metadata = {
  title: "Blog | concept:coffee",
  description: "Stories, insights, and updates from our coffee journey.",
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Blog</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Stories & Insights
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Stories, insights, and updates from our coffee journey
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No blog posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all"
                  >
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverImage.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                        {format(new Date(post.publishedDate), "MMMM d, yyyy")}
                      </p>
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
