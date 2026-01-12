import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact | concept:coffee",
  description:
    "Get in touch with concept:coffee. Inquire about workshops, corporate events, or private sessions in Tel Aviv.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
