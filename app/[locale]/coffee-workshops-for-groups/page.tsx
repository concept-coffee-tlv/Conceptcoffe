import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GroupInquiry } from "@/components/audience/group-inquiry"
import { WorkshopOptions } from "@/components/audience/workshop-options"
import { Button } from "@/components/ui/button"
import { PageStructuredData } from "@/components/structured-data"
import { TrackedAnchor } from "@/components/tracked-anchor"
import { groupCopy } from "@/lib/audience-content"
import { pageMetadata, requireAudiencePage, type LocalePageProps } from "@/lib/seo"
import { site } from "@/lib/site"
import { Link } from "@/src/i18n/navigation"
import { routing } from "@/src/i18n/routing"

export const generateMetadata = pageMetadata("/coffee-workshops-for-groups")

export default async function CoffeeGroupsPage({ params }: LocalePageProps) {
  requireAudiencePage()
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const copy = groupCopy[locale]

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/coffee-workshops-for-groups" name={copy.title} service />
      <main id="main-content" tabIndex={-1}>
        <section className="bg-secondary pt-32 pb-14 lg:pt-40 lg:pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-9 px-6 lg:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance lg:text-6xl">{copy.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
              <Button size="lg" className="mt-7" asChild>
                <a href="#group-inquiry">{copy.cta}</a>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/corporate2.jpeg" alt={copy.photo} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" preload />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-7 font-serif text-3xl font-bold">{copy.optionsTitle}</h2>
          <WorkshopOptions options={copy.options} />
        </section>
        <section className="bg-secondary">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-serif text-3xl font-bold">{copy.logisticsTitle}</h2>
            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              {copy.logistics.map(({ heading, text }) => (
                <div key={heading}>
                  <h3 className="font-semibold">{heading}</h3>
                  <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <Link href="/corporate" className="mt-6 inline-block font-medium underline underline-offset-4">{copy.corporate}</Link>
          </div>
        </section>
        <section id="group-inquiry" tabIndex={-1} className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16">
          <h2 className="font-serif text-3xl font-bold">{copy.askTitle}</h2>
          <GroupInquiry copy={copy.form} locale={locale} />
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium underline underline-offset-4">
            <TrackedAnchor href={`mailto:${site.email}`} event="group_inquiry_clicked" properties={{ locale, channel: "email" }}>
              <bdi>{site.email}</bdi>
            </TrackedAnchor>
            <TrackedAnchor href={site.whatsapp} event="group_inquiry_clicked" properties={{ locale, channel: "whatsapp" }}>
              {copy.form.whatsapp}
            </TrackedAnchor>
            <Link href="/policy">{copy.form.privacy}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
