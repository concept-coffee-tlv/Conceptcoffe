import { Button } from "@/components/ui/button"
import { Clock, Users, ArrowRight } from "lucide-react"

const workshops = [
  {
    title: "Latte Art Fundamentals",
    description:
      "Master the basics of milk steaming and pouring. Learn to create hearts, tulips, and rosettas like a pro.",
    duration: "2.5 hours",
    groupSize: "4-8 people",
    level: "Beginner",
    price: "€75",
    image: "/coffee art.avif",
    popular: true,
  },
  {
    title: "Espresso Masterclass",
    description:
      "Dive deep into the world of espresso. Understand extraction, dialing in, and how to pull the perfect shot.",
    duration: "3 hours",
    groupSize: "4-6 people",
    level: "All Levels",
    price: "€85",
    image: "/coffe barista.avif",
    popular: false,
  },
  {
    title: "Brewing Methods 101",
    description:
      "Explore pour-over, French press, AeroPress, and more. Discover which brewing method suits your taste.",
    duration: "2 hours",
    groupSize: "6-10 people",
    level: "Beginner",
    price: "€65",
    image: "/specialty-coffee-workshop-hands-pouring-latte-art-.jpg",
    popular: false,
  },
  {
    title: "Coffee Tasting & Cupping",
    description:
      "Train your palate with a professional cupping session. Learn to identify flavors, origins, and quality.",
    duration: "1.5 hours",
    groupSize: "6-12 people",
    level: "All Levels",
    price: "€55",
    image: "/coffee cupping.avif",
    popular: true,
  },
  {
    title: "Coffee Roasting Workshop",
    description:
      "Discover the art and science of coffee roasting. Learn about roast profiles, development, and how to bring out the best flavors.",
    duration: "2.5 hours",
    groupSize: "4-8 people",
    level: "Intermediate",
    price: "€80",
    image: "/coffe roasting.avif",
    popular: false,
  },
  {
    title: "Custom Workshop Experience",
    description:
      "Design your perfect coffee experience. Choose topics, duration, and format. Ideal for special occasions or tailored learning.",
    duration: "Flexible",
    groupSize: "2-12 people",
    level: "All Levels",
    price: "From €150",
    image: "/custom coffe workshop.avif",
    popular: false,
  },
]

export function WorkshopList() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Available Workshops</h2>
            <p className="mt-2 text-muted-foreground">Choose a workshop and book your spot below</p>
          </div>
          <a
            href="#booking"
            className="text-accent font-medium hover:underline underline-offset-4 flex items-center gap-1"
          >
            Skip to booking calendar
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {workshop.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-accent">{workshop.level}</span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">{workshop.title}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-2xl font-bold text-foreground">{workshop.price}</span>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{workshop.description}</p>
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
                  <a href="#booking">
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
