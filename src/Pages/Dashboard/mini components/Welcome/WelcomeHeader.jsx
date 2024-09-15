import React from 'react';
import welcome from '../../../../assets/imgs/welcome.png';
import avatar from '../../../../assets/imgs/avatar.png';

export default function WelcomeHeader() {
  return (
    <div className="flex relative rounded-t-[10px] bg-[#eee] p-5 justify-between">

      <div>
        <p className="text-2xl font-semibold">Welcome</p>
        <p className="font-medium text-[#888]">Moataseem</p>
      </div>

      <img className="w-[200px] " src={welcome} alt="welcome" />

      <img
        className="size-16 shadow-lg absolute -bottom-7 border-4 rounded-full border-white "
        src={avatar}
        alt="avatar"
      />
      
    </div>
  );
}
