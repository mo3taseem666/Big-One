import React from 'react'

export default function Header() {
  return (
    <div>
        <p className="text-2xl mb-5 font-semibold">Latest Tasks</p>
        <div className='text-[#888] font-medium flex justify-between'>
            <p>Keyword</p>
            <p>Search Count</p>
        </div>
    </div>
  )
}
