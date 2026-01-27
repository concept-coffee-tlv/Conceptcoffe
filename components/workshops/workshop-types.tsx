"use client"

import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Clock, Users, ArrowRight } from "lucide-react"

const workshops = [
  {
    id: "tasting",
    title: "Tasting",
    image: "/images/tasting.avif",
    description:
      "Our most accessible workshop—designed for everyday coffee lovers who are ready to go beyond the buzz. No prior knowledge needed.",
    highlights: [
      "Flavor profiling basics",
      "Origin and processing impact",
      "Guided tasting of 3–5 brews",
    ],
    duration: "90 minutes",
    groupSize: "1-6 people",
    level: "Beginner",
  },
  {
    id: "barista",
    title: "Barista",
    image: "/images/barista.avif",
    description:
      "A hands-on intro to espresso, milk, and barista fundamentals. No jargon—just practical skills practiced on real equipment.",
    highlights: [
      "Espresso technique and extraction",
      "Dialing in your shots",
      "Milk steaming and latte art",
    ],
    duration: "2 hours",
    groupSize: "1-4 people",
    level: "Beginner",
  },
  {
    id: "roasting",
    title: "Roasting",
    image: "/images/roasting.avif",
    description:
      "From green bean to roasted brilliance—demystify the roasting process and discover how it shapes everything you taste in the cup.",
    highlights: [
      "Time, temperature, and technique",
      "Light, medium, and dark profiles",
      "Take home fresh-roasted coffee",
    ],
    duration: "2 hours",
    groupSize: "1-4 people",
    level: "Beginner",
  },
  {
    id: "cupping",
    title: "Cupping",
    image: "/images/cupping.avif",
    description:
      "The professional tasting method used in sourcing and quality control. Build your palate and gain confidence describing what's in your cup.",
    highlights: [
      "Aroma, acidity, body, and balance",
      "Cup 4–5 coffees side-by-side",
      "Develop your tasting vocabulary",
    ],
    duration: "2 hours",
    groupSize: "2-6 people",
    level: "All Levels",
  },
  {
    id: "custom",
    title: "Custom",
    image: "/images/custom.avif",
    description:
      "Completely customizable and scheduled at a time that works for you. We'll guide you step by step through your chosen focus.",
    highlights: [
      "Espresso, latte art, or filter",
      "Cupping and sensory training",
      "Flexible timing and format",
    ],
    duration: "Flexible",
    groupSize: "1-6 people",
    level: "All Levels",
  },
]

export function WorkshopHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">Private Sessions</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Your Personal Coffee Journey
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Choose the experience that speaks to you. Each workshop is fully customizable and tailored to your group's level, interests, and pace.
          </p>
        </div>
      </div>
    </section>
  )
}

export function WorkshopBooking() {
  return (
    <section id="book" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Book Your Workshop
          </h2>
          <p className="mt-2 text-muted-foreground">
            Select a date and time that works for you
          </p>
        </div>

        <div
          className="monkeybook-widget-container"
          data-iframe-src="https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/695c274cbc49194459c67fe5?"
        />

        <Script
          src="https://widget.monkeybook.io/widget.js?account=695c2746b187ec242a817de4"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}

export function WorkshopTypes() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Available Workshops</h2>
          <p className="mt-2 text-muted-foreground">Choose a workshop and book your private session</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">{workshop.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{workshop.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {workshop.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{workshop.groupSize}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#book">
                    Book This Workshop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
