import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const brands = [
  { name: "Nespresso", logo: "/brands/nespresso.avif" },
  { name: "Sarona", logo: "/brands/sarona.avif" },
  { name: "Anzu", logo: "/brands/anzu.avif" },
  { name: "Citrus and Salt", logo: "/brands/citrusandsalt.avif" },
]

export const metadata = {
  title: "Corporate Events | concept:coffee",
  description:
    "Unique team-building coffee experiences for companies in Tel Aviv. Engage your team with hands-on workshops that foster connection and creativity.",
}

export default function CorporatePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Text content */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Corporate Events
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Elevate your next team experience through coffee.
                </h1>
                <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our corporate workshops are guided tasting experiences designed to encourage collaboration, curiosity, and shared learning. Teams explore the journey of coffee from cultivation to cup while tasting a curated selection of coffees roasted specifically for the session.
                  </p>
                  <p>
                    Ideal for team building, off-sites, and hosted happy hours, Coffee: A Concept creates meaningful connection through a structured, engaging learning experience  leaving teams more connected, inspired, and energized!
                  </p>
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <Link href="https://wa.me/972584001289" target="_blank" rel="noopener noreferrer">
                      Contact Now
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Videos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/corporate.mov" type="video/mp4" />
                  </video>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/corporatevideo2.MOV" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands section */}
        <section className="py-12 lg:py-16 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent-foreground mb-10">
              Trusted by
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brands.map((brand) => (
                <div key={brand.name} className="relative h-20 brightness-0 invert">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
