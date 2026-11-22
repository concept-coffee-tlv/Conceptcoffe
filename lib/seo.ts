import type { Metadata } from "next"
import { hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing, type Locale } from "@/src/i18n/routing"
import { localizedUrl, site } from "@/lib/site"

type Copy = { title: string; description: string }
type LocalizedCopy = Record<Locale, Copy>

export type LocalePageProps = { params: Promise<{ locale: string }> }

export const audiencePaths = ["/coffee-experiences-tel-aviv", "/coffee-workshops-for-groups"] as const
const publishAudiencePages = process.env.PUBLISH_AUDIENCE_PAGES
export const audiencePagesPublished = publishAudiencePages === undefined
  ? process.env.VERCEL_ENV === "production"
  : publishAudiencePages === "true"
export const isPreview = process.env.VERCEL_ENV === "preview"

export const publicPages = {
  "": {
    en: { title: "Specialty Coffee Workshops in Tel Aviv–Jaffa", description: "Explore Concept:Coffee’s hands-on specialty coffee workshops, private sessions and corporate experiences in Tel Aviv–Jaffa, in English or Hebrew." },
    he: { title: "סדנאות קפה ספיישלטי בתל אביב-יפו", description: "סדנאות קפה מעשיות, מפגשים פרטיים וחוויות לצוותים בסטודיו Concept:Coffee בתל אביב-יפו, בעברית או באנגלית." },
  },
  "/about": {
    en: { title: "About Our Coffee Studio", description: "Meet Evan Goel, founder of Concept:Coffee, and discover the specialty coffee education studio he built in Jaffa." },
    he: { title: "על הסטודיו לקפה", description: "הכירו את אוון גואל, מייסד Concept:Coffee, ואת הסטודיו שהקים ביפו ללימוד קפה ספיישלטי." },
  },
  "/blog": {
    en: { title: "Coffee Brewing and Tasting Guides", description: "Explore Concept:Coffee’s educational guides to coffee brewing and cupping, from French press and V60 to tasting methods." },
    he: { title: "בלוג קפה ומדריכי הכנה וטעימה", description: "מדריכי הקפה של Concept:Coffee על שיטות הכנה וטעימה, מ־V60 ופרנץ׳ פרס ועד קאפינג." },
  },
  "/community": {
    en: { title: "Coffee Community and Events", description: "Join Concept:Coffee’s community in Tel Aviv–Jaffa to meet other coffee enthusiasts and find public coffee events." },
    he: { title: "קהילת קפה ואירועים", description: "הצטרפו לקהילת Concept:Coffee בתל אביב-יפו, פגשו חובבי קפה וגלו אירועי קפה בהרשמה פתוחה." },
  },
  "/corporate": {
    en: { title: "Corporate Coffee Workshops and Team Building", description: "Plan a guided coffee experience for your team with Concept:Coffee. Ask about hands-on sessions, tastings and hosting at your office or venue." },
    he: { title: "סדנאות קפה לחברות וימי גיבוש", description: "תכננו חוויית קפה לצוות עם Concept:Coffee. אפשר לברר על טעימות מודרכות, סדנאות מעשיות ופעילות במשרד או במתחם שלכם." },
  },
  "/group-workshops": {
    en: { title: "Special Classes and Pop-Up Coffee Workshops", description: "Explore Concept:Coffee’s one-off specialty coffee classes in Tel Aviv–Jaffa, including the Blend Lab workshop archive." },
    he: { title: "סדנאות קפה מיוחדות", description: "גלו את הסדנאות החד-פעמיות של Concept:Coffee בתל אביב-יפו, ובהן סדנת Blend Lab מארכיון הסטודיו." },
  },
  "/policy": {
    en: { title: "Booking, Cancellation and Privacy Policies", description: "Read Concept:Coffee’s terms for workshop bookings, cancellations and delivery, and learn how the studio handles personal information." },
    he: { title: "Booking, Cancellation and Privacy Policies", description: "Read Concept:Coffee’s terms for workshop bookings, cancellations and delivery, and learn how the studio handles personal information." },
  },
  "/workshops": {
    en: { title: "Private Coffee Workshops in Tel Aviv–Jaffa", description: "Explore Concept:Coffee’s existing private workshops, including coffee tasting, barista skills, roasting, cupping, latte art and custom sessions." },
    he: { title: "סדנאות קפה פרטיות בתל אביב-יפו", description: "גלו את הסדנאות הפרטיות של Concept:Coffee: טעימות קפה, בריסטה, קלייה, קאפינג, לאטה ארט וסדנאות בהתאמה אישית." },
  },
  "/workshops/tasting": {
    en: { title: "Concept:Tasting | Guided Coffee Tasting", description: "Taste specialty coffees side by side and learn how origin, processing and roasting affect flavor in a private 90-minute workshop in Jaffa." },
    he: { title: "Concept:Tasting | סדנת טעימות קפה", description: "טעמו סוגי קפה ספיישלטי זה לצד זה וגלו איך המקור, העיבוד והקלייה משפיעים על הטעם, בסדנה פרטית של 90 דקות ביפו." },
  },
  "/workshops/barista": {
    en: { title: "Concept:Barista | Espresso and Barista Skills", description: "Practice dialing in espresso, steaming milk and making café drinks in Concept:Coffee’s private two-hour barista workshop." },
    he: { title: "Concept:Barista | סדנת בריסטה ואספרסו", description: "תרגלו כיוון אספרסו, הקצפת חלב והכנת משקאות קפה בסדנת בריסטה פרטית של שעתיים ב־Concept:Coffee." },
  },
  "/workshops/cupping": {
    en: { title: "Concept:Cupping | Coffee Cupping Workshop", description: "Learn the professional method for evaluating coffee aroma, flavor and texture in a private 90-minute cupping workshop in Jaffa." },
    he: { title: "Concept:Cupping | סדנת קאפינג", description: "למדו את שיטת הטעימה המקצועית להערכת ארומה, טעם ומרקם של קפה בסדנה פרטית של 90 דקות ביפו." },
  },
  "/workshops/roasting": {
    en: { title: "Concept:Roasting | Coffee Roasting Workshop", description: "Discover how green coffee becomes roasted coffee and compare roast profiles in Concept:Coffee’s private two-hour roasting workshop." },
    he: { title: "Concept:Roasting | סדנת קליית קפה", description: "גלו איך קפה ירוק הופך לקפה קלוי והשוו בין פרופילי קלייה בסדנה פרטית של שעתיים ב־Concept:Coffee." },
  },
  "/workshops/latteart": {
    en: { title: "Concept:Latte Art | Milk Steaming and Pouring Workshop", description: "Practice milk texture and pouring patterns with hands-on feedback in Concept:Coffee’s private two-hour Latte Art workshop." },
    he: { title: "Concept:Latte Art | סדנת הקצפה ומזיגה", description: "תרגלו הקצפת חלב ומזיגת דוגמאות עם משוב מעשי בסדנת לאטה ארט פרטית של שעתיים ב־Concept:Coffee." },
  },
  "/workshops/custom": {
    en: { title: "Concept:Custom | Private Custom Coffee Workshops", description: "Plan a private session around espresso, latte art, filter brewing or cupping with flexible timing at Concept:Coffee." },
    he: { title: "Concept:Custom | סדנת קפה בהתאמה אישית", description: "תכננו מפגש פרטי ב־Concept:Coffee סביב אספרסו, לאטה ארט, קפה פילטר או קאפינג, בתיאום גמיש." },
  },
  "/coffee-experiences-tel-aviv": {
    en: { title: "Coffee Experiences in Tel Aviv–Jaffa", description: "Visiting Tel Aviv–Jaffa? Explore private coffee tastings and hands-on specialty coffee workshops in English at Concept:Coffee’s Jaffa studio." },
    he: { title: "חוויות קפה בתל אביב-יפו", description: "מחפשים פעילות ביפו? גלו טעימות קפה וסדנאות מעשיות בעברית ובאנגלית בסטודיו Concept:Coffee." },
  },
  "/coffee-workshops-for-groups": {
    en: { title: "Private Coffee Workshops for Groups in Tel Aviv–Jaffa", description: "Arrange a private coffee tasting or hands-on workshop in Tel Aviv–Jaffa for your team, visiting group, or celebration. Available in English or Hebrew." },
    he: { title: "סדנאות קפה פרטיות לקבוצות בתל אביב-יפו", description: "טעימות קפה מודרכות וסדנאות קפה פרטיות לקבוצות בתל אביב-יפו. מתאים לימי גיבוש, לקבוצות מבקרים ולחגיגות. בעברית ובאנגלית." },
  },
} satisfies Record<string, LocalizedCopy>

export type PublicPage = keyof typeof publicPages
export type LocalePaths = Partial<Record<Locale, string>>

export function languageAlternates(paths: LocalePaths) {
  if (paths.en === undefined || paths.he === undefined) return undefined
  return { en: localizedUrl("en", paths.en), he: localizedUrl("he", paths.he) }
}

export function createPageMetadata({
  locale, path, copy, alternates, index = true, image, article,
}: {
  locale: Locale
  path: string
  copy: Copy
  alternates?: LocalePaths
  index?: boolean
  image?: { url: string; alt: string }
  article?: { publishedTime: string; modifiedTime: string }
}): Metadata {
  const url = localizedUrl(locale, path)
  const title = `${copy.title} | ${site.name}`
  return {
    title,
    description: copy.description,
    alternates: { canonical: url, languages: languageAlternates(alternates ?? {}) },
    robots: { index: index && !isPreview, follow: true },
    openGraph: {
      ...(article ? { type: "article" as const, ...article } : { type: "website" as const }),
      title,
      description: copy.description,
      url,
      siteName: site.name,
      locale: locale === "he" ? "he_IL" : "en_US",
      alternateLocale: languageAlternates(alternates ?? {}) ? [locale === "he" ? "en_US" : "he_IL"] : undefined,
      images: [image ?? { url: "/specialty-coffee-workshop-hands-pouring-latte-art-.jpg", alt: locale === "he" ? "מזיגת לאטה ארט בסדנת קפה" : "Pouring latte art during a coffee workshop" }],
    },
  }
}

export function pageMetadata(path: PublicPage) {
  return async ({ params }: LocalePageProps): Promise<Metadata> => {
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) return {}
    // The policy body is currently available only in English.
    if (path === "/policy") return createPageMetadata({ locale: "en", path, copy: publicPages[path].en })
    return createPageMetadata({
      locale,
      path,
      copy: publicPages[path][locale],
      alternates: { en: path, he: path },
      index: !audiencePaths.some((draft) => draft === path) || audiencePagesPublished,
    })
  }
}

export function canViewAudiencePages() {
  return audiencePagesPublished || isPreview || process.env.NODE_ENV === "development" || process.env.SHOW_AUDIENCE_DRAFTS === "true"
}

export function requireAudiencePage() {
  if (!canViewAudiencePages()) notFound()
}
