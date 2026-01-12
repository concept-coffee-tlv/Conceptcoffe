const steps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Tell us about your team, goals, and preferred dates. We'll respond within 24 hours.",
  },
  {
    number: "02",
    title: "Custom Proposal",
    description: "Receive a tailored proposal with format recommendations, pricing, and logistics.",
  },
  {
    number: "03",
    title: "Confirmation",
    description: "Once confirmed, we handle all the details. You just need to show up ready to learn.",
  },
  {
    number: "04",
    title: "Experience",
    description: "Enjoy an unforgettable team experience. We'll capture the highlights for you to share.",
  },
]

export function CorporateProcess() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center lg:text-left">
              <span className="font-serif text-4xl font-bold text-accent/30">{step.number}</span>
              <h3 className="font-serif text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
