"use client"

import Link from "next/link"
import { Calendar, Clock, Coffee, Gift } from "lucide-react"

export function BookingSection() {
  return (
    <section id="booking" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Book Your Workshop</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your preferred workshop and date below. Secure your spot with instant confirmation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Coffee className="h-4 w-4 text-accent" />
            <span className="text-sm text-foreground">All materials included</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-sm text-foreground">Take-home coffee bag</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
            <Clock className="h-4 w-4 text-accent" />
            <span className="text-sm text-foreground">Flexible rescheduling</span>
          </div>
        </div>

        {/* MonkeyBook embed placeholder */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 lg:p-12 shadow-sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Select a Date & Time</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Choose your preferred workshop from the calendar below. Available dates are shown in real-time.
            </p>

            {/* Placeholder for MonkeyBook embed */}
            <div className="bg-muted rounded-lg p-12 text-center border-2 border-dashed border-border">
              <p className="text-muted-foreground font-medium mb-2">MonkeyBook Booking Widget</p>
              <p className="text-sm text-muted-foreground">Your MonkeyBook embed code goes here</p>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Looking for a private session or corporate event?{" "}
              <Link href="/contact" className="text-accent font-medium hover:underline underline-offset-4">
                Contact us directly
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
