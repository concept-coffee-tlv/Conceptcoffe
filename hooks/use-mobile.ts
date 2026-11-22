import { useSyncExternalStore } from 'react'

const mobileQuery = '(max-width: 767px)'

function subscribeMobile(onChange: () => void) {
  const media = window.matchMedia(mobileQuery)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

export function useIsMobile() {
  return useSyncExternalStore(subscribeMobile, () => window.matchMedia(mobileQuery).matches, () => false)
}
