import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivateHero } from "@/components/private/private-hero"
import { PrivateOccasions } from "@/components/private/private-occasions"
import { PrivateCustomization } from "@/components/private/private-customization"
import { PrivateTestimonial } from "@/components/private/private-testimonial"
import { PrivateCTA } from "@/components/private/private-cta"

export const metadata = {
  title: "Private Sessions | concept:coffee",
  description:
    "Tailored one-on-one or small group coffee sessions. Perfect for birthdays, celebrations, or personalized learning experiences in Amsterdam.",
}

export default function PrivatePage() {
  return (
    <>
      <Header />
      <main>
        <PrivateHero />
        <PrivateOccasions />
        <PrivateCustomization />
        <PrivateTestimonial />
        <PrivateCTA />
      </main>
      <Footer />
    </>
  )
}
