import React from 'react'

export default function Services() {
  return (
    <div style={{ height: 148 }} className='w-full flex flex-col justify-between lg:flex-row items-center'>
      <div
        className='flex items-center justify-center'
        style={{
          backgroundColor: '#B9FF66',
          height: 46,
          width: 161,
          textAlign: 'center',
          borderRadius: 7
        }}
      >
        <h1 style={{ fontSize: 36 }}>Services</h1>
      </div>
      <p className='text-center lg:text-start lg:ml-4'>
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
      </p>
    </div>
  )
}
