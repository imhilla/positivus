import React from 'react'
import Star from '../../../public/star.png'
import Image from 'next/image'

export default function MakeThingsHappen() {
  return (
    <div
      className='w-full relative'
      style={{
        borderRadius: 45,
        padding: 50,
        marginTop: 60,
        backgroundColor: '#F3F3F3',
      }}
    >
      <div className='lg:flex justify-between items-center'>
        <div className='lg:w-1/3'>
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          <h3 style={{ fontSize: 23 }}>Let's make things happen</h3>
          <p style={{ fontSize: 16, marginTop: 20 }}>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button
            style={{
              height: 68,
              width: '100%',
              borderRadius: 14,
              backgroundColor: '#191A23',
              borderWidth: 1,
              marginTop: 20,
              color: '#fff',
            }}
          >
            Get your proposal
          </button>
        </div>
        <div className='hidden lg:flex absolute right-2'>
          <Image
            className='w-full h-full'
            src={Star}
            alt="logo"
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}
