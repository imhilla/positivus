import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import CaseWrappers from './Wrappers/CaseWrappers'
import ArrowTransparent from '../../../public/arrowtransparent.png'
import Image from 'next/image'
export default function CaseStudies() {
  const isMobile = useIsMobile()
  return (
    <div style={{ marginTop: 30 }} className='w-full flex  flex-col justify-center items-center'>
      <div
        className='flex items-center justify-center'
        style={{
          backgroundColor: '#B9FF66',
          height: isMobile ? 46 : 'auto',
          width: isMobile ? 240 : 178,
          textAlign: 'center',
          borderRadius: 7
        }}
      >
        <h1 style={{ fontSize: isMobile ? 36 : 40 }}>Case Studies</h1>
      </div>
      <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
      </p>
      <div className='overflow-x-scroll mt-8 w-full flex '>
        <CaseWrappers background="#191A23">
          <p
            className='text-white'
            style={{
              fontSize: 16
            }}>
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
          </p>
          <button
            style={{
              color: '#B9FF66'
            }}
            className='flex mt-4 items-center'>
            Learn More
            <Image
              className='ml-4'
              src={ArrowTransparent}
              alt="logo"
              unoptimized
            />
          </button>
        </CaseWrappers>
        <CaseWrappers background="#191A23">
          <p
            className='text-white'
            style={{
              fontSize: 16
            }}>
            For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <button
            style={{
              color: '#B9FF66'
            }}
            className='flex mt-4 items-center'>
            Learn More
            <Image
              className='ml-4'
              src={ArrowTransparent}
              alt="logo"
              unoptimized
            />
          </button>
        </CaseWrappers>
        <CaseWrappers background="#191A23">
          <p
            className='text-white'
            style={{
              fontSize: 16
            }}>
            For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
          </p>
          <button
            style={{
              color: '#B9FF66'
            }}
            className='flex mt-4 items-center'>
            Learn More
            <Image
              className='ml-4'
              src={ArrowTransparent}
              alt="logo"
              unoptimized
            />
          </button>
        </CaseWrappers>
      </div>
    </div>
  )
}
