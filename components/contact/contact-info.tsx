import { Mail, MapPin, Instagram, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-xl font-bold text-foreground mb-6">Contact Information</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a href="mailto:hello@concept-coffee.com" className="text-muted-foreground hover:text-accent">
                hello@concept-coffee.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Location</p>
              <p className="text-muted-foreground">Tel Aviv, Netherlands</p>
              <p className="text-sm text-muted-foreground/80">(Exact address shared upon booking)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Response Time</p>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-foreground">Instagram</p>
              <a
                href="https://instagram.com/conceptcoffee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                @conceptcoffee
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="font-medium text-foreground mb-3">Quick Questions?</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          For quick inquiries, feel free to DM us on Instagram. For detailed requests about corporate events or private
          sessions, the form is best.
        </p>
      </div>
    </div>
  )
}
