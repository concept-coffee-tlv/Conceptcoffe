"use client"

import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"

export default function CommunityPage() {
  const t = useTranslations("communityPage")
  const locale = useLocale()
  const monkeybookUrl = `https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/6a4148a809b1c4079682c65b?language=${locale}`

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left side - Text content */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  {t("eyebrow")}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t("title")}
                </h1>
                <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>{t("paragraph1")}</p>
                  <p>{t("paragraph2")}</p>
                  <p className="text-foreground font-medium">{t("paragraph3")}</p>
                </div>
                <div className="mt-10 text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <a href="https://chat.whatsapp.com/FyXHxTZL0DN5bhYPdcQ8Qh" target="_blank" rel="noopener noreferrer">
                      {t("cta")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="rounded-xl overflow-hidden max-w-[320px] mx-auto">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/videos/community.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <div className="text-center mb-10">
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-3">
                {t("eventsEyebrow")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t("eventsTitle")}
              </h2>
            </div>

            <div
              className="monkeybook-widget-container min-h-[560px]"
              data-iframe-src={monkeybookUrl}
            />

            <Script
              src="https://widget.monkeybook.io/widget.js?account=695c2746b187ec242a817de4"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
