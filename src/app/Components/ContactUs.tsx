import React from 'react'
import Image from 'next/image'
import radiocheked from '../../../public/radiochecked.png'
import radiounchecked from '../../../public/radiobtnunchecked.png'
import contactusleft from '../../../public/sayhiimage.png'
export default function ContactUs() {

  return (
    <div
      className='w-full lg:flex justify-between'
      style={{
        padding: 30,
        marginTop: 60,
        backgroundColor: '#F3F3F3',
        borderRadius: 45
      }}
    >
      <div className='lg:w-1/2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='flex items-center'>
            <Image
              src={radiocheked}
              alt="logo"
              unoptimized
              style={{ height: 28, width: 28 }}
            />
            <h3 style={{ fontSize: 16 }} className='ml-2'>Say Hi</h3>
          </div>
          <div className='flex items-center'>
            <Image
              src={radiounchecked}
              alt="logo"
              unoptimized
              style={{ height: 28, width: 28 }}
            />
            <h3 style={{ fontSize: 16 }} className='ml-2'>Get a Quote</h3>
          </div>
        </div>
        <div>
          <div className='flex flex-col pt-4'>
            <label className='mb-2'>
              Name
            </label>
            <input
              style={{
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#000',
                height: 60,
                paddingLeft: 10
              }}
              placeholder='Name'
              type='text'
            />
          </div>
          <div className='flex flex-col pt-4'>
            <label className='mb-2'>
              Email*
            </label>
            <input
              style={{
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#000',
                height: 60,
                paddingLeft: 10
              }}
              placeholder='Email'
              type='text'
            />
          </div>
          <div className='flex flex-col pt-4'>
            <label className='mb-2'>
              Message
            </label>
            <input
              style={{
                borderRadius: 14,
                borderWidth: 1,
                borderColor: '#000',
                height: 100,
                paddingLeft: 10
              }}
              placeholder='Message'
              type='text'
            />
          </div>
        </div>
      </div>
      <div className='hidden lg:flex justify-between items-center w-1/2'>
        <div></div>
        <Image
          className='w-3/4 h-auto'
          src={contactusleft}
          alt="logo"
          unoptimized
        />
      </div>
    </div>
  )
}
