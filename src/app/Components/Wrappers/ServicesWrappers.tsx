import React from 'react'

//@ts-ignore
export default function ServicesWrappers(props) {
  return (
    <div
      className='w-full'
      style={{
        borderRadius: 45,
        padding: 50,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderWidth: 1,
        borderBottomWidth: 5,
        borderColor: "#191A23",
        marginTop: 30,
        backgroundColor: props.background ? props.background : '#fff'
      }}
    >
      {props.children}
    </div>
  )
}
