"use client"

import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqKeys = [
  {
    categoryKey: "aboutConceptCoffee",
    questionKeys: ["whatIsConceptCoffee", "whoAreWorkshopsFor", "needPriorExperience"],
  },
  {
    categoryKey: "workshops",
    questionKeys: ["typesOfWorkshops", "workshopLength", "peoplePerWorkshop", "areWorkshopsHandsOn"],
  },
  {
    categoryKey: "bookingCancellation",
    questionKeys: ["howToBook", "cancelOrReschedule", "transferTicket"],
  },
  {
    categoryKey: "privateCorporate",
    questionKeys: ["offerPrivateWorkshops", "offerCorporateWorkshops", "hostAtVenue"],
  },
  {
    categoryKey: "coffeeLearning",
    questionKeys: ["whatCoffeeUsed", "teachHomeBrewing"],
  },
  {
    categoryKey: "practicalInfo",
    questionKeys: ["languageOfWorkshops", "isStudioAccessible", "howToContact"],
  },
]

export function FAQ() {
  const t = useTranslations("faq")

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            {t("title")}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqKeys.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {t(`categories.${section.categoryKey}`)}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {section.questionKeys.map((questionKey, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="rounded-lg px-4 overflow-hidden data-[state=open]:bg-secondary"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {t(`questions.${questionKey}.question`)}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {t(`questions.${questionKey}.answer`)}
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
