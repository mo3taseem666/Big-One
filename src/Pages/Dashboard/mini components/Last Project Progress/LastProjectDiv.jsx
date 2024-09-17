import React from 'react';

export default function LastProjectDiv({ text, isLast, pulse }) {
  const classes =
    'before:absolute before:w-[2px] before:h-6 before:bg-[#0075ff] before:-bottom-6';

  return (
    <div className={`flex gap-3 relative items-center `}>
      <div
        className={`size-7 relative ${
          isLast ? '' : classes
        } flex items-center justify-center rounded-full  border-2 border-[#0075ff] `}
      >
        <div
          className={`size-5 rounded-full ${isLast ? '' : 'bg-[#0075ff]'} ${
            pulse ? 'animate-pulse' : ''
          } `}
        ></div>
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
}
