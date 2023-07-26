import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <div style={{ paddingTop: 40 }}>
      <h1 style={{ fontSize: isMobile ? 30 : 60 }}>Navigating the digital landscape for success</h1>
    </div>
  )
}
