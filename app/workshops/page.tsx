import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkshopHero } from "@/components/workshops/workshop-hero"
import { WorkshopList } from "@/components/workshops/workshop-list"
import { BookingSection } from "@/components/workshops/booking-section"
import { WorkshopFAQ } from "@/components/workshops/workshop-faq"

export const metadata = {
  title: "Coffee Workshops | concept:coffee",
  description:
    "Join our hands-on coffee workshops in Tel Aviv. Learn latte art, brewing methods, espresso fundamentals, and more from expert baristas.",
}

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main>
        <WorkshopHero />
        <WorkshopList />
        <BookingSection />
        <WorkshopFAQ />
      </main>
      <Footer />
    </>
  )
}
