import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata = {
  title: "About Us | concept:coffee",
  description:
    "Learn about concept:coffee, Amsterdam's specialty coffee education studio. Meet founder Evan and discover our passion for sharing coffee knowledge.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
