import useIsMobile from '@/Hooks/resizeHooks'
import React from 'react'
import ServicesWrappers from './Wrappers/ServicesWrappers'
import Image from 'next/image'
import Arrow from '../../../public/arrow.png'
import tokyo from '../../../public/tokyo.png'
import tokyo2 from '../../../public/tokyo2.png'
import arrow2 from '../../../public/arrowhite.png'
import tokyo3 from '../../../public/tokyo3.png'
import tokoyoemail from '../../../public/tokyoemail.png'
import tokyo4 from '../../../public/tokyo4.png'
import tokyo5 from '../../../public/tokyo5.png'
export default function Services() {
  const isMobile = useIsMobile()

  return (
    <div className='w-full'>
      <div style={{ height: 'auto' }} className='w-full flex flex-col justify-between lg:flex-row lg:justify-start items-center'>
        <div
          className='flex items-center justify-center'
          style={{
            backgroundColor: '#B9FF66',
            height: isMobile ? 46 : 'auto',
            width: isMobile ? 161 : 178,
            textAlign: 'center',
            borderRadius: 7
          }}
        >
          <h1 style={{ fontSize: isMobile ? 36 : 40 }}>Services</h1>
        </div>
        <p style={{ fontSize: isMobile ? 16 : 18, marginTop: isMobile ? 30 : 0 }} className='text-center lg:text-start lg:ml-4 lg:w-1/2'>
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className='w-full lg:grid grid-cols-2 gap-5 lg:mt-4'>
        <ServicesWrappers background={'#B9FF66'}>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 190, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>Pay-per-click</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 172, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>advertising</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={Arrow}
                  alt="logo"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokyo2}
                  alt="logo"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
        <ServicesWrappers>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 190, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Search engine</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 172, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Optimization</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={Arrow}
                  alt="logo"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokyo}
                  alt="logo"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
        <ServicesWrappers background='#191A23'>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 190, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Social Media</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 172, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Marketing</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={arrow2}
                  alt="arrow2"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokyo3}
                  alt="tokyo3"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
        <ServicesWrappers background='#F3F3F3'>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 80, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Email</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 172, height: 33, borderRadius: 7, backgroundColor: '#B9FF66' }}>
                <h3 style={{ fontSize: 26 }}>Marketing</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={Arrow}
                  alt="arrow2"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokoyoemail}
                  alt="tokyo3"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
        <ServicesWrappers background='#B9FF66'>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 121, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>Content</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 121, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>Creation</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={Arrow}
                  alt="arrow2"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokyo4}
                  alt="tokyo3"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
        <ServicesWrappers background='#191A23'>
          <div>
            <div>
              <div className='flex justify-center items-center w-full' style={{ width: 186, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>Analytics and</h3>
              </div>
              <div className='flex justify-center items-center' style={{ width: 121, height: 33, borderRadius: 7, backgroundColor: '#fff' }}>
                <h3 style={{ fontSize: 26 }}>Tracking</h3>
              </div>
            </div>
            <div className='flex flex-row justify-between items-end' style={{ marginTop: 27 }}>
              <div style={{ marginRight: 50 }}>
                <Image
                  src={arrow2}
                  alt="arrow2"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  src={tokyo5}
                  alt="tokyo3"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </ServicesWrappers>
      </div>
    </div>

  )
}
