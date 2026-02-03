import { setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | concept:coffee",
  description: "Privacy policy, booking and cancellation policy, and delivery policy for concept:coffee.",
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function PolicyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Policies
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-16">

              {/* Section 1: Booking & Cancellation Policy */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Booking & Cancellation Policy
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Booking:</h3>
                    <p>All workshops must be booked in advance through the Concept:Coffee website. Payment is required at the time of booking to secure your spot.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cancellations & Reschedules:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cancel up to 48 hours in advance for a full refund.</li>
                      <li>Cancel up to 24 hours in advance to reschedule your booking for another date.</li>
                      <li>Less than 24 hours? No refunds will be issued.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">No-Shows:</h3>
                    <p>If you miss your workshop without notice, your payment will be forfeited.</p>
                    <p>Want to rebook? You can do so for a 50₪ rebooking fee.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transfers:</h3>
                    <p>Can't make it? You're welcome to transfer your booking to a friend—just let us know in advance.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Minimum Attendance:</h3>
                    <p>Each workshop requires a minimum of 2 participants to run. In the rare case that a session doesn't meet the minimum, we'll contact you at least 24 hours in advance to reschedule or offer a full refund. Cancelling of transactions will be done in accordance to חוק הגנת הצרכן, תשמ"א-1981</p>
                  </div>

                  <p>In accordance to Israeli credit card laws you must be 18 years of age or older to purchase (not to attend) the workshops.</p>

                  <p>Concept:Coffee is un-responsible for direct damages due to use of our services/products purchased through the site.</p>

                  <p>When you book through our website (powered by Wix), we only collect the info we need to confirm your spot and stay in touch—like your name, email, and payment details. Everything is handled securely, and your data stays private. We never share your information with anyone else unless we're legally required to. Payments are processed through Wix's secure system, and we don't store your credit card info.</p>
                </div>
              </div>

              {/* Section 2: Supply & Delivery Policy */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Supply & Delivery Policy — Concept:Coffee
                </h2>
                <p className="text-sm text-muted-foreground mb-6">Last updated: Dec. 2, 2025</p>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Delivery (Workshops & Events)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>All workshops take place on the date, time, and location listed on the website at the time of booking.</li>
                      <li>After booking, you will receive a confirmation email with full workshop details, including address and start time.</li>
                      <li>It is the participant's responsibility to arrive on time for the scheduled workshop.</li>
                      <li>If Concept:Coffee needs to reschedule a session, participants will be notified in advance and may choose between a new date or a full refund.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Delivery of Physical Products (if purchased through the site)</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Orders are shipped via a third-party courier service or available for pickup at the studio with prior coordination.</li>
                      <li>Standard delivery times are 3–7 business days, depending on location and product availability.</li>
                      <li>Delays caused by courier services, weather, holidays, or other factors outside of Concept:Coffee's control may occur.</li>
                      <li>In the event of a significant delay, we will do our best to keep you updated.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Shipping Costs</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Shipping fees (if applicable) will be shown at checkout and added to the total payment.</li>
                      <li>Free shipping or pickup options may be offered when available.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Non-Delivery & Damaged Items</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>If your order does not arrive within a reasonable timeframe, please contact us so we can investigate and assist.</li>
                      <li>If a product arrives damaged or incorrect, please send a photo and details. We will offer a replacement or refund according to our refund policy and Israeli consumer-protection law.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3: Privacy Policy */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Privacy Policy
                </h2>
                <p className="text-sm text-muted-foreground mb-6">Last updated: Dec. 1, 2025</p>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>At Concept:Coffee, we respect your privacy. This policy explains what information we collect, how we use it, and how we keep it safe.</p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Information We Collect</h3>
                    <p className="mb-2">We may collect the following information when you use our website or contact us:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Payment information (processed securely by third-party payment providers; we do not store full card details)</li>
                      <li>Messages or inquiries you send us</li>
                      <li>Booking details for workshops</li>
                      <li>Technical data such as IP address, browser type, and pages visited (for analytics)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How We Use Your Information</h3>
                    <p className="mb-2">We use the information we collect for:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Managing workshop bookings and communication</li>
                      <li>Processing payments</li>
                      <li>Responding to questions and support requests</li>
                      <li>Sending updates about workshops or events (only if you opted in)</li>
                      <li>Improving our website and services</li>
                      <li>Fulfilling legal or regulatory requirements</li>
                    </ul>
                    <p className="mt-2">We do not sell your information or share it with third parties for marketing purposes.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Third-Party Services</h3>
                    <p className="mb-2">We may use trusted external providers to operate our website and bookings, such as:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Website hosting services (Wix)</li>
                      <li>Payment processors (e.g., credit card gateways, Bit)</li>
                      <li>Analytics tools (e.g., Google Analytics)</li>
                    </ul>
                    <p className="mt-2">These services may receive limited information only as necessary to perform their functions.</p>
                    <p>Information collected through our website may be stored on secure servers located outside of Israel, in accordance with Wix's data protection practices.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Protection</h3>
                    <p>We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. While no system is completely secure, we follow industry-standard practices.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                    <p className="mb-2">You may request:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Access to the personal information we hold about you</li>
                      <li>Correction or update of your information</li>
                      <li>Removal of your information, where applicable under law</li>
                      <li>To stop receiving marketing updates</li>
                    </ul>
                    <p className="mt-2">To submit a request, contact us at: <a href="mailto:evan@concept-coffee.com" className="text-accent hover:underline">evan@concept-coffee.com</a></p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
                    <p>Our website may use cookies to improve your browsing experience and to collect anonymous analytics. You can control cookie settings in your browser.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Minors</h3>
                    <p>We do not knowingly collect personal information from individuals under the age of 18 without parental consent.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Changes to This Policy</h3>
                    <p>We may update this policy from time to time. The latest version will always be available on our website.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <p>For questions about this Privacy Policy, contact us at: <a href="mailto:evan@concept-coffee.com" className="text-accent hover:underline">evan@concept-coffee.com</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
