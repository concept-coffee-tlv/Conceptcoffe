import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const offerings = [
  {
    title: "Public Workshops",
    tagline: "Join our open sessions",
    description:
      "Learn alongside fellow coffee enthusiasts in our scheduled workshops. Perfect for individuals, couples, or friends.",
    href: "/workshops",
    image: "/group-coffee-workshop-people-learning-barista-skil.jpg",
    cta: "View Schedule & Book",
    highlights: ["From €55 per person", "2-4 people per session", "Weekly sessions available"],
    bestFor: "Individuals & Small Groups",
  },
  {
    title: "Corporate Events",
    tagline: "Team building with a twist",
    description:
      "Engage your team with hands-on coffee experiences. We customize every session to your group size and goals.",
    href: "/corporate",
    image: "/corporate-team-building-coffee-event-professional-.jpg",
    cta: "Request a Quote",
    highlights: ["Tailored to your team", "10-50+ participants", "On-site or at our studio"],
    bestFor: "Companies & Organizations",
  },
  {
    title: "Private Sessions",
    tagline: "Your own coffee journey",
    description:
      "One-on-one or small group sessions tailored entirely to you. Celebrate special occasions or simply treat yourself.",
    href: "/private",
    image: "/private-coffee-lesson-espresso-machine-intimate-se.jpg",
    cta: "Plan Your Experience",
    highlights: ["Fully customizable", "1-6 people", "Flexible scheduling"],
    bestFor: "Special Occasions & Personal Learning",
  },
]

export function Offerings() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">Choose Your Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Three Ways to Learn Coffee
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Not sure which is right for you? Here's a quick guide to help you find the perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-accent/50"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={offering.image || "/placeholder.svg"}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    {offering.bestFor}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-sm font-medium text-accent mb-1">{offering.tagline}</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{offering.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{offering.description}</p>

                <ul className="space-y-2 mb-6">
                  {offering.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={offering.href}>
                    {offering.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
