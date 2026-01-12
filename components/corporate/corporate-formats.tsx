const formats = [
  {
    title: "Team Workshop",
    size: "8-20 people",
    duration: "2-3 hours",
    description:
      "Perfect for department outings or project team celebrations. Learn latte art, espresso basics, or brewing methods together.",
    includes: ["Hands-on instruction", "All equipment & materials", "Coffee to take home", "Light refreshments"],
  },
  {
    title: "Company Event",
    size: "20-50 people",
    duration: "Half-day",
    description:
      "Ideal for larger gatherings, offsites, or company-wide events. Multiple stations and activities keep everyone engaged.",
    includes: ["Multiple workshop stations", "Team competitions", "Catering options", "Customizable program"],
  },
  {
    title: "Executive Experience",
    size: "4-10 people",
    duration: "2-3 hours",
    description:
      "An intimate experience for leadership teams or client entertainment. Premium setting with personalized attention.",
    includes: ["Premium coffee selection", "Exclusive venue options", "Personalized curriculum", "Networking time"],
  },
]

export function CorporateFormats() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Choose Your Format</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer flexible formats to suit your team size, goals, and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((format, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{format.title}</h3>
              <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                <span>{format.size}</span>
                <span>•</span>
                <span>{format.duration}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{format.description}</p>
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Includes:</p>
                <ul className="space-y-2">
                  {format.includes.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
