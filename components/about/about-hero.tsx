"use client"

import { useTranslations } from "next-intl"

export function AboutHero() {
  const t = useTranslations("aboutPage")

  return (
    <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("eyebrow")}</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("intro")}
          </p>
        </div>
      </div>
    </section>
  )
}
