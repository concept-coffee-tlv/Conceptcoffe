export function AboutStory() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Meet The Roaster</h2>
            <p className="text-xl text-foreground font-medium mt-2">Hi, I'm Evan.</p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                concept:coffee is my passion project turned small business with big dreams. With over half a decade of experience in coffee and a Specialty Coffee Association roasting certification, I noticed a growing gap between coffee geeks and everyday coffee drinkers, and a lack of an organizer in the specialty coffee community.
              </p>
              <p>
                At concept:coffee, we believe in empowering everyday coffee drinkers through accessible specialty coffee education. A more informed coffee drinker is a better coffee drinker, and coffee is always best when shared.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/evan.avif"
                alt="Evan, founder of concept:coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
              <p className="font-serif text-lg font-bold">Evan</p>
              <p className="text-sm text-primary-foreground/80">Founder & Roaster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
