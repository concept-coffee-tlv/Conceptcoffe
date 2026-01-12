import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, MapPin } from "lucide-react"

const navigation = {
  experience: [
    { name: "Public Workshops", href: "/workshops" },
    { name: "Corporate Events", href: "/corporate" },
    { name: "Private Sessions", href: "/private" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/concept-20coffee-20logo.avif"
                alt="concept:coffee"
                width={200}
                height={53}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-primary-foreground/80 leading-relaxed">
              Specialty coffee education in the heart of Tel Aviv. Hands-on workshops, corporate experiences, and
              private sessions led by expert baristas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/conceptcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@concept-coffee.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
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
            <div className="mt-6 flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <span className="text-sm">Tel Aviv, Netherlands</span>
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
