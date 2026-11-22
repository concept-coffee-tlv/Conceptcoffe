import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { WorkshopOptions } from "@/components/audience/workshop-options"
import { PageStructuredData } from "@/components/structured-data"
import { TrackedAnchor } from "@/components/tracked-anchor"
import { visitorCopy } from "@/lib/audience-content"
import { pageMetadata, requireAudiencePage, type LocalePageProps } from "@/lib/seo"
import { site, studioAddress } from "@/lib/site"
import { Link } from "@/src/i18n/navigation"
import { routing } from "@/src/i18n/routing"

export const generateMetadata = pageMetadata("/coffee-experiences-tel-aviv")

export default async function CoffeeExperiencesPage({ params }: LocalePageProps) {
  requireAudiencePage()
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const copy = visitorCopy[locale]
  const address = studioAddress(locale)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${studioAddress("en")}, Israel`)}`

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/coffee-experiences-tel-aviv" name={copy.title} service />
      <main id="main-content" tabIndex={-1}>
        <section className="bg-secondary pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-6 lg:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance lg:text-6xl">{copy.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" asChild><Link href="/workshops">{copy.workshops}</Link></Button>
                <Button size="lg" variant="outline" asChild>
                  <TrackedAnchor
                    href={`${site.whatsapp}?text=${encodeURIComponent(copy.inquiry)}`}
                    event="visitor_inquiry_clicked"
                    properties={{ locale, channel: "whatsapp" }}
                  >
                    {copy.ask}
                  </TrackedAnchor>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/about/studio.avif" alt={copy.photo} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" preload />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-7 font-serif text-3xl font-bold">{copy.optionsTitle}</h2>
          <WorkshopOptions options={copy.options} />
        </section>
        <section className="bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-serif text-3xl font-bold">{copy.questionsTitle}</h2>
            <dl className="mt-7 grid gap-7 sm:grid-cols-2">
              {copy.questions.map(({ question, answer }) => (
                <div key={question}>
                  <dt className="font-semibold">{question}</dt>
                  <dd className="mt-2 max-w-prose leading-relaxed text-muted-foreground">{answer}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 border-t border-border pt-6">
              <h2 className="font-serif text-2xl font-bold">{copy.location}</h2>
              <p className="mt-2">{address}</p>
              <a href={mapUrl} className="inline-block mt-3 font-medium underline underline-offset-4">{copy.directions}</a>
            </div>
            <Link href="/coffee-workshops-for-groups" className="mt-6 inline-block font-medium underline underline-offset-4">{copy.groups}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
