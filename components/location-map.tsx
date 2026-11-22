import { site, studioAddress, studioMapEmbed } from "@/lib/site"
import { useLocale, useTranslations } from "next-intl"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationMap({ showContactInfo = false }: { showContactInfo?: boolean }) {
  const t = useTranslations("contact")
  const a11y = useTranslations("accessibility")
  const locale = useLocale()
  const address = studioAddress(locale)
  const mapEmbedUrl = studioMapEmbed(locale)

  if (showContactInfo) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Contact info */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-strong-accent mb-4">{t("sectionTitle")}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                {t("title")}
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("location")}</h3>
                    <p className="text-muted-foreground">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("phone")}</h3>
                    <a href={`tel:${site.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("email")}</h3>
                    <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                >
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                    {t("whatsapp")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="me-2 h-5 w-5" />
                    {t("instagram")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="rounded-xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={a11y("studioMap")}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-strong-accent mb-4">{t("sectionTitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {address}
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={a11y("studioMap")}
          />
        </div>
      </div>
    </section>
  )
}
