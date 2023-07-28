import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import Image from 'next/image'
import arrowleft from '../../../public/arrowleft.png'
import arrowright from '../../../public/arrowright.png'
import stars from '../../../public/starstestimonials.png'

export default function Testimonials() {
  const isMobile = useIsMobile()
  return (
    <div className='w-full flex flex-col items-center justify-center' style={{ marginTop: 60 }}>
      <div style={{ height: 'auto' }} className='w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center'>
        <div
          className='flex items-center justify-center'
          style={{
            backgroundColor: '#B9FF66',
            height: isMobile ? 46 : 'auto',
            width: isMobile ? 231 : 255,
            textAlign: 'center',
            borderRadius: 7
          }}
        >
          <h1 style={{ fontSize: isMobile ? 36 : 40 }}>Testimonials</h1>
        </div>
        <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div
        className=' mt-8 w-full'
        style={{
          backgroundColor: "#191A23",
          borderRadius: 45,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30
        }}
      >
        <div className={`flex overflow-x-scroll gap-5 pb-4`}>
          <div className='relative'>
            <div
              style={{
                fontSize: 16,
                borderColor: '#B9FF66',
                backgroundColor: "#191A23",
                borderRadius: 45,
                width: 390,
                borderWidth: 1
              }}
            >
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white py-4 px-8'>We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.</p>
            </div>
            <div className='pl-8 mt-4'>
              <h4 style={{ color: "#B9FF66" }}>John Smith</h4>
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
          </div>
          <div className='relative'>
            <div
              style={{
                fontSize: 16,
                borderColor: '#B9FF66',
                backgroundColor: "#191A23",
                borderRadius: 45,
                width: 390,
                borderWidth: 1
              }}
            >
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white py-4 px-8'>We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.</p>
            </div>
            <div className='pl-8 mt-4'>
              <h4 style={{ color: "#B9FF66" }}>John Smith</h4>
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
          </div>
          <div className='relative'>
            <div
              style={{
                fontSize: 16,
                borderColor: '#B9FF66',
                backgroundColor: "#191A23",
                borderRadius: 45,
                width: 390,
                borderWidth: 1
              }}
            >
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white py-4 px-8'>We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.</p>
            </div>
            <div className='pl-8 mt-4'>
              <h4 style={{ color: "#B9FF66" }}>John Smith</h4>
              <p
                style={{ fontSize: isMobile ? 12 : 14 }}
                className='text-white'>Marketing Director at XYZ Corp</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div
            className='flex justify-between lg:w-96 items-center'
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            <div>
              <Image
                src={arrowleft}
                style={{ width: 20, height: 20 }}
                alt="logo"
                unoptimized
              />
            </div>
            <div style={{ marginLeft: 10, marginRight: 10 }}>
              <Image
                src={stars}
                alt="logo"
                unoptimized
              />
            </div>
            <div>
              <Image
                src={arrowright}
                style={{
                  height: 20,
                  width: 20
                }}
                alt="logo"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
