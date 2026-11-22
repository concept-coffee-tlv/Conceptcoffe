"use client"

import { useState, type FormEvent } from "react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { GroupFormCopy } from "@/lib/audience-content"
import { site } from "@/lib/site"
import type { Locale } from "@/src/i18n/routing"

function isContact(value: string) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  const phone = /^\+?[\d ().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7
  return email || phone
}

export function GroupInquiry({ copy, locale }: { copy: GroupFormCopy; locale: Locale }) {
  const [draftReady, setDraftReady] = useState(false)

  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const contact = String(data.get("contact") ?? "").trim()
    const input = form.elements.namedItem("contact") as HTMLInputElement
    if (!isContact(contact)) {
      input.setCustomValidity(copy.invalidContact)
      input.reportValidity()
      return
    }

    const fields = ["name", "contact", "organization", "participants", "date", "language", "venue", "event", "notes"] as const
    const body = fields.flatMap((field) => {
      const value = String(data.get(field) ?? "").trim()
      return value ? [`${copy[field]}: ${value}`] : []
    }).join("\r\n")

    setDraftReady(true)
    track("group_email_draft_requested", { locale })
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`
  }

  const selects = [
    { name: "language", options: copy.languages },
    { name: "venue", options: copy.venues },
    { name: "event", options: copy.eventTypes },
  ] as const

  return (
    <>
      <p className="mt-3 max-w-prose text-muted-foreground">{copy.intro}</p>
      <form action={`mailto:${site.email}`} method="post" encType="text/plain" onSubmit={openDraft} className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          {copy.name}
          <Input name="name" autoComplete="name" required maxLength={100} pattern={".*\\S.*"} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {copy.contact}
          <Input name="contact" autoComplete="off" required maxLength={160} onChange={(event) => event.currentTarget.setCustomValidity("")} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {copy.organization}
          <Input name="organization" autoComplete="organization" maxLength={100} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {copy.participants}
          <Input name="participants" type="number" min={1} step={1} required />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {copy.date}
          <Input name="date" type="date" />
        </label>
        {selects.map(({ name, options }) => (
          <label key={name} className="grid gap-2 text-sm font-medium">
            {copy[name]}
            <select name={name} required defaultValue="" className="h-9 min-w-0 rounded-md border border-input bg-background px-3 focus-visible:outline-2 focus-visible:outline-ring">
              <option value="" disabled>{copy.choose}</option>
              {options.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        ))}
        <label className="grid gap-2 text-sm font-medium sm:col-span-2">
          {copy.notes}
          <Textarea name="notes" maxLength={500} rows={3} />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" aria-describedby="inquiry-handoff" className="bg-primary text-primary-foreground">{copy.submit}</Button>
          <p id="inquiry-handoff" className="mt-2 text-sm text-muted-foreground">{copy.preSubmit}</p>
          <p role="status" className="mt-2 text-sm font-medium">{draftReady ? copy.status : ""}</p>
        </div>
      </form>
    </>
  )
}
