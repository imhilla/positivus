'use client'
import Header from './Components/Header'
import { space_grotesk } from '../../styles/fonts'
import Hero from './Components/Hero'
import useIsMobile from '@/Hooks/resizeHooks'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import Companies from './Components/Companies'
import Services from './Components/Services'
import MakeThingsHappen from './Components/MakeThingsHappen'
import CaseStudies from './Components/CaseStudies'
import WorkingProcess from './Components/WorkingProcess'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'

export default function Home() {
  const isMobile = useIsMobile()
  const [finishLoading, setFinishLoading] = useState(false)

  useEffect(() => {
    setFinishLoading(true)
  }, [])

  return (
    <main
      className="flex min-h-screen min-w-screen w-full flex-col items-start justify-start "
    >
      <div
        className="flex min-h-screen min-w-screen w-full flex-col items-start justify-start"
        style={{
          ...space_grotesk.style,
          paddingTop: isMobile ? 30 : 60,
          paddingRight: isMobile ? 20 : 100,
          paddingLeft: isMobile ? 20 : 100,
        }}
      >
        {
          finishLoading && <>
            <Header />
            <Hero />
            <Companies />
            <Services />
            <MakeThingsHappen />
            <CaseStudies />
            <WorkingProcess />
            <Team />
            <Testimonials />
            <ContactUs />
          </>
        }
      </div>
      {
        finishLoading && <Footer />
      }
    </main>
  )
}
