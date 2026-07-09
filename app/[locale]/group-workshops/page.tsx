import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GroupWorkshopsHero, GroupWorkshopsContent } from "@/components/group-workshops/group-workshops"

export const metadata = {
  title: "Group Workshops | concept:coffee",
  description:
    "Bring your friends, colleagues, or team together for an unforgettable coffee learning experience in Tel Aviv.",
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function GroupWorkshopsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <GroupWorkshopsHero />
        <GroupWorkshopsContent />
      </main>
      <Footer />
    </>
  )
}
