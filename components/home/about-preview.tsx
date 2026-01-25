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
              Hi, I'm Evan
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              concept:coffee is my passion project turned small business with big dreams. With over half a decade of experience in coffee and a Specialty Coffee Association roasting certification, I noticed a growing gap between coffee geeks and everyday coffee drinkers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At concept:coffee, we believe in empowering everyday coffee drinkers through accessible specialty coffee education. A more informed coffee drinker is a better coffee drinker, and coffee is always best when shared.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-8 border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
