import Image from "next/image"
import { hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GroupInquiry } from "@/components/audience/group-inquiry"
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
        <section className="bg-secondary px-6 pt-28 pb-10 lg:pt-36 lg:pb-12">
          <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-balance lg:text-5xl">{copy.title}</h1>
              <p className="mt-4 max-w-prose leading-relaxed text-muted-foreground sm:text-lg">{copy.intro}</p>
              <h2 className="mt-6 font-semibold">{copy.optionsTitle}</h2>
              <ul className="mt-2 list-disc space-y-1 ps-5 text-muted-foreground">
                {copy.options.map((option) => <li key={option}>{option}</li>)}
              </ul>
              <h2 className="mt-6 font-serif text-2xl font-bold">{copy.audienceTitle}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{copy.audience}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{copy.languages}</p>
              <a href="#group-inquiry" className="mt-4 inline-block font-medium underline underline-offset-4">{copy.inquiryLink}</a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-square">
              <Image
                src="/privateevent.JPG"
                alt={copy.photo}
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, calc(100vw - 3rem)"
                loading="eager"
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section id="group-inquiry" tabIndex={-1} aria-labelledby="group-inquiry-title" className="scroll-mt-24 px-6 py-10 lg:py-14">
          <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 id="group-inquiry-title" className="font-serif text-2xl font-bold">{copy.askTitle}</h2>
            <GroupInquiry copy={copy.form} locale={locale} />
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-sm underline underline-offset-4">
              <TrackedAnchor href={`mailto:${site.email}`} event="group_inquiry_clicked" properties={{ locale, channel: "email" }}>
                <bdi>{site.email}</bdi>
              </TrackedAnchor>
              <TrackedAnchor href={site.whatsapp} event="group_inquiry_clicked" properties={{ locale, channel: "whatsapp" }}>
                {copy.form.whatsapp}
              </TrackedAnchor>
              <Link href="/policy">{copy.form.privacy}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
