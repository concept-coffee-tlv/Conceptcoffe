import { PageStructuredData } from "@/components/structured-data"
import { pageMetadata, type LocalePageProps } from "@/lib/seo"
import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GroupWorkshopsHero, GroupWorkshopsContent } from "@/components/group-workshops/group-workshops"

export const generateMetadata = pageMetadata("/group-workshops")

export default async function GroupWorkshopsPage({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <PageStructuredData locale={locale} path="/group-workshops" />
      <main id="main-content" tabIndex={-1}>
        <GroupWorkshopsHero locale={locale} />
        <GroupWorkshopsContent locale={locale} />
      </main>
      <Footer />
    </>
  )
}
