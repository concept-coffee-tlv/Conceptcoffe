import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

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
        <section className="pt-28 pb-8 lg:pt-32 lg:pb-12 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left side - Text content */}
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Contact
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Let's Talk Coffee
                </h1>
                <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <span className="font-semibold text-foreground">Location:</span><br />
                    Yonatan Ratosh 2, Tel Aviv–Yafo<br />
                    <Link href="/workshops" className="text-accent hover:underline">By booking only</Link>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Phone:</span><br />
                    <a href="tel:+972584001289" className="hover:text-accent transition-colors">058-400-1289</a>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Email:</span><br />
                    <a href="mailto:evan@concept-coffee.com" className="hover:text-accent transition-colors">evan@concept-coffee.com</a>
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  >
                    <Link href="https://wa.me/972584001289" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="font-semibold"
                  >
                    <Link href="https://www.instagram.com/conceptcoffee_tlv" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/getintouch.JPG"
                  alt="Concept Coffee Studio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
