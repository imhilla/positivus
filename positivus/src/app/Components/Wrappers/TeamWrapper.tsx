import React from 'react'
import Image from 'next/image'
import Image1 from '../../../../public/user1.png'
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
      }}
      className='flex flex-col justify-between items-center'
    >
      <div>
        <div className='flex flex-row'>
          <Image
            className='ml-4'
            src={Image1}
            alt="logo"
            unoptimized
          />
          <div>
            <h4>{props.name}</h4>
            <h4>{props.title}</h4>
          </div>
          <div>
            <Image
              className='ml-4'
              src={linkedin}
              alt="social"
              unoptimized
            />
          </div>
        </div>

      </div>
      <div
        className='w-full'
        style={{ borderTopWidth: 1, paddingTop: 10, paddingBottom: 10, borderColor: '#000' }}
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
