import React from 'react';

export default function Header({ type, price, bgColor, outlineColor }) {
   return (
      <div
         className={`w-full py-5 gap-3 text-white flex flex-col justify-center items-center outline-[3px] outline ${outlineColor} border-white border-[3px] ${bgColor}`}>
         <p className="font-semibold text-2xl">{type}</p>
         <p className="font-sans relative before:content-['$'] font-medium before:absolute before:text-2xl before:-top-3 before:font-medium before:-left-5 text-5xl">{price}</p>
      </div>
   );
}
