'use client'
import Header from './Components/Header'
import { space_grotesk } from '../../styles/fonts'
import Hero from './Components/Hero'
import useIsMobile from '@/Hooks/resizeHooks'

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <main
      style={{ ...space_grotesk.style, paddingTop: isMobile ? 30 : 60 }}
      className="flex min-h-screen min-w-screen w-full flex-col items-center justify-between">
      <Header />
      <Hero />
    </main>
  )
}
