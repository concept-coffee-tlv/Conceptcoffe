import { site, studioAddress } from "@/lib/site"
import Image from "next/image"
import { Instagram, MapPin, Phone, Mail } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"

export function Footer() {
  const t = useTranslations("footer")
  const address = studioAddress(useLocale())

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/conceptcoffeelogo.png"
                alt="concept:coffee"
                width={84}
                height={84}
                sizes="84px"
                className="h-14 w-auto scale-150 origin-left"
              />
            </Link>
            <p className="mt-4 max-w-md text-primary-foreground/80 leading-relaxed">
              {t("description")}
            </p>
            <div className="mt-6">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("experienceTitle")}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/workshops"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("workshopsLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("corporateEventsLink")}
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("communityLink")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("companyTitle")}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {t("policies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">{t("contactTitle")}</h3>
            <div className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:text-primary-foreground transition-colors">
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-primary-foreground transition-colors">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
