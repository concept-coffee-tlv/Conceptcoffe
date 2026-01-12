const values = [
  {
    title: "Hands-On Learning",
    description:
      "Reading about coffee isn't the same as doing it. Our workshops are practical, tactile, and designed for maximum participation.",
  },
  {
    title: "Welcoming Environment",
    description:
      "No pretension, no judgment. Whether you're a complete beginner or a seasoned enthusiast, you'll feel at home.",
  },
  {
    title: "Quality Obsession",
    description:
      "We source exceptional beans, maintain our equipment meticulously, and never cut corners on the experience.",
  },
  {
    title: "Sustainable Practices",
    description:
      "From ethically sourced coffee to minimal waste, we're committed to practices that respect people and planet.",
  },
]

export function AboutValues() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our values guide everything we do, from how we source our coffee to how we run our workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
