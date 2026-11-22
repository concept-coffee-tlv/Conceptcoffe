import { hasLocale } from "next-intl"
import { publicPages, type PublicPage } from "@/lib/seo"
import { localizedUrl, site } from "@/lib/site"
import { routing, type Locale } from "@/src/i18n/routing"

export const businessId = `${site.url}/#business`

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  )
}

export function SiteStructuredData() {
  return (
    <JsonLd data={{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["Organization", "LocalBusiness"],
          "@id": businessId,
          name: site.name,
          url: localizedUrl("en"),
          logo: `${site.url}/conceptcoffeelogo.png`,
          image: `${site.url}/about/studio.avif`,
          founder: { "@type": "Person", name: site.founder },
          telephone: site.phone,
          email: site.email,
          sameAs: [site.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.en.street,
            addressLocality: site.address.en.city,
            addressCountry: site.country,
          },
        },
        {
          "@type": "WebSite",
          "@id": `${site.url}/#website`,
          url: localizedUrl("en"),
          name: site.name,
          inLanguage: routing.locales,
          publisher: { "@id": businessId },
        },
      ],
    }} />
  )
}

export function breadcrumbs(locale: Locale, pages: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: site.name, path: "" }, ...pages].map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: localizedUrl(locale, path),
    })),
  }
}

export function PageStructuredData({ locale, path, name, service = false }: {
  locale: string
  path: Exclude<PublicPage, "">
  name?: string
  service?: boolean
}) {
  if (!hasLocale(routing.locales, locale)) return null
  const copy = publicPages[path][locale]
  const pages: { name: string; path: string }[] = [{ name: name ?? copy.title, path }]
  if (path.startsWith("/workshops/")) {
    pages.unshift({ name: locale === "he" ? "סדנאות קפה" : "Coffee Workshops", path: "/workshops" })
  }
  const graph: Record<string, unknown>[] = [breadcrumbs(locale, pages)]
  if (service) {
    const url = localizedUrl(locale, path)
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: name ?? copy.title,
      description: copy.description,
      url,
      provider: { "@id": businessId },
      availableChannel: { "@type": "ServiceChannel", availableLanguage: routing.locales },
    })
  }
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
}
