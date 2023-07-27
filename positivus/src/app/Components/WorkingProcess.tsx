import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'

export default function WorkingProcess() {
  const isMobile = useIsMobile()

  return (
    <div style={{ marginTop: 60 }}>
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
        <div className='flex flex-col justify-center items-center hidden: lg:flex'>
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
    </div>
  )
}
