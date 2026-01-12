import { Users, Lightbulb, Coffee, Heart } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Genuine Connection",
    description:
      "Step away from screens and meetings. Our workshops create space for real conversations and authentic team bonding.",
  },
  {
    icon: Lightbulb,
    title: "Creative Engagement",
    description:
      "Hands-on activities spark creativity and problem-solving. Teams learn to collaborate in new and unexpected ways.",
  },
  {
    icon: Coffee,
    title: "Memorable Experience",
    description:
      "No boring icebreakers here. Your team will talk about this experience for months—and they'll have the skills to prove it.",
  },
  {
    icon: Heart,
    title: "Inclusive Fun",
    description:
      "Coffee brings people together regardless of background or role. Everyone participates, everyone contributes.",
  },
]

export function CorporateBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why Coffee for Team Building?</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Coffee workshops offer something different—a shared experience that breaks down barriers and creates lasting
            memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
