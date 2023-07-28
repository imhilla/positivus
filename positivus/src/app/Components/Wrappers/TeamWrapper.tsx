import React from 'react'
import Image from 'next/image'
import useIsMobile from '@/Hooks/resizeHooks'
import linkedin from '../../../../public/linkedin.png'
//@ts-ignore
export default function TeamWrapper(props) {
  const isMobile = useIsMobile()
  return (
    <div
      style={{
        padding: 35,
        textAlign: 'center',
        borderRadius: 45,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderWidth: 1,
        borderBottomWidth: 5,
        borderColor: "#191A23",
        marginTop: 30
      }}
      className='flex flex-col justify-between items-center'
    >
      <div>
        <div className='flex flex-row'>
          <Image
            className='mr-4'
            src={props.image}
            alt="logo"
            unoptimized
            style={{ height: 80, width: 80 }}
          />
          <div className='flex flex-col justify-end items-start p-1'>
            <h4 style={{ fontSize: 16 }} className='text-start font-semibold'>{props.name}</h4>
            <p style={{ fontSize: 16 }} className='text-start'>{props.title}</p>
          </div>
          <div>
            <Image
              className='ml-4'
              src={linkedin}
              alt="social"
              unoptimized
              style={{ height: 30, width: 30 }}
            />
          </div>
        </div>
      </div>
      <div
        className='w-full'
        style={{ borderTopWidth: 1, marginTop: 10, borderColor: '#000', paddingTop: 10 }}
      >
        <p
          style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }}
          className='text-center lg:text-start'
        >
          {props.experience}
        </p>
      </div>
    </div>
  )
}
