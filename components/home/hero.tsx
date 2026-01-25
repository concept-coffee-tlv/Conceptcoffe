import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-background">5.0/5 on Google</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium text-background">500+ workshops hosted</span>
            </div>
          </div>

          <Image
            src="/images/concept-20coffee-20logo.avif"
            alt="Concept:Coffee"
            width={600}
            height={150}
            className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
            priority
          />
          <p className="mt-6 text-lg md:text-xl text-background/90 leading-relaxed max-w-xl mx-auto">
          COFFEE IS BETTER WHEN SHARED
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-background/80">
            <Link href="/workshops" className="hover:text-background underline-offset-4 hover:underline">
              Workshops
            </Link>
            <Link href="/corporate" className="hover:text-background underline-offset-4 hover:underline">
              Corporate Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
