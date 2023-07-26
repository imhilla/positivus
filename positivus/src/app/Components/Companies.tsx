import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import Image from 'next/image'
import Cplogo from '../../../public/cplogo1.png'
import Cplogo2 from '../../../public/cplogo2.png'
import Cplogo3 from '../../../public/cplogo3.png'
import Cplogo4 from '../../../public/cplogo4.png'
import Cplogo5 from '../../../public/cplogo5.png'
import Cplogo6 from '../../../public/cplogo6.png'

export default function Companies() {
  const isMobile = useIsMobile()

  return (
    <div className='flex flex-row  flex-wrap w-full justify-start lg:justify-between items-center'
      style={{ marginTop: 60, marginBottom: 60 }}
    >
      <Image
        className='pr-2 py-2'
        src={Cplogo}
        alt="logo"
        unoptimized
      />
      <Image
        className='px-2 py-2'
        src={Cplogo2}
        alt="logo"
        unoptimized
      />
      <Image
        className='px-2 py-2'
        src={Cplogo3}
        alt="logo"
        unoptimized
      />
      <Image
        className='px-2 py-2'
        src={Cplogo4}
        alt="logo"
        unoptimized
      />
      <Image
        className='px-2 py-2'
        src={Cplogo5}
        alt="logo"
        unoptimized
      />
      <Image
        className='pl-2 py-2'
        src={Cplogo6}
        alt="logo"
        unoptimized
      />
    </div>
  )
}
