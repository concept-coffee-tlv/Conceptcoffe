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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Text content */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Community
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Join The Concept:Community
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  One community: 2 ways to get involved!
                </p>
                <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Are you a coffee pro, beginner, or maybe you're just looking for a fun way to meet new people? Concept:Community events are a place where enthusiasts of all levels come together to share their love of coffee! It's about learning, connecting, and celebrating coffee in a fun environment.
                  </p>
                  <p>
                    Want to stay updated on Concept:Community events and meet like-minded coffee people? The Concept:Community WhatsApp is the place to be! Never miss an event, share and learn valuable coffee brewing tricks, or just ask for a coffee shop recommendation in the Concept:WhatsApp Community!
                  </p>
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <Link href="https://chat.whatsapp.com/FyXHxTZL0DN5bhYPdcQ8Qh" target="_blank" rel="noopener noreferrer">
                      Join Now
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="rounded-xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/videos/corporate.mov" type="video/mp4" />
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
