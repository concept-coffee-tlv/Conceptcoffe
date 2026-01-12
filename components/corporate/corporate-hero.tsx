import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CorporateHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/corporate-team-building-coffee-event-professional-.jpg"
          alt="Corporate team enjoying a coffee workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-background/80 mb-4">Corporate & Business Events</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight text-balance">
            Rethink what you know about coffee!
          </h1>
          <p className="mt-6 text-lg md:text-xl text-background/90 leading-relaxed">
            Embark on an engaging guided tasting tour through coffee production. Learn about coffee cultivation and processing while sampling unique and exotic coffees roasted just for you.
          </p>
          <p className="mt-4 text-base md:text-lg text-background/80">
            Perfect for team building, happy hours, sparking curiosity and connection. At your office or our studio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-medium">
              <Link href="/contact">Let's brew something beautiful, together</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
