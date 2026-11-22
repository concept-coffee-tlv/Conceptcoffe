import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  const t = useTranslations("meetEvan")

  const a11y = useTranslations("accessibility")

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/evan.avif"
                alt={a11y("founderPhoto")}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -end-6 bg-accent text-accent-foreground p-6 rounded-lg max-w-[200px]">
              <p className="font-serif text-3xl font-bold">5+</p>
              <p className="text-sm mt-1">{t("badge")}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-strong-accent mb-4">{t("eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t("paragraph2")}
            </p>
            <Button
              asChild
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <Link href="/about">{t("cta")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
