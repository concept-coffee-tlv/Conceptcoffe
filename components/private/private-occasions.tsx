import { Gift, Heart, GraduationCap, PartyPopper } from "lucide-react"

const occasions = [
  {
    icon: Gift,
    title: "Birthday Celebrations",
    description: "Give the gift of a unique experience. Perfect for coffee lovers who have everything.",
  },
  {
    icon: Heart,
    title: "Date Night",
    description: "Something different from dinner and drinks. Create memories while learning a new skill together.",
  },
  {
    icon: GraduationCap,
    title: "Personal Development",
    description: "Focus on specific skills at your own pace. From beginner basics to advanced techniques.",
  },
  {
    icon: PartyPopper,
    title: "Small Celebrations",
    description: "Bachelor/bachelorette parties, anniversaries, or just because. We make any occasion special.",
  },
]

export function PrivateOccasions() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Perfect For Any Occasion</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Private sessions offer flexibility and personalization that group workshops can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {occasions.map((occasion, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <occasion.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">{occasion.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{occasion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
