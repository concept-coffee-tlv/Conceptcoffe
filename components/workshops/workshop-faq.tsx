import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What should I bring to the workshop?",
    answer:
      "Just bring yourself and your curiosity! We provide all equipment, materials, and ingredients. Wear comfortable clothes and closed-toe shoes. We'll have aprons available.",
  },
  {
    question: "Do I need any prior experience?",
    answer:
      "Not at all! Our workshops are designed for all levels. We'll guide you through every step, whether you're a complete beginner or looking to refine your skills.",
  },
  {
    question: "What's included in the workshop price?",
    answer:
      "All workshops include hands-on instruction, equipment use, coffee and materials, light refreshments, and a 250g bag of specialty coffee to take home.",
  },
  {
    question: "Can I book for a group?",
    answer:
      "For groups larger than our standard class size, please contact us about private group sessions. We can customize the experience for your needs.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Full refund for cancellations made 48+ hours before the workshop. Cancellations within 48 hours can be rescheduled to another available date.",
  },
  {
    question: "Where are the workshops held?",
    answer:
      "Our workshops take place at our studio in Tel Aviv. The exact address and directions will be sent with your booking confirmation.",
  },
]

export function WorkshopFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
