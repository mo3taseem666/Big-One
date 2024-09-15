import React from 'react';

export default function NewsDiv({ src, title, details, days }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img className="w-[100px] rounded-md " src={src} alt="News" />
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-[#888] text-sm">{details}</p>
        </div>
      </div>
      <p className="py-1 text-xs font-medium px-3 rounded-md bg-gray-200 ">
        {days} Days Ago
      </p>
    </div>
  );
}
