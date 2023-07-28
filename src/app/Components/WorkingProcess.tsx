import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import Consultation from './Consultation'

export default function WorkingProcess() {
  const isMobile = useIsMobile()

  return (
    <div style={{ marginTop: 60, width: '100%' }}>
      <div style={{ height: 'auto' }} className='w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center'>
        <div className='flex flex-col justify-center items-center lg:hidden'>
          <div
            className='flex items-center justify-center'
            style={{
              backgroundColor: '#B9FF66',
              height: 46,
              width: 226,
              textAlign: 'center',
              borderRadius: 7
            }}
          >
            <h1 style={{ fontSize: 36 }}>Our Working</h1>
          </div>
          <div
            className='flex items-center justify-center'
            style={{
              backgroundColor: '#B9FF66',
              height: 46,
              width: 167,
              textAlign: 'center',
              borderRadius: 7
            }}
          >
            <h1 style={{ fontSize: 36 }}>Process</h1>
          </div>
        </div>
        <div className='lg:flex flex-col justify-center items-center hidden'>
          <div
            className='flex items-center justify-center'
            style={{
              backgroundColor: '#B9FF66',
              height: 'auto',
              width: 412,
              textAlign: 'center',
              borderRadius: 7
            }}
          >
            <h1 style={{ fontSize: 40 }}>Our Working Process</h1>
          </div>
        </div>

        <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div style={{ marginTop: 30, width: '100%' }}>
        <Consultation textNumber={"01"} title={"Consultation"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
        <Consultation textNumber={"02"} title={"Research and Strategy Development"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
        <Consultation textNumber={"03"} title={"Implementation"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
        <Consultation textNumber={"04"} title={"Monitoring and Optimization"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
        <Consultation textNumber={"05"} title={"Reporting and Communication"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
        <Consultation textNumber={"06"} title={"Continual Improvement"} paraText={"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."} />
      </div>
    </div>
  )
}
