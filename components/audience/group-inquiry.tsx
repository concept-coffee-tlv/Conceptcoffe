"use client"

import { startTransition, useActionState, useEffect, useState, type FormEvent } from "react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendGroupInquiry } from "@/components/audience/group-inquiry-action"
import type { GroupFormCopy } from "@/lib/audience-content"
import { inquiryLimits, type InquiryStatus } from "@/lib/group-inquiry"
import type { Locale } from "@/src/i18n/routing"

const initialFields = { name: "", contact: "", participants: "", date: "", occasion: "", language: "", interest: "" }

export function GroupInquiry({ copy, locale }: { copy: GroupFormCopy; locale: Locale }) {
  const [status, submit, pending] = useActionState(sendGroupInquiry.bind(null, locale), "idle" as InquiryStatus)
  const [fields, setFields] = useState(initialFields)
  const selections = [
    { name: "occasion", label: copy.occasion, options: copy.occasions },
    { name: "language", label: copy.language, options: copy.languageOptions },
  ] as const

  function setField(name: keyof typeof initialFields, value: string) {
    setFields((previous) => ({ ...previous, [name]: value }))
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    startTransition(() => submit(data))
  }

  useEffect(() => {
    if (status === "sent") track("group_inquiry_sent", { locale })
  }, [locale, status])

  return (
    <>
      {status !== "sent" && (
        <form action={submit} onSubmit={submitInquiry} className="mt-5 grid gap-4">
          <label className="grid gap-2 text-sm font-medium">
            {copy.name}
            <Input name="name" autoComplete="name" required maxLength={inquiryLimits.name} value={fields.name} onChange={(event) => setField("name", event.target.value)} />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {copy.contact}
            <Input
              name="contact"
              dir="auto"
              required
              maxLength={inquiryLimits.contact}
              aria-invalid={status === "invalidContact"}
              aria-describedby={status === "invalidContact" ? "group-inquiry-status" : undefined}
              value={fields.contact}
              onChange={(event) => setField("contact", event.target.value)}
            />
          </label>
          <fieldset className="min-w-0 rounded-md border border-border p-4" aria-describedby={status === "invalidPlanning" ? "group-inquiry-status" : undefined}>
            <legend className="px-1 text-sm font-semibold">{copy.planning}</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2 text-sm font-medium">
                {copy.participants}
                <Input name="participants" type="number" min={1} step={1} value={fields.participants} onChange={(event) => setField("participants", event.target.value)} />
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-medium">
                {copy.date}
                <Input name="date" type="date" value={fields.date} onChange={(event) => setField("date", event.target.value)} />
              </label>
              {selections.map(({ name, label, options }) => (
                <label key={name} className="grid min-w-0 gap-2 text-sm font-medium">
                  {label}
                  <select
                    name={name}
                    value={fields[name]}
                    onChange={(event) => setField(name, event.target.value)}
                    className="h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
                  >
                    <option value="">{copy.choose}</option>
                    {Object.entries(options).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                  </select>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="grid gap-2 text-sm font-medium">
            {copy.interest}
            <Textarea
              name="interest"
              required
              maxLength={inquiryLimits.interest}
              rows={3}
              placeholder={copy.interestHint}
              value={fields.interest}
              onChange={(event) => setField("interest", event.target.value)}
            />
          </label>
          <label hidden>
            Website
            <input name="website" autoComplete="off" tabIndex={-1} />
          </label>
          <Button type="submit" disabled={pending} className="justify-self-start">
            {pending ? copy.sending : copy.submit}
          </Button>
        </form>
      )}
      <p id="group-inquiry-status" role="status" className="mt-3 text-sm font-medium empty:mt-0">
        {status !== "idle" && !pending ? copy[status] : ""}
      </p>
    </>
  )
}
