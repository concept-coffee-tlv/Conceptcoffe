import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PrivateCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Let's Create Your Experience</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Tell us about your occasion, interests, and group size. We'll craft a custom proposal and quote within 48
            hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/contact">Start Planning</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium bg-transparent"
            >
              <Link href="/workshops">View Public Workshops</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Private sessions start from €150. Final pricing depends on group size and customizations.
          </p>
        </div>
      </div>
    </section>
  )
}
