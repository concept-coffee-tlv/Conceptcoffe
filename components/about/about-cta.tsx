"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  const t = useTranslations("aboutPage")

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("ctaTitle")}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("ctaSubtitle")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link href="/workshops">{t("ctaButton1")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-medium bg-transparent"
            >
              <Link href="/#contact">{t("ctaButton2")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
