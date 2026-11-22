import { PageStructuredData } from "@/components/structured-data"
import { Link } from "@/src/i18n/navigation"
import { audiencePagesPublished, pageMetadata, type LocalePageProps } from "@/lib/seo"
import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkshopHero, WorkshopsContent } from "@/components/workshops/workshop-types"

export const generateMetadata = pageMetadata("/workshops")

export default async function WorkshopsPage({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/workshops" />
      <main id="main-content" tabIndex={-1}>
        <WorkshopHero />
        <WorkshopsContent />
        {audiencePagesPublished && (
          <div className="mx-auto flex max-w-[1400px] flex-wrap gap-6 px-6 pb-16 font-medium underline underline-offset-4 lg:px-12">
            <Link href="/coffee-experiences-tel-aviv">{locale === "he" ? "חוויות קפה בתל אביב-יפו" : "Coffee experiences in Tel Aviv–Jaffa"}</Link>
            <Link href="/coffee-workshops-for-groups">{locale === "he" ? "סדנאות קפה לקבוצות" : "Coffee workshops for groups"}</Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
