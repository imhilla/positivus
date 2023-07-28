import React from 'react'
//@ts-ignore
export default function CaseWrappers(props) {
  return (
    <div className='flex flex-col justify-center items-start' style={{
      padding: 50,
      backgroundColor: props.background,
      width: "100%",
      minWidth: 350,
      minHeight: 252,
      marginRight: 20,
      borderRadius: 45,
    }}>
      {props.children}
    </div>
  )
}
