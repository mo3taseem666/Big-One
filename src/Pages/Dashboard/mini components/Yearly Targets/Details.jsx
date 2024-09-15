import React from 'react';
import Indicator from './Indicator';

export default function Details({ text, value, color, colorDark, percentage }) {
  return (
    <div className="flex w-full flex-col">
      <p className="text-[#888] mb-1 font-medium text-sm ">{text}</p>
      <p className="font-semibold">{value}</p>

      <div className={`h-1 mt-2 w-full ${color} `}>
        <div
          style={{ width: `${percentage}%` }}
          className={` h-1 relative ${colorDark} w-[${percentage}%] `}
        >
          <Indicator colorDark={colorDark} percentage={percentage} />
        </div>
      </div>
    </div>
  );
}
