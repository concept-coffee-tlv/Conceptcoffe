import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin, Phone, Mail } from "lucide-react"

const navigation = {
  experience: [
    { name: "Workshops", href: "/workshops" },
    { name: "Corporate Events", href: "/corporate" },
    { name: "Community", href: "/community" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Policies", href: "/policy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/conceptcoffeelogo.png"
                alt="concept:coffee"
                width={200}
                height={53}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-primary-foreground/80 leading-relaxed">
              Specialty coffee education in the heart of Tel Aviv. Hands-on workshops, corporate experiences, and
              private sessions
            </p>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/conceptcoffee_tlv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Experience</h3>
            <ul className="mt-4 space-y-3">
              {navigation.experience.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Yonatan Ratosh 2, Tel Aviv–Yafo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+972584001289" className="hover:text-primary-foreground transition-colors">
                  058-400-1289
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:evan@concept-coffee.com" className="hover:text-primary-foreground transition-colors">
                  evan@concept-coffee.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} concept:coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
