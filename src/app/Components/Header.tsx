import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'
import Burger from '../../../public/burger.png'
import useIsMobile from '@/Hooks/resizeHooks'
export default function Header() {
  const isMobile = useIsMobile()

  return (
    <div className='flex w-full justify-between items-center'>
      <Image
        style={{ width: 144, height: 23.16 }}
        src={Logo}
        alt="logo"
        unoptimized
      />
      <Image
        className='lg:hidden'
        style={{ width: 24, height: 16 }}
        src={Burger}
        alt="logo"
        unoptimized
      />
      <div className='hidden lg:flex flex-row items-center justify-center'>
        <div>
          <a
            style={{
              paddingRight: 40,
              fontSize: 20,
            }}
          >About us</a>
          <a
            style={{
              paddingRight: 40,
              fontSize: 20,
            }}>Services</a>
          <a
            style={{
              paddingRight: 40,
              fontSize: 20,
            }}>Use Cases</a>
          <a
            style={{
              paddingRight: 40,
              fontSize: 20,
            }}>Pricing</a>
          <a
            style={{
              paddingRight: 40,
              fontSize: 20,
            }}>Blog</a>
        </div>
        <button
          style={{
            height: 68,
            width: 231,
            borderRadius: 14,
            borderColor: '#191A23',
            borderWidth: 1,
          }}
        >
          Request a quote
        </button>
      </div>
    </div>
  )
}
