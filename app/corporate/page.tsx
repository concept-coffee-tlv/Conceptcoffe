import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CorporateHero } from "@/components/corporate/corporate-hero"
import { CorporateBenefits } from "@/components/corporate/corporate-benefits"
import { CorporateFormats } from "@/components/corporate/corporate-formats"
import { CorporateProcess } from "@/components/corporate/corporate-process"
import { CorporateCTA } from "@/components/corporate/corporate-cta"

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
        <CorporateHero />
        <CorporateBenefits />
        <CorporateFormats />
        <CorporateProcess />
        <CorporateCTA />
      </main>
      <Footer />
    </>
  )
}
