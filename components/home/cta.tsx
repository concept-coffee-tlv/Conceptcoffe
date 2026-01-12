import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Ready to Start Your Coffee Journey?
        </h2>
        <p className="mt-6 text-lg text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Whether you're a curious beginner or a seasoned enthusiast, there's always more to discover in the world of
          specialty coffee.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-medium">
            <Link href="/workshops">View All Workshops</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-medium bg-transparent"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
