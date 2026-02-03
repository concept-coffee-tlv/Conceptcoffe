"use client"

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
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/_KsJNgBFJPw"
              title="Concept:Coffee Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
