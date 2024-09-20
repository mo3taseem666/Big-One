import React from 'react';

export default function NewsDiv({ src, title, details, days,last }) {
  return (
    <div className={`flex xs:flex-col ${last ? '' : 'xs:border-b'} xs:pb-4 justify-between xs:gap-2 items-center`}>
      <div className="flex xs:flex-col xs:text-center gap-4 items-center">
        <img className="w-[100px] rounded-md " src={src} alt="News" />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-[#888] text-sm">{details}</p>
        </div>
      </div>
      <p className="py-1 text-center text-xs font-medium px-3 rounded-md bg-gray-200 ">
        {days} Days Ago
      </p>
    </div>
  );
}
