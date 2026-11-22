"use client"

import { useLocale, useTranslations } from "next-intl"
import { Link, usePathname } from "@/src/i18n/navigation"
import { routing, type Locale } from "@/src/i18n/routing"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher({ localizedPaths }: { localizedPaths?: Record<Locale, string> }) {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations("languageSwitcher")

  return (
    <DropdownMenu dir={locale === "he" ? "rtl" : "ltr"}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2" aria-label={t("label")}>
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{locale === "en" ? "EN" : "עב"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((language) => (
          <DropdownMenuItem key={language} asChild className={locale === language ? "bg-accent" : ""}>
            <Link href={localizedPaths?.[language] ?? pathname} locale={language} replace hrefLang={language}>
              {t(language)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
