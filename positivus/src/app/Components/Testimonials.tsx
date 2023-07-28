import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'

export default function Testimonials() {
  const isMobile = useIsMobile()
  return (
    <div className='w-full' style={{ marginTop: 60 }}>
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
        className='overflow-x-scroll mt-4'
        style={{
          padding: 30,
          backgroundColor: "#191A23",
          borderRadius: 45,
          width: '100%',
        }}
      >
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
              style={{ fontSize: isMobile ? 16 : 18 }}
              className='text-white py-4 px-8'>We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.</p>
          </div>
          <div className='pl-8 mt-4'>
            <h4 style={{ color: "#B9FF66" }}>John Smith</h4>
            <p className='text-white'>Marketing Director at XYZ Corp</p>
          </div>
        </div>
        <div style={{ marginTop: 60, marginBottom: 60 }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div >
  )
}
