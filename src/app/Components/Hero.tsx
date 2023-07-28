import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import Image from 'next/image'
import Illustration from '../../../public/Illustration.png'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <div style={{ paddingTop: 40 }} className='lg:flex flex-row'>
      <div className='flex justify-between flex-col'>
        <h1 style={{ fontSize: isMobile ? 30 : 60 }}>Navigating the digital landscape for success</h1>
        <p className='hidden lg:block mt-8' style={{ fontSize: 24 }}>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button
          className='hidden lg:block mt-8 text-white'
          style={{
            width: 264,
            height: 68,
            backgroundColor: '#191A23',
            borderRadius: 14,
            fontSize: 20
          }}
        >
          Book a consultation
        </button>
      </div>
      <div className='pt-4 lg:pt-0 lg:h-3/4 w-full h-full lg:flex items-end justify-center'>
        <Image
          className='w-full lg:w-3/4 lg:h-3/4'
          src={Illustration}
          alt="logo"
          unoptimized
        />
      </div>
      <div>
        <p className='lg:hidden mt-4' style={{ fontSize: 24 }}>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button
          className='lg:hidden mt-4 text-white'
          style={{
            width: 264,
            height: 68,
            backgroundColor: '#191A23',
            borderRadius: 14,
            fontSize: 20,
          }}
        >
          Book a consultation
        </button>
      </div>
    </div>
  )
}
