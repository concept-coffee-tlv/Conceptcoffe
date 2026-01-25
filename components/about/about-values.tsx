import Image from "next/image"

export function AboutValues() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our values guide everything we do, from how we source our coffee to how we run our workshops.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {/* Row 1: Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
              <Image
                src="/about/mission.avif"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the power of education and collaboration, and we’re here to make specialty coffee more accessible for everyone. 

​

Our goal is to build a community that values quality, sustainability, and education, helping people understand that every cup has a story—from farm to cup. At Concept:Coffee, it’s about more than just the coffee—it’s about building a culture of appreciation, creativity, and knowledge.
              </p>
            </div>
          </div>

          {/* Row 2: Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">The Studio</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Located at Yonatan Ratosh 2, designed and constructed by founder Evan Goel. The Concept:Coffee Studio is dedicated space where coffee education, creativity, and community collide. Located by the beautiful Jaffa port, our studio is a place where anyone—whether you're a curious beginner or a seasoned enthusiast—can immerse themselves in the world of specialty coffee. This is more than just a studio. It’s a creative hub, a learning space, and a community gathering point where people come together to share their love for coffee, creativity, and knowledge.
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/about/studio.avif"
                alt="The Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
