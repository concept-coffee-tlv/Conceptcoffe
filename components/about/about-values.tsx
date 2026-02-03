"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export function AboutValues() {
  const t = useTranslations("aboutPage")

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("valuesTitle")}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("valuesSubtitle")}
          </p>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {/* Row 1: Image left, Text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
              <Image
                src="/about/mission.avif"
                alt={t("missionTitle")}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{t("missionTitle")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("missionText")}
              </p>
            </div>
          </div>

          {/* Row 2: Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:pr-8 order-2 lg:order-1">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{t("studioTitle")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("studioText")}
              </p>
            </div>
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/about/studio.avif"
                alt={t("studioTitle")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
