"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"

export function CTA() {
  const t = useTranslations("cta")

  return (
    <section className="py-24 lg:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          {t("title")}
        </h2>
        <p className="mt-6 text-lg text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-medium">
            <Link href="/workshops">{t("button1")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 font-medium bg-transparent"
          >
            <Link href="/#contact">{t("button2")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
