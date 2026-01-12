import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CorporateCTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">Ready to Plan Your Team Event?</h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Let's create something memorable for your team. Reach out and we'll put together a custom proposal within
              24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-medium">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-medium bg-transparent"
              >
                <a href="mailto:corporate@concept-coffee.com">corporate@concept-coffee.com</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/corporate-coffee-experience-professional-setting.jpg"
                alt="Professional corporate coffee workshop setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
