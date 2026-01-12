import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PrivateHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Private Sessions</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your Personal Coffee Journey
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether it's a birthday celebration, a special date, or simply a desire to learn at your own pace—we
              create bespoke coffee experiences tailored just for you.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                <Link href="/contact">Inquire About Private Sessions</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/private-coffee-session-intimate-learning.jpg"
                alt="Private coffee session in intimate setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
