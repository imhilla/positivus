import React, { useState } from 'react'
import Image from 'next/image'
import Plus from '../../../public/btnplus.png'
import Minus from '../../../public/btnminus.png'
import useIsMobile from '@/Hooks/resizeHooks'
//@ts-ignore
export default function Consultation(props) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <div
      className='w-full'
      style={{
        borderRadius: 45,
        padding: 30,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderWidth: 1,
        borderBottomWidth: 5,
        borderColor: "#191A23",
        marginTop: 30,
        backgroundColor: isOpen ? "#B9FF66" : "#F3F3F3"
      }}>
      <div className='flex justify-between items-center w-full'>
        <div className='flex justify-center items-center'>
          <h3 className='font-semibold' style={{ fontSize: 30, marginRight: 10 }}>{props.textNumber}</h3>
          <h4 className='font-semibold' style={{ fontSize: 18 }}>{props.title}</h4>
        </div>
        <div>
          {
            isOpen ? <Image
              onClick={() => setIsOpen(!isOpen)}
              className='ml-4'
              src={Minus}
              style={{ height: 30, width: 30 }}
              alt="logo"
              unoptimized
            /> : <Image
              onClick={() => setIsOpen(!isOpen)}
              className='ml-4'
              src={Plus}
              alt="logo"
              style={{ height: 30, width: 30 }}
              unoptimized
            />
          }
        </div>
      </div>
      {isOpen && <div style={{ marginTop: 20, borderTopWidth: 1, paddingTop: 10, borderColor: "#000" }}>
        <p>{props.paraText}</p>
      </div>
      }
    </div>
  )
}
