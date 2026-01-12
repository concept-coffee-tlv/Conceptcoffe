import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Offerings } from "@/components/home/offerings"
import { AboutPreview } from "@/components/home/about-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <AboutPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
