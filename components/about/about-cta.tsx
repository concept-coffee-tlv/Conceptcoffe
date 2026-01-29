import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Come Learn With Us</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Whether you're looking to learn a new skill, celebrate a special occasion, or bring your team together—we'd
            love to meet you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/workshops">Explore Workshops</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium bg-transparent"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
