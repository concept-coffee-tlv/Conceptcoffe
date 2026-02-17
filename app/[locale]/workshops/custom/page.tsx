"use client"

import Image from "next/image"
import Script from "next/script"
import { useTranslations, useLocale } from "next-intl"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Clock, Users, Coffee } from "lucide-react"

const galleryImages = [
  "/tasting1.JPG",
  "/barista1.JPG",
  "/roasting1.JPG",
  "/cupping1.JPG",
  "/latteart1.JPG",
]

export default function CustomPage() {
  const t = useTranslations("customPage")
  const tWorkshops = useTranslations("workshopsPage.workshops.custom")
  const locale = useLocale()

  const monkeybookUrl = `https://app.monkeybook.io/order/695c2746b187ec242a817de4/695c2746b187ec242a817de3/695c274cbc49194459c67fe5?language=${locale}`

  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative pt-24 lg:pt-32">
          <div className="absolute inset-0 h-[60vh] lg:h-[70vh]">
            <Image
              src="/images/custom.avif"
              alt="Custom Coffee Workshop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
            <div className="max-w-2xl">
              <p className="text-accent font-medium mb-4">{t("tagline").split('\n')[0]}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t("title")}
              </h1>
              <p className="text-lg text-white/80">
                {t("tagline").split('\n')[1]}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

              {/* Left: Description */}
              <div className="lg:col-span-2">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("intro")}
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {t("learnTitle")}
                </h2>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("learn1")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("learn2")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Coffee className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{t("learn3")}</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("forWho")}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("cta")}
                </p>

                <p className="text-xl text-foreground font-medium italic">
                  {t("closing")}
                </p>
              </div>

              {/* Right: Booking Card */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl p-6 lg:p-8 shadow-lg">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                    {t("workshopDetails")}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("duration")}</p>
                        <p className="font-medium text-foreground">{tWorkshops("duration")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("capacity")}</p>
                        <p className="font-medium text-foreground">{tWorkshops("capacity")}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-6 text-lg"
                  >
                    {t("bookNow")}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    {t("privateSession")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {galleryImages.map((src, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`Custom workshop ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 lg:-left-12" />
              <CarouselNext className="right-4 lg:-right-12" />
            </Carousel>
          </div>
        </section>

        {/* Booking Section */}
        <section id="book" className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t("bookingTitle")}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t("bookingSubtitle")}
              </p>
            </div>

            <div
              className="monkeybook-widget-container"
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
