import React from 'react';

export default function NavHeader() {
  return (
    <div className="flex-col flex items-center gap-3">
      <p className="font-bold text-xl">Moataseem</p>
      <div className="flex items-center gap-1">
        <div className="bg-black h-[2px] w-8"></div>
        <div className="rounded-full size-3 bg-black"></div>
        <div className="bg-black h-[2px] w-8"></div>
      </div>
    </div>
  );
}
