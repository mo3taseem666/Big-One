import React from 'react';

export default function OneDiv({ icon, number, text }) {
  return (
    <div className="flex p-5 border rounded-xl border-gray-300 w-1/2 xs:w-full flex-col gap-2 items-center">
      {icon}
      <p className="text-xl font-bold">{number}</p>
      <p className="text-[#888] text-sm font-medium ">{text}</p>
    </div>
  );
}
