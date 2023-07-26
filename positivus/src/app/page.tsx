'use client'
import Header from './Components/Header'
import { space_grotesk } from '../../styles/fonts'
import Hero from './Components/Hero'
import useIsMobile from '@/Hooks/resizeHooks'
import Footer from './Components/Footer'

export default function Home() {
  const isMobile = useIsMobile()

  return (
    <main
      style={{
        ...space_grotesk.style,
        paddingTop: isMobile ? 30 : 60,
        paddingRight: isMobile ? 20 : 100,
        paddingLeft: isMobile ? 20 : 100,
      }}
      className="flex min-h-screen min-w-screen w-full flex-col items-start justify-start"
    >
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
