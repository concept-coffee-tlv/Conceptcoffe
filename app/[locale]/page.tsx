import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Offerings } from "@/components/home/offerings"
import { AboutPreview } from "@/components/home/about-preview"
import { GoogleReviews } from "@/components/home/google-reviews"
import { CTA } from "@/components/home/cta"
import { FAQ } from "@/components/home/faq"
import { LocationMap } from "@/components/location-map"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <AboutPreview />
        <GoogleReviews />
        <CTA />
        <FAQ />
        <LocationMap showContactInfo />
      </main>
      <Footer />
    </>
  )
}
