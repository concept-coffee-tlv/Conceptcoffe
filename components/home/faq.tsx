"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "About Concept:Coffee",
    items: [
      {
        question: "What is Concept:Coffee?",
        answer: "Concept:Coffee is a specialty coffee education studio and community based in Tel Aviv. We offer hands-on coffee workshops, tastings (cupping), private sessions, and corporate experiences. We give people the tools they need to see coffee as more than just a drink."
      },
      {
        question: "Who are Concept:Coffee workshops for?",
        answer: "Our workshops are designed for curious coffee drinkers, no professional background required. Some sessions are beginner-friendly, while others are more advanced and focus on specific skills like cupping, espresso, or milk texturing."
      },
      {
        question: "Do I need prior coffee experience to attend?",
        answer: "No! All of our workshops are accessible to beginners. If a workshop requires prior knowledge, it will be clearly stated in the description."
      },
    ]
  },
  {
    category: "Workshops",
    items: [
      {
        question: "What types of coffee workshops do you offer?",
        answer: "We currently offer: Coffee tasting & cupping workshops, Barista & espresso workshops, Latte art workshops, Coffee fundamentals (farm-to-cup), and Private and corporate coffee experiences. If you're interested in a custom coffee workshop covering something not listed here, please be in touch!"
      },
      {
        question: "How long are the workshops?",
        answer: "Most workshops last between 1.5–2 hours, depending on the topic and group size."
      },
      {
        question: "How many people are in each workshop?",
        answer: "All workshops are private and can accommodate between 1-12 participants."
      },
      {
        question: "Are workshops hands-on?",
        answer: "Yes. Our workshops are practical, interactive, and experience-driven. You'll taste, brew, compare, ask questions, and actually do things, not just listen."
      },
    ]
  },
  {
    category: "Booking & Cancellation",
    items: [
      {
        question: "How do I book a workshop?",
        answer: "All workshops can be booked directly through our website. Payment is made upfront to secure your spot."
      },
      {
        question: "Can I cancel or reschedule a workshop?",
        answer: "Yes. Full refund up to 48 hours before the workshop. Reschedule up to 24 hours before. No refunds within 24 hours of the workshop. Full cancellation terms are listed on the booking page."
      },
      {
        question: "Can I transfer my ticket to someone else?",
        answer: "Yes, you're welcome to transfer your spot to another person. Just let us know in advance."
      },
    ]
  },
  {
    category: "Private & Corporate",
    items: [
      {
        question: "Do you offer private coffee workshops?",
        answer: "Yes. We offer private workshops for individuals, couples, teams, and special events. These can be tailored to your level, interests, and time frame."
      },
      {
        question: "Do you offer corporate or office workshops?",
        answer: "Absolutely. We run corporate coffee workshops and experiences for teams, offices, and off-sites, from casual tastings to structured educational sessions."
      },
      {
        question: "Can workshops be hosted at our office or venue?",
        answer: "Yes. We can host workshops at your office, event space, or at our studio, depending on the format and group size."
      },
    ]
  },
  {
    category: "Coffee & Learning",
    items: [
      {
        question: "What kind of coffee do you use in workshops?",
        answer: "We use specialty-grade coffees, sourced by founder and roaster Evan Goel with highest transparency and ethical trading practices. Coffees are chosen to clearly demonstrate flavor, processing, and origin differences."
      },
      {
        question: "Do you teach home coffee brewing?",
        answer: "Yes. Many of our workshops focus on improving home coffee — whether that's espresso machines, manual brewing, or understanding grind size, water, and extraction."
      },
    ]
  },
  {
    category: "Practical Info",
    items: [
      {
        question: "Are workshops in Hebrew or English?",
        answer: "Workshops are offered in Hebrew or English, depending on the group. Language is always specified in advance."
      },
      {
        question: "Is the studio accessible?",
        answer: "If you have specific accessibility needs, please reach out in advance and we'll do our best to accommodate."
      },
      {
        question: "How can I contact Concept:Coffee?",
        answer: "You can reach us through the contact form on the website or via WhatsApp. We're happy to help you choose the right workshop."
      },
    ]
  },
]

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">{section.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {section.items.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="rounded-lg px-4 overflow-hidden data-[state=open]:bg-secondary"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
