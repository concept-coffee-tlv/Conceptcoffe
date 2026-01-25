"use client"

import { useState, useEffect } from "react"
import { Palette } from "lucide-react"

const themes = [
  { id: "coffee", label: "Coffee", color: "#5c4033", class: "" },
  { id: "teal", label: "Teal + Brown", color: "#8b5e3d", class: "theme-teal" },
  { id: "teal-only", label: "Teal Only", color: "#005A59", class: "theme-teal-only" },
]

export function ThemeSwitcher() {
  const [themeIndex, setThemeIndex] = useState(0)

  useEffect(() => {
    // Remove all theme classes
    themes.forEach((t) => {
      if (t.class) document.documentElement.classList.remove(t.class)
    })
    // Add current theme class
    const currentClass = themes[themeIndex].class
    if (currentClass) {
      document.documentElement.classList.add(currentClass)
    }
  }, [themeIndex])

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length)
  }

  const currentTheme = themes[themeIndex]

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
      style={{
        backgroundColor: currentTheme.color,
        color: "white",
      }}
    >
      <Palette className="h-5 w-5" />
      <span className="text-sm font-medium">{currentTheme.label}</span>
    </button>
  )
}
