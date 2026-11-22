# Concept:Coffee SEO and AI discovery audit

**22 November 2026 · Production and repository baseline**

The audit covered both languages for all 14 fixed public routes, all 12 live article URLs, both hostnames, the crawler endpoints, a missing URL, the contact route and the public Monkeybook entry points. Production HTML and HTTP headers were checked against repository commit `487e28c`. Production was served by Vercel and sent HSTS. Dashboard settings and real crawler logs require account access.

## Confirmed findings

| Priority | Finding | Evidence and action |
| --- | --- | --- |
| P0 | Missing crawl endpoints | Both `/robots.txt` and `/sitemap.xml` returned 404. All fixed public pages returned 200, and a nonexistent page returned 404. Add both endpoints. |
| P0 | Duplicate hostnames | Apex and www both returned 200 for `/en`, with identical downloaded HTML. Root on www redirected to English for the default request. Use the requested www host in canonicals and redirect apex permanently. |
| P0 | Broken booking fragment | The global booking CTA targeted `/workshops#booking`. The directory HTML had no element with that ID. Mark the existing workshop list as the destination. |
| P0 | Contact route claimed delivery | The handler logged submitted name, email, subject and message before returning success. Repository search and public HTML found no caller or form pointing to it. The read-only production GET returned 405. Remove the route and keep the published email and WhatsApp links. |
| P0 | Expired special class | Both locales offered booking for Blend Lab sessions dated 24 and 25 September 2026. Keep the class as an archive and point readers to the existing community page for public events. |
| P0 | Build and lint gaps | Standalone TypeScript initially passed, but Next.js disabled build validation and `npm run lint` could not find ESLint. Restore both. A production dependency audit identified compatible fixes and one unused validation dependency that could be removed. |
| P1 | Page metadata and language | Both homepages lacked H1s. Sampled pages had no canonical or Open Graph markup. About, policy, special classes and workshop directory returned English titles on Hebrew URLs. Six workshop details, corporate and community inherited the homepage title. Next-intl sent path-based alternates even for English-only bodies. |
| P1 | Article duplication | All six English article URLs had 200 Hebrew counterparts with English titles and bodies. The checked-in February export contains just one English entry and uses a different model ID from the live code. The export is a historical reference. |
| P1 | Mobile and accessibility | The mobile menu button lacked an expanded state and the language control had no accessible name at narrow widths. Workshop galleries inherited RTL without setting Embla’s matching direction. The home background video looped without a pause control. An overlapping workshop hero gradient partially covered the first paragraph on desktop and mobile. Existing layout and localized document direction were present. |
| P1 | Media and script cost | The home hero was a 5.24 MB 1,920 × 1,080 MP4 with audio despite muted playback. Home images outside the hero included unsized responsive requests and plain images loaded eagerly. The widget script and Vercel client instrumentation warrant ongoing measurement. |
| P1 | Shared booking destination | All six workshop detail pages supplied the same Monkeybook order URL, with locale as the only variation. The script, both localized order entry points and community order entry point returned 200. Owner review is needed to confirm the correct activity, duration, location and language in the provider’s options. |
| P1 | English-only policy | Both locales displayed the same English policy. It still cites Wix for hosting and payments, and its cancellation wording needs to be cross-checked with the current website and Monkeybook terms. Review together with the owner and provide an approved Hebrew version. |
| P1 | Capacity wording needs approval | The homepage pairs “10-50+ participants” with “On-site or at our studio” on the corporate card. Its FAQ says “All workshops are private” and gives 1–12 participants while the site offers public events and off-site formats. Confirm how capacity, venue and registration mode should be stated. The new group draft avoids numerical capacity claims. |
| P2 | Local business signals | The live footer, home contact section and About page list Yonatan Ratosh 2, Tel Aviv–Yafo, 058-400-1289 and evan@concept-coffee.com. The studio is described as near Jaffa Port. A previous community event used a separate venue. The old map embed used a different place reference from the studio’s Google listing. An address-based embed returned the listed studio name and the listing’s coordinates. Confirm the current studio address and map pin before audience publication and before any move. |

[Production homepage](https://www.concept-coffee.com/en) · [Workshop directory](https://www.concept-coffee.com/en/workshops) · [Hebrew blog](https://www.concept-coffee.com/he/blog) · [Special classes](https://www.concept-coffee.com/en/group-workshops) · [About](https://www.concept-coffee.com/en/about) · [Policy](https://www.concept-coffee.com/en/policy)

The public reviews redirect, map listing, WhatsApp direct and community links, Instagram profile and About video embed returned HTTP 200 after redirects. These checks establish endpoint reachability. Check playback and invitation status in their respective services as part of release review.

## Crawler access

Requests to the English homepage returned 200 when labeled Googlebot, Bingbot, OAI-SearchBot, GPTBot, ChatGPT-User, Claude-SearchBot, ClaudeBot, Claude-User, PerplexityBot and Perplexity-User. Those requests verify the response to a supplied user-agent string. Check hosting logs for requests from verified crawlers, especially when enabling bot mitigations or an external CDN.

| Provider | Access covered by the proposed public robots policy |
| --- | --- |
| Google | Googlebot for search. Google-Extended for eligible model training and Gemini grounding. Google-Extended uses existing Google agents on the wire. [Google crawler documentation](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) |
| Microsoft | Bingbot for search. Verify the actual network identity with Microsoft’s published guidance. [Bingbot verification](https://www.bing.com/webmasters/help/how-to-verify-bingbot-3905dc26) |
| OpenAI | OAI-SearchBot for search and GPTBot for training. User-directed ChatGPT-User requests may operate outside robots rules. [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) |
| Anthropic | Claude-SearchBot for search, ClaudeBot for training and Claude-User for user-directed retrieval. [Anthropic crawler documentation](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) |
| Perplexity | PerplexityBot for search and Perplexity-User for user-directed retrieval. The latter generally ignores robots rules. [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |

The public robots policy allows pages and their rendering assets through a wildcard rule and excludes API and internal analytics paths. Preview deployments should also use hosting access protection. Robots rules express crawler preferences. Authenticate private resources and assess actual bot responses in Vercel Firewall and CDN logs. An `llms.txt` file was deferred while sitemap, localization and accessible HTML take priority.

## Performance and measurement baseline

Google PageSpeed Insights returned HTTP 429 for the unauthenticated mobile API request. This audit records browser and Lighthouse lab measurements in the implementation report. Collect production field LCP, INP and CLS from Speed Insights and Search Console or CrUX where there is sufficient traffic. INP requires real interactions. A Lighthouse Total Blocking Time result is a separate lab metric. [Web Vitals](https://web.dev/articles/vitals)

Vercel Analytics and Speed Insights already render in the site. Their enabled project status, historical data and ingestion require dashboard access. Any referral or conversion report should distinguish observable actions from provider-side outcomes.
