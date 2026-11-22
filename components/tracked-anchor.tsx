"use client"

import type { ComponentProps } from "react"
import { track } from "@vercel/analytics"

export function TrackedAnchor({ event, properties, onClick, ...props }: ComponentProps<"a"> & {
  event: string
  properties: Record<string, string>
}) {
  return <a {...props} onClick={(click) => {
    onClick?.(click)
    if (!click.defaultPrevented) track(event, properties)
  }} />
}
