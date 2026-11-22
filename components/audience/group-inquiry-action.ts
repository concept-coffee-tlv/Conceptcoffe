"use server"

import { hasLocale } from "next-intl"
import { groupCopy } from "@/lib/audience-content"
import { inquiryLimits, type InquiryStatus } from "@/lib/group-inquiry"
import { canViewAudiencePages } from "@/lib/seo"
import { routing, type Locale } from "@/src/i18n/routing"

const inquiryEndpoint = "https://formspree.io/f/xaeopevz"

function readField(form: FormData, field: keyof typeof inquiryLimits) {
  const value = form.get(field)
  if (typeof value !== "string" || value.length > inquiryLimits[field]) return ""
  return value.trim().replace(/\r\n?/g, "\n")
}

function readSelection(form: FormData, field: string, labels: Record<string, string>) {
  const value = form.get(field) ?? ""
  if (value === "") return ""
  return typeof value === "string" && Object.hasOwn(labels, value) ? labels[value] : null
}

function isCalendarDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || value.startsWith("0000-")) return false
  const date = new Date(`${value}T00:00:00Z`)
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export async function sendGroupInquiry(
  locale: Locale,
  _previous: InquiryStatus,
  form: FormData,
): Promise<InquiryStatus> {
  if (!canViewAudiencePages() || !hasLocale(routing.locales, locale)) return "unavailable"
  if (form.get("website")) return "error"

  const name = readField(form, "name")
  const contact = readField(form, "contact")
  const interest = readField(form, "interest")
  const isEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(contact)
  const isPhone = /^\+?[\d ().-]+$/.test(contact) && contact.replace(/\D/g, "").length >= 7

  if (!name || name.includes("\n") || !interest) return "invalidFields"
  if (!isEmail && !isPhone) return "invalidContact"

  const participants = form.get("participants") ?? ""
  const preferredDate = form.get("date") ?? ""
  const occasion = readSelection(form, "occasion", groupCopy.en.form.occasions)
  const language = readSelection(form, "language", groupCopy.en.form.languageOptions)
  const count = typeof participants === "string" && /^\d+$/.test(participants) ? Number(participants) : 0

  if (
    (participants !== "" && (!Number.isSafeInteger(count) || count < 1)) ||
    (preferredDate !== "" && (typeof preferredDate !== "string" || !isCalendarDate(preferredDate))) ||
    occasion === null ||
    language === null
  ) {
    return "invalidPlanning"
  }

  const submission = {
    subject: "Group workshop inquiry",
    name,
    ...(isEmail ? { email: contact } : { phone: contact }),
    message: interest,
    "Page language": locale === "he" ? "Hebrew" : "English",
    "Estimated group size": count || undefined,
    "Preferred date": preferredDate || undefined,
    Occasion: occasion || undefined,
    "Preferred language": language || undefined,
  }

  try {
    const response = await fetch(inquiryEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
      redirect: "error",
    })

    if (response.status === 429) return "rateLimited"
    if (!response.ok) {
      console.error("Formspree rejected the group inquiry with status %d", response.status)
      return "error"
    }

    const receipt = await response.json()
    return receipt?.ok === true ? "sent" : "error"
  } catch {
    console.error("Formspree group inquiry request failed")
    return "error"
  }
}
