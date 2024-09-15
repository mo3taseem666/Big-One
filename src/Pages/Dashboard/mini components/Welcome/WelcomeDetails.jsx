import React from 'react';

export default function WelcomeDetails() {
  return (
    <div className="pt-14 ">
      <div className="flex border-y py-5">
        <div className="flex w-1/3 flex-col items-center gap-2">
          <p className="font-semibold">Moataseem</p>
          <p className="text-xs font-medium">Developer</p>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-2">
          <p className="font-semibold">80</p>
          <p className="text-xs font-medium">Projects</p>
        </div>
        <div className="flex w-1/3 flex-col items-center gap-2">
          <p className="font-semibold">$8500</p>
          <p className="text-xs font-medium">Earned</p>
        </div>
      </div>
    </div>
  );
}
