import Image from "next/image"
import { Link } from "@/src/i18n/navigation"
import { getTranslations } from "next-intl/server"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const blendLabImages = [
  "/Concept-Blend1.avif",
  "/Concept-Blend2.avif",
  "/Concept-Blend3.avif",
  "/Concept-Blend4.avif",
  "/Concept-Blend5.avif",
]

type GroupWorkshopsProps = {
  locale: string
}

export async function GroupWorkshopsHero({ locale }: GroupWorkshopsProps) {
  const t = await getTranslations("groupWorkshopsPage")
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

export async function GroupWorkshopsContent({ locale }: GroupWorkshopsProps) {
  const t = await getTranslations("groupWorkshopsPage")
  const isHebrew = locale === "he"

  const bodyParagraphs = [t("eventBody1"), t("eventBody2"), t("eventBody3"), t("eventBody4")]
  const learningPoints = [t("learningPoint1"), t("learningPoint2")]
  const dateOptions = [
    { dateTime: "2026-09-25T10:00:00+03:00", label: t("dateOption1") },
    { dateTime: "2026-09-24T18:00:00+03:00", label: t("dateOption2") },
  ]
  const a11y = await getTranslations("accessibility")

  return (
    <section dir={isHebrew ? "rtl" : "ltr"} lang={locale} className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          dir="ltr"
          className="group mx-auto max-w-6xl bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all lg:grid lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[600px] overflow-hidden relative">
            <Carousel
              opts={{
                loop: true,
              }}
              aria-label={a11y("workshopGallery")}
              className="h-full [&_[data-slot=carousel-content]]:h-full"
            >
              <CarouselContent className="h-full ms-0">
                {blendLabImages.map((src, index) => (
                  <CarouselItem key={src} className="relative h-full ps-0">
                    <Image
                      src={src}
                      alt={`${t("eventTitle")} ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious aria-label={a11y("previousSlide")} className="start-4 z-10 border-background/70 bg-background/80 text-foreground hover:bg-background" />
              <CarouselNext aria-label={a11y("nextSlide")} className="end-4 z-10 border-background/70 bg-background/80 text-foreground hover:bg-background" />
            </Carousel>
          </div>

          <div dir={isHebrew ? "rtl" : "ltr"} className="p-6 md:p-8 lg:p-10 xl:p-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
              {t("eventEyebrow")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {t("eventTitle")}
            </h2>
            <p className="mt-3 text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              {t("eventIntro")}
            </p>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {learningPoints.map((point) => (
                <li key={point} className="flex items-start justify-center gap-2 text-center">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-foreground leading-relaxed">
              {t("takeHomePrefix")}
              <strong>{t("takeHomeHighlight")}</strong>
              {t("takeHomeSuffix")}
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
                {t("dateOptionsTitle")}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                {dateOptions.map((dateOption) => (
                  <time
                    key={dateOption.dateTime}
                    dateTime={dateOption.dateTime}
                    className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {dateOption.label}
                  </time>
                ))}
              </div>
            </div>

            <p className="mt-8 text-sm font-medium text-foreground">
              {t("ctaLine")}
            </p>
            <Link
              href="/community"
              className="mt-3 flex w-full items-center justify-center bg-primary text-primary-foreground py-2 rounded-md font-medium transition-colors hover:bg-primary/90"
            >
              {t("communityLink")}
            </Link>

            <p className="mt-6 text-sm text-muted-foreground">
              {t("closingLine")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
