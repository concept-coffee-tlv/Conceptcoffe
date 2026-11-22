"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"
import { TrackedAnchor } from "@/components/tracked-anchor"

const widgetScript = "https://widget.monkeybook.io/widget.js?account=695c2746b187ec242a817de4"

export function BookingWidget({ url, title, locale, workshop, fallbackLabel, minHeight = 500 }: {
  url: string
  title: string
  locale: string
  workshop: string
  fallbackLabel: string
  minHeight?: number
}) {
  const container = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const element = container.current
    if (!element) return

    function labelFrame() {
      const iframe = element?.querySelector("iframe")
      if (iframe) iframe.title = title
    }

    labelFrame()
    const observer = new MutationObserver(labelFrame)
    observer.observe(element, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [title])

  const fallback = (
    <TrackedAnchor
      href={url}
      event="booking_link_clicked"
      properties={{ locale, workshop, destination: "monkeybook" }}
      className="font-medium underline underline-offset-4"
    >
      {fallbackLabel}
    </TrackedAnchor>
  )

  return (
    <>
      <div
        ref={container}
        className="monkeybook-widget-container"
        data-iframe-src={url}
        style={{ minHeight }}
        hidden={failed}
      />
      <Script src={widgetScript} strategy="afterInteractive" onError={() => setFailed(true)} />
      {failed && <p className="text-center">{fallback}</p>}
      <noscript>
        <style>{".monkeybook-widget-container { display: none; }"}</style>
        <p className="text-center">{fallback}</p>
      </noscript>
    </>
  )
}
