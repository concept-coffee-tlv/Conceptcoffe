"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationMap({ showContactInfo = false }: { showContactInfo?: boolean }) {
  const t = useTranslations("contact")

  if (showContactInfo) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Contact info */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("sectionTitle")}</p>
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
                    <p className="text-muted-foreground">{t("address")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("phone")}</h3>
                    <a href="tel:+972584001289" className="text-muted-foreground hover:text-accent transition-colors">
                      058-400-1289
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("email")}</h3>
                    <a href="mailto:evan@concept-coffee.com" className="text-muted-foreground hover:text-accent transition-colors">
                      evan@concept-coffee.com
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
                  <a href="https://wa.me/972584001289" target="_blank" rel="noopener noreferrer">
                    {t("whatsapp")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold"
                >
                  <a href="https://www.instagram.com/conceptcoffee_tlv" target="_blank" rel="noopener noreferrer">
                    <Instagram className="me-2 h-5 w-5" />
                    {t("instagram")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="rounded-xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0876!2d34.7689!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0x1f3c7b0a7a9b8c0d!2sYonatan%20Ratosh%20St%202%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="concept:coffee studio location"
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
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">{t("sectionTitle")}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t("address")}
          </p>
        </div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0876!2d34.7689!3d32.0853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0x1f3c7b0a7a9b8c0d!2sYonatan%20Ratosh%20St%202%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="concept:coffee studio location"
          />
        </div>
      </div>
    </section>
  )
}
