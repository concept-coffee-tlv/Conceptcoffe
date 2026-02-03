import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"
import { AboutSeenOn } from "@/components/about/about-seen-on"

export const metadata = {
  title: "About Us | concept:coffee",
  description:
    "Learn about concept:coffee, Tel Aviv's specialty coffee education studio. Meet founder Evan and discover our passion for sharing coffee knowledge.",
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutSeenOn />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
