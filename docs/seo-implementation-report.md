# SEO and AI discovery implementation report

**22 November 2026**

## Changes in this pull request

- The site declares its www canonical host, localized metadata, reciprocal language alternates, crawler rules and a generated sitemap. The sitemap includes actual published article variants and Contentful modification dates. Fixed pages omit modification dates unless a trustworthy source supplies them.
- Home now uses its existing tagline as the H1. The global booking link lands on the existing workshop list. The hero has a first-frame poster, pause control and reduced-motion behavior. The MP4 keeps its video stream, removes unused audio and moves playback metadata to the front. Responsive image sizing uses the logo’s actual aspect ratio. Visible text, photography, video footage, section order and navigation are preserved.
- Workshop routes generate metadata and main content on the server. They retain their copy, durations, names, formats and Monkeybook destinations. A standard anchor opens the booking section. The embedded frame has a localized title and reserved space. The original description layout was restored after the initial visual review. Script failure or disabled JavaScript provides a direct booking link.
- The unused contact route was removed. Existing email and WhatsApp links remain available. Special Classes is hidden from navigation and the sitemap, with temporary redirects to Community in both languages. Set `showSpecialClasses` in `lib/site.ts` to restore the archived page when needed.
- Contentful article fallback URLs redirect to the correct article language or localized slug. The Hebrew blog index labels links to English-only guides. The English policy retains its canonical and is identified as English inside the Hebrew shell until a translation is approved.
- Business contact and address data are centralized. The home map now queries the published studio name and address. Organization, LocalBusiness, WebSite, BreadcrumbList, Service and BlogPosting data use verified facts, actual article dates and provided authors.
- Both audience pages are reviewable in English and Hebrew. The publish gate controls the routes, sitemap and new directory and corporate links. The group form collects contact details and interests, with optional fields for estimated group size, preferred date, occasion and language. The server validates each inquiry and submits it to the configured Formspree form. CTA analytics contain route context and other predefined event properties. Tour-operator, corporate and educational copy is available for editorial review in the companion documents.
- Next.js build-time TypeScript validation and ESLint are active. Compatible runtime security updates were applied and the unused direct validation packages were removed.

## Validation

| Check | Evidence |
| --- | --- |
| Build and static analysis | Next.js production builds passed in default, review, preview and publish-enabled configurations. Standalone TypeScript and ESLint passed. npm reported zero known production dependency advisories. |
| HTTP, metadata and indexing | HTTP automated checks covered all 28 localized existing pages and four review/published URLs, with localized H1, language and direction, canonical, alternate, robots and Open Graph tags, parseable schema and reachable linked images. Tests covered locale redirects and the apex redirect preserving the query, the retired API returning 404, draft 404s on default production, preview noindex and robots blocking, and approved-mode sitemap inclusion. |
| Contentful | The fixture covered three English posts, one genuine Hebrew translation with its own slug, and a partial Hebrew draft. Verified reciprocal alternates, 307 legacy redirects, English links on the Hebrew index, article schema and fixture-provided modification dates in the sitemap. One real public Contentful image verified image delivery through Next.js. |
| Browser and accessibility | Headless Chrome at 1,440px and 390px checked English and Hebrew home and tasting, plus the English visitor and Hebrew group pages. Axe reported zero WCAG 2.1 A/AA violations on those samples. Keyboard skip, language switch, mobile menu Escape, FAQ, reduced-motion playback, carousel and booking anchors passed. |
| Booking and inquiries | The live Monkeybook widget opened in English and Hebrew with the existing six workshop choices. The direct fallback appeared with JavaScript disabled and after the widget script was blocked. Group inquiry checks cover both languages, form validation, provider acceptance and submission retries. A live Formspree test from the local preview reached the target inbox with its planning details. Repeat the delivery check on the release build. |
| Visual preservation | The comparisons show published production on the left of each pair and the local review build on the right. The homepage adds a small playback control. The comparisons capture the initial review. The private workshop descriptions now use their original layout. [English desktop](seo-visual-review/desktop.jpg) · [Hebrew mobile](seo-visual-review/mobile.jpg) |

### Performance baseline

Mobile Lighthouse 13.6.0 on the English homepage. The baseline was live production. The review build ran on localhost, so CDN, cache and analytics conditions differ.

| Metric | Production baseline | Review build |
| --- | ---: | ---: |
| Performance score | 69 | 100 |
| Accessibility score | 91 | 100 |
| LCP | 1.13 s | 1.21 s |
| CLS | 0.000 | 0.000 |
| Total Blocking Time | 1,418 ms | 67 ms |
| Transfer weight | 7.62 MiB | 4.52 MiB |

The optimized MP4 is about 330 KB smaller and retains the original picture stream. The first-frame poster is about 30 KB. Correcting the logo's intrinsic dimensions removed the logo shift observed on a preliminary review build.

Production field LCP, INP and CLS, analytics ingestion, email delivery and end-to-end booking require account or business access. The anonymous Google PageSpeed Insights API call returned 429. The browser check stopped before any personal details, payment or booking submission. The local environment has no Contentful delivery credentials. Live public HTML confirmed six English guides. End-to-end localization checks used controlled test entries.

## Review and release

Set `SHOW_AUDIENCE_DRAFTS=true` at build and start time to review the pages in a local production build. In a protected Vercel preview, the four audience URLs are available by default and carry noindex. The approved audience routes, sitemap entries and discovery links are enabled by default in Vercel production.

Confirm the studio capacity and venue wording, policy and photo permissions, and complete the provider and dashboard checks before release. The changes were prepared on a review branch. Production was not deployed.

[Production audit](seo-ai-audit.md) · [Content plan and drafts](seo-content-plan.md) · [Visitor and group strategy](visitor-group-experience-strategy.md) · [Manual setup checklist](manual-setup-checklist.md)
