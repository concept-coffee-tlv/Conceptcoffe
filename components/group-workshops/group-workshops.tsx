import Image from "next/image"
import { getTranslations } from "next-intl/server"

type GroupWorkshopsProps = {
  locale: string
}

export async function GroupWorkshopsHero({ locale }: GroupWorkshopsProps) {
  const t = await getTranslations("groupWorkshopsPage")
  const isHebrew = locale === "he"

  return (
    <section dir={isHebrew ? "rtl" : "ltr"} lang={locale} className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  )
}

export async function GroupWorkshopsContent({ locale }: GroupWorkshopsProps) {
  const t = await getTranslations("groupWorkshopsPage")
  const isHebrew = locale === "he"

  const sessions = [
    {
      id: "cupping",
      title: t("conceptCuppingTitle"),
      summary: t("conceptCuppingSummary"),
      bullets: [t("conceptCuppingBullet1"), t("conceptCuppingBullet2"), t("conceptCuppingBullet3")],
      image: "/images/cupping.avif",
    },
    {
      id: "history",
      title: t("coffeeHistoryTitle"),
      summary: t("coffeeHistorySummary"),
      bullets: [t("coffeeHistoryBullet1"), t("coffeeHistoryBullet2"), t("coffeeHistoryBullet3")],
      image: "/historyofcoffee.avif",
    },
  ]

  return (
    <section dir={isHebrew ? "rtl" : "ltr"} lang={locale} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
            {t("monthlySessionsEyebrow")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {t("monthlySessionsTitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("monthlySessionsSubtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all w-full lg:w-[calc(50%-1rem)]"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
                  {session.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center whitespace-pre-line">
                  {session.summary}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-muted-foreground text-left">
                  {session.bullets.map((bullet, index) => (
                    <li key={`${session.id}-${index}`} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://link.monkeybook.io/lm4svr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center bg-primary text-primary-foreground py-2 rounded-md font-medium transition-colors hover:bg-primary/90"
                >
                  {t("bookNow")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
