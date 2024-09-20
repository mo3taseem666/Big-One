import React from 'react';
import WelcomeHeader from '../mini components/Welcome/WelcomeHeader';
import WelcomeDetails from '../mini components/Welcome/WelcomeDetails';

export default function Welcome() {
  return (
    <div className=" w-full bg-white grow rounded-[10px] ">
      <WelcomeHeader />
      <WelcomeDetails />
      <div className="flex flex-row-reverse xs:py-5 py-10 pr-5">
        <button className="px-5 py-2 text-white bg-sky-500 hover:bg-sky-600 duration-200 ">
          Profile
        </button>
      </div>
    </div>
  );
}
