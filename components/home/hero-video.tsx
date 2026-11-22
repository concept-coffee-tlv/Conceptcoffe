"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

export function HeroVideo({ playLabel, pauseLabel }: { playLabel: string; pauseLabel: string }) {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const element = video.current
    if (!element) return

    function pauseForPreference(event: MediaQueryListEvent) {
      if (event.matches) element?.pause()
    }

    if (!preference.matches) void element.play().catch(() => {})
    preference.addEventListener("change", pauseForPreference)
    return () => preference.removeEventListener("change", pauseForPreference)
  }, [])

  function togglePlayback() {
    const element = video.current
    if (!element) return
    if (element.paused) void element.play().catch(() => {})
    else element.pause()
  }

  return (
    <>
      <div className="absolute inset-0 z-0">
        <video
          ref={video}
          id="home-hero-video"
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="w-full h-full object-cover"
        >
          <source src="/videos/herovideo_compressed.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <button
        type="button"
        aria-controls="home-hero-video"
        aria-label={playing ? pauseLabel : playLabel}
        onClick={togglePlayback}
        className="absolute bottom-4 end-4 z-20 inline-flex size-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {playing ? <Pause aria-hidden="true" size={16} /> : <Play aria-hidden="true" size={16} />}
      </button>
    </>
  )
}
