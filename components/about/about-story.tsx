import Image from "next/image"
import { useTranslations } from "next-intl"

export function AboutStory() {
  const t = useTranslations("aboutPage")

  const a11y = useTranslations("accessibility")

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("meetTheRoaster")}</h2>
            <p className="text-xl text-foreground font-medium mt-2">{t("evanIntro")}</p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t("evanBio")}
              </p>
              <p>
                {t("evanMission")}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/aboutus.jpg"
                alt={a11y("founderPhoto")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg">
              <p className="font-serif text-lg font-bold">Evan</p>
              <p className="text-sm text-primary-foreground/80">{t("evanRole")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
