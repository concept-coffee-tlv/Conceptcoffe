"use client"

import { Star } from "lucide-react"
import { useTranslations } from "next-intl"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function GoogleReviews() {
  const t = useTranslations("reviews")

  const reviews = [
    {
      author: t("review1.author"),
      rating: 5,
      text: t("review1.text"),
      date: "2 weeks ago",
    },
    {
      author: t("review2.author"),
      rating: 5,
      text: t("review2.text"),
      date: "1 month ago",
    },
    {
      author: t("review3.author"),
      rating: 5,
      text: t("review3.text"),
      date: "2 months ago",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <a
            href="https://www.google.com/maps/place/Concept:Coffee+Studio+%26+Workshops/@32.0562859,34.754659,17z/data=!3m1!4b1!4m6!3m5!1s0x212ebe62334120d5:0x77486206dc73675a!8m2!3d32.0562814!4d34.7572339!16s%2Fg%2F11wflmy036?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-lg font-medium">{t("googleReviews")}</span>
          </a>
          <a
            href="https://www.google.com/maps/place/Concept:Coffee+Studio+%26+Workshops/@32.0562859,34.754659,17z/data=!3m1!4b1!4m6!3m5!1s0x212ebe62334120d5:0x77486206dc73675a!8m2!3d32.0562814!4d34.7572339!16s%2Fg%2F11wflmy036?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
          >
            <StarRating rating={5} />
            <span className="text-2xl font-bold">{t("rating")}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 auto-rows-fr">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <p className="text-sm font-semibold text-foreground mt-4 pt-4 border-t border-border">{review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Concept:Coffee+Studio+%26+Workshops/@32.0562859,34.754659,17z/data=!3m1!4b1!4m6!3m5!1s0x212ebe62334120d5:0x77486206dc73675a!8m2!3d32.0562814!4d34.7572339!16s%2Fg%2F11wflmy036?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {t("seeAllReviews")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
