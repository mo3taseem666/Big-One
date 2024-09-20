import React from 'react';

export default function Header({header}) {
  return (
    <div className="w-fit mb-8 xs:mb-4 flex flex-col gap-2">
      <p className="text-3xl font-semibold ">{header}</p>
      <div className="h-[3px] relative bg-white w-[120px] ">
        <div className="absolute top-0 left-0 h-[3px] w-1/3 bg-black "></div>
      </div>
    </div>
  );
}
