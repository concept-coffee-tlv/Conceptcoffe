"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("languageSwitcher")

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{locale === "en" ? "EN" : "עב"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => switchLocale("en")}
          className={locale === "en" ? "bg-accent" : ""}
        >
          {t("en")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale("he")}
          className={locale === "he" ? "bg-accent" : ""}
        >
          {t("he")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
