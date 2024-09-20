import React from 'react'

export default function ReminderDiv({bgColor,text,date}) {
  return (
    <div className='flex gap-4 h-[46px] items-center'>
        <div className={`size-[15px] rounded-full ${bgColor} `}></div>
        <div className={`w-[2px] h-full ${bgColor}`}></div>
        <div className='flex gap-2 flex-col'>
            <p className='font-bold text-sm'>{text}</p>
            <p className='text-xs text-[#888] font-medium'>{date}</p>
        </div>
    </div>
  )
}
