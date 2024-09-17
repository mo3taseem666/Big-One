import React from 'react'

export default function LateseUploadDiv({fileName,name,icon,fileSize,isLast}) {
  return (
    <div className={`flex items-center justify-between ${isLast ? 'pt-2' : 'border-b py-2'} `}>
        <div className='flex gap-3'>
            <img className='w-10' src={icon} alt="file" />
            <div>
                <p className='font-medium'>{fileName}</p>
                <p className='text-[#888] text-sm font-medium '>{name}</p>
            </div>
        </div>

        <p className='h-6 w-14 text-xs font-medium flex justify-center items-center bg-gray-200 rounded-md'>{fileSize}</p>
    </div>
  )
}
