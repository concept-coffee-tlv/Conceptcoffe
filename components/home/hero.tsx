import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/coffe-20background.avif"
          alt="Coffee brewing with pour-over"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-background">5.0/5 on Google</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium text-background">500+ workshops hosted</span>
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] text-balance">
            Learn the Art of Coffee
          </h1>
          <p className="mt-6 text-lg md:text-xl text-background/90 leading-relaxed max-w-xl">
            Hands-on workshops, corporate experiences, and private sessions. Discover the craft of specialty coffee with
            expert guidance in Amsterdam.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
            >
              <Link href="/workshops">
                Book a Workshop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background/10 font-medium bg-transparent"
            >
              <Link href="/corporate">For Companies</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/80">
            <Link href="/workshops" className="hover:text-background underline-offset-4 hover:underline">
              Public Workshops
            </Link>
            <Link href="/corporate" className="hover:text-background underline-offset-4 hover:underline">
              Corporate Events
            </Link>
            <Link href="/private" className="hover:text-background underline-offset-4 hover:underline">
              Private Sessions
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-sm font-medium">LATTE ART</span>
              <span className="text-accent">•</span>
              <span className="mx-8 text-sm font-medium">BREWING METHODS</span>
              <span className="text-accent">•</span>
              <span className="mx-8 text-sm font-medium">ESPRESSO FUNDAMENTALS</span>
              <span className="text-accent">•</span>
              <span className="mx-8 text-sm font-medium">COFFEE TASTING</span>
              <span className="text-accent">•</span>
              <span className="mx-8 text-sm font-medium">TEAM BUILDING</span>
              <span className="text-accent">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
