import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkshopHero, WorkshopsContent } from "@/components/workshops/workshop-types"

export const metadata = {
  title: "Coffee Workshops | concept:coffee",
  description:
    "Hands-on coffee workshops in Tel Aviv. Learn tasting, barista skills, roasting, cupping and more in personalized sessions.",
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function WorkshopsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <WorkshopHero />
        <WorkshopsContent />
      </main>
      <Footer />
    </>
  )
}
