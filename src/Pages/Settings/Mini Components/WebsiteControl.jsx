import React from 'react'
import OnOff from '../../../Golbal Components/OnOff'

export default function WebsiteControl() {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <p className='font-semibold'>Website Control</p>
            <p className='text-[#888] text-sm'>Open/Close Website And Type The Reason</p>
        </div>
        <OnOff enabled={true} />
    </div>
  )
}
