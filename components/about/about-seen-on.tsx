use client"

import { useTranslations } from "next-intl"

export function AboutSeenOn() {
  const t = useTranslations("aboutPage")

  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-20 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("asSeenOn")}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t("featuredIn")}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden">
            <div
              className="monkeybook-widget-container w-full h-full"
              data-iframe-src="https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/6a4148a809b1c4079682c65b?language=en"
            />
            <script
              src="https://widget.monkeybook.io/widget.js?account=695c2746b187ec242a817de4"
              defer
            />
          </div>
        </div>
      </div>
    </section>
  )
}
