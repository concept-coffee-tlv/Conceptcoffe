import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Community | concept:coffee",
  description:
    "Join the concept:coffee community. Connect with fellow coffee enthusiasts and be part of our growing coffee culture in Tel Aviv.",
}

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left side - Text content */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Community
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Join The Concept:Community
                </h1>
                <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Whether you’re a coffee pro, a curious beginner, or just looking for a fun way to meet new people, Concept:Community events bring coffee lovers of all levels together. It’s a space to learn, connect, and celebrate coffee in a relaxed, welcoming environment.
                  </p>
                  <p>
                    The Concept:Community WhatsApp is the best way to stay updated on upcoming community events and collaborations, many of which are free or symbolically priced. It’s also a place to share brewing tips, ask questions, and get coffee shop recommendations from people who care just as much as you do.
                  </p>
                  <p className="text-foreground font-medium">
                    Join our WhatsApp community to stay updated and connect with fellow coffee lovers!
                  </p>
                </div>
                <div className="mt-10 text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <Link href="https://chat.whatsapp.com/FyXHxTZL0DN5bhYPdcQ8Qh" target="_blank" rel="noopener noreferrer">
                      Join the WhatsApp Community
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="rounded-xl overflow-hidden max-w-[320px] mx-auto">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/videos/community.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
