"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/herovideo_compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/conceptcoffeelogo.png"
            alt="Concept:Coffee"
            width={1000}
            height={250}
            className="h-40 md:h-56 lg:h-72 w-auto mx-auto"
            priority
          />
          <p className="mt-3 text-xl md:text-2xl lg:text-3xl text-background/90 mx-auto">
            {t("tagline")}
          </p>
          <p className="mt-4 text-base text-background/70 leading-relaxed max-w-lg mx-auto">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
            >
              <Link href="/workshops">
                {t("cta1")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background/10 font-medium bg-transparent"
            >
              <Link href="/corporate">{t("cta2")}</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1.5 bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-background">{t("badge1")}</span>
            </div>
            <div className="bg-background/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium text-background">{t("badge2")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
