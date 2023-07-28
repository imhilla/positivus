import React from 'react'
import Image from 'next/image'
import logo from '../../../public/Logo.png'

export default function Footer() {
  return (
    <div
      className='w-full'
      style={{
        backgroundColor: '#191A23',
        borderWidth: 1,
        borderTopRightRadius: 45,
        borderTopLeftRadius: 45,
        marginTop: 60,
      }}
    >
      <div className='flex flex-col'>
        <Image
          style={{ width: 144, height: 23.16 }}
          src={logo}
          alt="logo"
          unoptimized
        />
        <div>
          <a>About Us</a>
          <a>Services</a>
          <a>Use Cases</a>
          <a>Pricing</a>
        </div>
        <div>
          <div>
            <h3>Contact Us</h3>
          </div>
          <div>
            <h3>Email: info@positivus.com</h3>
            <h3>Phone: 555-567-8901</h3>
            <h3>Address: 1234 Main St</h3>
            <h3>Moonstone City, Stardust State 12345</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
