# Visitor, group and travel partner strategy

## Audience and launch path

| Audience | Search intent and landing page | Visitor action |
| --- | --- | --- |
| Tourists, English-speaking visitors, expats, couples and visiting friends or family | Coffee workshop Tel Aviv, coffee tasting Jaffa, English coffee workshop, private tasting, activities for couples, things to do in Jaffa. Review `/en/coffee-experiences-tel-aviv` and its `/he/` equivalent. | Explore the workshop directory or ask the studio about a private session through WhatsApp. |
| Group planners, universities, study-abroad programs, delegations, community groups and celebrations | Educational coffee workshops for groups, guided coffee tasting for a delegation, off-site group activities. Review `/en/coffee-workshops-for-groups` and its `/he/` equivalent. | Submit a short inquiry, or contact the studio directly by email or WhatsApp. |
| Guides, concierges, agencies, hotels and destination-management companies | Itinerary logistics, lead time, arrival, venue suitability and operator coordination. Review the draft below. | Email an itinerary brief and discuss availability with the studio. |

A qualitative search review found Concept:Coffee’s homepage, workshop detail pages and About page competing for coffee-specific local terms. Broader Jaffa activity searches also surfaced destination guides and tours, indicating a separate visitor decision about where a workshop fits into their day. No paid search data or keyword volume was available. The copy leads with actual local and booking information. [Concept:Coffee workshop directory](https://www.concept-coffee.com/en/workshops) · [Tel Aviv–Yafo tourism](https://www.visit-tel-aviv.com/)

Both landing pages are available in development and Vercel preview. They are excluded from the production sitemap and return 404 on the default production build. Once the owner approves both pages and confirms the address and inquiry journey, `PUBLISH_AUDIENCE_PAGES=true` enables indexing and selected links from the workshop directory and corporate page. The homepage and global navigation are outside this link rollout. After launch, add links from genuinely related guides as the corresponding content is approved.

## Group inquiries and follow-up

The group page lists guided tastings, hands-on workshops and custom group sessions. The form asks for a name, an email or phone number, and what the group is interested in. Organizers can also share an estimated group size, preferred date, occasion and preferred language. Confirm details and logistics when following up.

The website validates inquiries and submits them to Formspree, which stores the submission and emails the form’s target address. The `group_inquiry_sent` event records provider acceptance and page language. Evan can qualify the inquiry when following up.

## Tour operators and travel partners · full English review draft

**Proposed URL** `/en/tour-operators`

**Page title** Coffee workshops for tour operators and travel partners in Tel Aviv–Jaffa

**Search description** Add an existing Concept:Coffee workshop to a Jaffa itinerary. Discuss languages, timing, group setup and external venues with the studio.

### Add a coffee workshop to your Jaffa itinerary

Give your guests time to sit down, taste a few coffees and learn how they were made. At Concept:Coffee, founder Evan Goel leads specialty coffee sessions for travelers with different levels of experience. A workshop can fit into a visit you’re already planning in Tel Aviv–Jaffa. Let us know what comes before and after the session so we can discuss a start time and format that suit your group.

### Pick a format for your group

**Concept:Tasting** introduces guests to the flavors of specialty coffee through a 90-minute guided tasting. **Concept:Cupping** takes 90 minutes and gives groups a structured introduction to how coffee professionals compare coffees. **Concept:Barista** takes two hours and involves hands-on skill practice at an espresso machine. The best fit depends on how many guests want to take part and how much hands-on time you want each person to have. **Concept:Custom** lets you discuss different topics and timing with the studio.

Link each name to the corresponding existing workshop page.

### Agree on the language, venue and timing

Workshops are offered in English or Hebrew by arrangement. The studio is listed at Yonatan Ratosh 2, Tel Aviv–Yafo. Include a realistic arrival window and any access needs in your inquiry. For a larger group or a program at a hotel, campus or event space, ask about a guided tasting, presentation or adapted activity at a suitable external venue. Send the estimated group size and available time, and we’ll confirm whether the plan fits the space and format.

### Send an itinerary request

Email Evan at **evan@concept-coffee.com** or call **058-400-1289**. Share your organization, intended dates, preferred language, approximate headcount, available time and venue. Let us know who will coordinate any setup or changes on the day. If your itinerary is still taking shape, include the range of times you can work with.

**CTA** Ask about a workshop for your itinerary. Link to the existing email contact with a blank itinerary outline in the email body.

## Tour partner launch decision

Keep the page as a draft. It overlaps with group logistics until school, guide and hotel organizers can get verified operator-specific information, such as an arrival window, venue setup guidance, accessibility notes and a named point of contact for itinerary changes. Validate demand through partner inquiries after the two audience pages launch. If demand is established, review a Hebrew equivalent and consider a one-page, owner-approved itinerary sheet. Leave commercial arrangements to direct conversations.
