import React from 'react'

export default function Indicator({colorDark,percentage}) {
  return (
    <div
    className={`absolute flex justify-center items-center border border-black -right-5 bottom-4 ${colorDark}
        h-6 w-10 flex justify-center after:absolute after:w-0 after:h-0 after:border-l-4
        after:border-r-4 after:border-t-8 after:border-l-transparent
        after:border-r-transparent after:border-black after:-bottom-2`}
  >
    <span className="text-xs text-white font-semibold">
      {percentage}%
    </span>
  </div>
  )
}
