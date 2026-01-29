import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/evan.avif"
                alt="Evan, founder of concept:coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg max-w-[200px]">
              <p className="font-serif text-3xl font-bold">5+</p>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Meet The Roaster</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Hi, I'm Evan 👋
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Concept:Coffee might look like a brand, but behind the scenes it’s very much a one-man show. I source and roast all the coffees for our workshops, design and lead the experiences, answer the messages—and yes, I’m also the one taking out the trash at the end of the day.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Concept:Coffee was built to make specialty coffee feel accessible, welcoming, and worth caring about. With years of hands-on experience and an SCA roasting certification, my goal is simple: empower everyday coffee drinkers with the knowledge they need to enjoy better coffee—together.
            </p>
            <Button
              asChild
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
