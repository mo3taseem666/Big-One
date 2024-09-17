import React from 'react'

export default function TopSearcDiv({text,number}) {
  return (
    <div className='flex justify-between'>
        <p className='font-medium'>{text}</p>
        <p className='h-6 w-10 flex justify-center items-center bg-gray-200 rounded-md text-xs font-medium'>{number}</p>
    </div>
  )
}
