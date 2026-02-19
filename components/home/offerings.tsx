"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { CheckCircle2 } from "lucide-react"

export function Offerings() {
  const t = useTranslations()
  const tChoose = useTranslations("chooseExperience")
  const tPrivate = useTranslations("privateSessions")
  const tCorporate = useTranslations("corporateEvents")

  const offerings = [
    {
      title: tPrivate("title"),
      tagline: tPrivate("subtitle"),
      description: tPrivate("description"),
      href: "/workshops",
      image: "/privateevent.JPG",
      cta: tPrivate("cta"),
      highlights: [tPrivate("feature1"), tPrivate("feature2"), tPrivate("feature3")],
      bestFor: tPrivate("eyebrow"),
    },
    {
      title: tCorporate("title"),
      tagline: tCorporate("subtitle"),
      description: tCorporate("description"),
      href: "/corporate",
      image: "/corporatenew.png",
      cta: tCorporate("cta"),
      highlights: [tCorporate("feature1"), tCorporate("feature2"), tCorporate("feature3")],
      bestFor: tCorporate("eyebrow"),
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
            {tChoose("sectionTitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            {tChoose("sectionSubtitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {tChoose("sectionDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {offerings.map((offering) => (
            <Link
              key={offering.title}
              href={offering.href}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-accent/50 flex flex-col cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={offering.image || "/placeholder.svg"}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 start-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                    {offering.bestFor}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-sm font-medium text-accent mb-1">{offering.tagline}</p>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{offering.title}</h3>
                <p className="text-muted-foreground leading-relaxed min-h-[150px]">{offering.description}</p>

                <ul className="space-y-2 mt-4 mb-6">
                  {offering.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="w-full bg-primary text-primary-foreground text-center py-2 rounded-md font-medium">
                  {offering.cta}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
