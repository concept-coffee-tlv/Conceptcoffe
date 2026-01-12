import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "An incredible experience! Evan's passion for coffee is contagious. Our team left inspired and more connected than ever.",
    author: "Sarah M.",
    role: "HR Director, Tech Company",
    rating: 5,
  },
  {
    quote: "The latte art workshop exceeded all expectations. Professional, fun, and I finally made my first heart!",
    author: "Michael K.",
    role: "Coffee Enthusiast",
    rating: 5,
  },
  {
    quote:
      "We've done many team events, but this was by far the most engaging. Everyone participated and had a great time.",
    author: "Lisa van D.",
    role: "Team Lead, Creative Agency",
    rating: 5,
  },
]

const ratings = [
  { platform: "Google", rating: "5.0", count: 127 },
  { platform: "Tripadvisor", rating: "5.0", count: 84 },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {ratings.map((item) => (
            <div
              key={item.platform}
              className="flex items-center gap-3 bg-card px-5 py-3 rounded-full border border-border"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{item.rating}</span>
                <span className="text-muted-foreground"> on {item.platform}</span>
                <span className="text-muted-foreground text-xs ml-1">({item.count})</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">What People Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">Join 500+ coffee lovers who've experienced our workshops</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
