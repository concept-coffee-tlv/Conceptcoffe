"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

const workshopIds = ["tasting", "barista", "roasting", "cupping", "latteart", "custom"] as const
type WorkshopId = typeof workshopIds[number]

const workshopImages: Record<WorkshopId, string> = {
  tasting: "/images/tasting.avif",
  barista: "/images/barista.avif",
  roasting: "/images/roasting.avif",
  cupping: "/images/cupping.avif",
  latteart: "/latteart.avif",
  custom: "/images/custom.avif",
}

export function WorkshopHero() {
  const t = useTranslations("workshopsPage")

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
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

export function WorkshopTypes() {
  const t = useTranslations("workshopsPage")

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("sectionTitle")}</h2>
          <p className="mt-2 text-muted-foreground">{t("sectionSubtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {workshopIds.map((workshopId) => {
            const cardContent = (
              <>
                <div className="aspect-[16/9] overflow-hidden relative">
                  <Image
                    src={workshopImages[workshopId]}
                    alt={t(`workshops.${workshopId}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                    {t(`workshops.${workshopId}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed min-h-[130px]">
                    {t(`workshops.${workshopId}.description`)}
                  </p>
                  <ul className="space-y-1.5 mt-4 mb-6">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                        {t(`workshops.${workshopId}.feature${i}`)}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{t(`workshops.${workshopId}.duration`)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span>{t(`workshops.${workshopId}.capacity`)}</span>
                    </div>
                  </div>
                  <div className="w-full bg-primary text-primary-foreground text-center py-2 rounded-md font-medium">
                    {t("bookThisWorkshop")}
                  </div>
                </div>
              </>
            )

            const cardClasses = "group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all w-full lg:w-[calc(33.333%-1.34rem)] cursor-pointer"

            return (
              <Link
                key={workshopId}
                href={`/workshops/${workshopId}`}
                className={cardClasses}
              >
                {cardContent}
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            {t("contactPrompt")}
          </p>
          <Button
            asChild
            variant="outline"
            className="font-medium"
          >
            <a href="https://wa.me/972584001289" target="_blank" rel="noopener noreferrer">
              {t("contactUs")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export function WorkshopsContent() {
  return (
    <>
      <WorkshopTypes />
    </>
  )
}
