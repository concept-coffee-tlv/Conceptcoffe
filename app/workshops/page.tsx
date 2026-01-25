import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkshopHero, WorkshopTypes, WorkshopBooking } from "@/components/workshops/workshop-types"

export const metadata = {
  title: "Coffee Workshops | concept:coffee",
  description:
    "Hands-on coffee workshops in Tel Aviv. Learn tasting, barista skills, roasting, cupping and more in personalized sessions.",
}

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main>
        <WorkshopHero />
        <WorkshopTypes />
        <WorkshopBooking />
      </main>
      <Footer />
    </>
  )
}
