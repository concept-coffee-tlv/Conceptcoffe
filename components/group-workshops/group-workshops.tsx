"use client"

import Image from "next/image"
import { useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Calendar, MapPin, Sparkles } from "lucide-react"

export function GroupWorkshopsHero() {
  const t = useTranslations("groupWorkshopsPage")
  const locale = useLocale()
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

export function GroupWorkshopsContent() {
  const locale = useLocale()
  const language = locale === "he" ? "he" : "en"
  const isHebrew = locale === "he"

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widget.monkeybook.io/widget.js?account=695c2746b187ec242a817de4"
    script.defer = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section dir={isHebrew ? "rtl" : "ltr"} lang={locale} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="monkeybook-widget-container" data-iframe-src={`https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/6a65f8ac1789f138f9f8213f?language=${language}`}></div>
          <div className="monkeybook-widget-container" data-iframe-src={`https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/6a65f5846b56da2cd6b85be1?language=${language}`}></div>
        </div>
      </div>
    </section>
  )
}
