import { PageStructuredData } from "@/components/structured-data"
import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"
import { AboutSeenOn } from "@/components/about/about-seen-on"

export const generateMetadata = pageMetadata("/about")

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/about" />
      <main id="main-content" tabIndex={-1}>
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
