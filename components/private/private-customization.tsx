const features = [
  {
    title: "Choose Your Focus",
    description:
      "Latte art, espresso technique, brewing methods, or a mix—design your session around what interests you most.",
  },
  {
    title: "Flexible Scheduling",
    description: "Mornings, evenings, weekends—we work with your schedule to find the perfect time for your session.",
  },
  {
    title: "Group Size Options",
    description: "From intimate one-on-one sessions to small groups of up to 6 people. The choice is yours.",
  },
  {
    title: "Add-Ons Available",
    description:
      "Enhance your experience with extras like champagne service, professional photography, or custom gift bags.",
  },
]

export function PrivateCustomization() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Fully Customizable</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Your private session is exactly that—private. We tailor every aspect to create an experience that's
              perfect for you.
            </p>

            <div className="mt-12 space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="/private-latte-art-session-close-up.jpg"
                alt="Close-up of latte art during private session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-lg mt-8">
              <img
                src="/private-coffee-brewing-hands-pour-over.jpg"
                alt="Pour over brewing during private session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
