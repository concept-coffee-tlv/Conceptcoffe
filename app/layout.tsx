import type React from "react"

// This layout exists to satisfy Next.js requirements.
// The actual layout with locale support is in app/[locale]/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
