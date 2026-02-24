import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { notFound } from "next/navigation"
import { setRequestLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { routing } from "@/src/i18n/routing"
import "../globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "concept:coffee | Specialty Coffee Workshops in Tel Aviv",
  description:
    "Hands-on coffee workshops, corporate experiences, and private sessions in Tel Aviv. Learn from expert baristas and discover the art of specialty coffee.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  const isRTL = locale === "he"

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body className={`${dmSans.className} ${playfair.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
