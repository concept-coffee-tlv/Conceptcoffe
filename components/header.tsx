"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/src/i18n/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/src/i18n/routing"
import { LanguageSwitcher } from "@/components/language-switcher"
import { site } from "@/lib/site"

export function Header({ localizedPaths }: { localizedPaths?: Record<Locale, string> }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("navigation")
  const a11y = useTranslations("accessibility")

  const navigation = [
    { name: t("workshops"), href: "/workshops" },
    ...(site.showSpecialClasses ? [{ name: t("specialClasses"), href: "/group-workshops" }] : []),
    { name: t("corporate"), href: "/corporate" },
    { name: t("community"), href: "/community" },
    { name: t("blog"), href: "/blog" },
    { name: t("about"), href: "/about" },
    { name: t("contact"), href: "/#contact" },
  ]

  return (
    <header onKeyDown={(event) => {
      if (event.key === "Escape" && mobileMenuOpen && !event.defaultPrevented) {
        setMobileMenuOpen(false)
        document.getElementById("mobile-menu-toggle")?.focus()
      }
    }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground"
      >
        {a11y("skipToContent")}
      </a>
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/conceptcoffeelogo.png"
            alt="concept:coffee"
            width={84}
            height={84}
            sizes="84px"
            className="h-14 w-auto invert scale-150 origin-left"
            preload
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher localizedPaths={localizedPaths} />
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/workshops#booking">{t("bookNow")}</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher localizedPaths={localizedPaths} />
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="-m-2.5 p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{t("toggleMenu")}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-navigation" hidden={!mobileMenuOpen} className="lg:hidden bg-background border-b border-border">
        <div className="px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/workshops#booking" onClick={() => setMobileMenuOpen(false)}>{t("bookNow")}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
