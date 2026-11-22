import type { Locale } from "@/src/i18n/routing"

export const site = {
  url: "https://www.concept-coffee.com",
  name: "Concept:Coffee",
  founder: "Evan Goel",
  email: "evan@concept-coffee.com",
  phone: "+972584001289",
  phoneDisplay: "058-400-1289",
  instagram: "https://www.instagram.com/conceptcoffee_tlv",
  whatsapp: "https://wa.me/972584001289",
  showSpecialClasses: false,
  address: {
    en: { street: "Yonatan Ratosh 2", city: "Tel Aviv–Yafo" },
    he: { street: "יונתן רטוש 2", city: "תל אביב-יפו" },
  },
  country: "IL",
} as const

export function studioAddress(locale: string) {
  const { street, city } = site.address[locale === "he" ? "he" : "en"]
  return `${street}, ${city}`
}

export function studioMapEmbed(locale: string) {
  const map = new URL("https://maps.google.com/maps")
  map.searchParams.set("q", `${site.name} Studio & Workshops, ${studioAddress("en")}, Israel`)
  map.searchParams.set("output", "embed")
  map.searchParams.set("hl", locale)
  return map.href
}

export function localizedUrl(locale: Locale, path = "") {
  return `${site.url}/${locale}${path}`
}
