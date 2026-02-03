"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

const brands = [
  { name: "Nespresso", logo: "/brands/nespresso.avif" },
  { name: "Sarona", logo: "/brands/sarona.avif" },
  { name: "Anzu", logo: "/brands/anzu.avif" },
  { name: "Citrus and Salt", logo: "/brands/citrusandsalt.avif" },
]

export default function CorporatePage() {
  const t = useTranslations("corporatePage")

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <a href="https://wa.me/972584001289" target="_blank" rel="noopener noreferrer">
                      {t("cta")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right side - Videos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/corporate.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/corporatevideo2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands section */}
        <section className="py-12 lg:py-16 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-accent-foreground mb-10">
              {t("trustedBy")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {brands.map((brand) => (
                <div key={brand.name} className="relative h-20 brightness-0 invert">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
