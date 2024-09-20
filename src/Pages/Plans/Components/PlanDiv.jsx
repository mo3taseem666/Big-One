import React from 'react';
import Header from '../Mini components/Header';
import FeatureDiv from '../Mini components/FeatureDiv';

export default function PlanDiv({
   type,
   price,
   bgColor,
   outlineColor,
   features,
   current,
}) {
   return (
      <div className="w-full p-5 bg-white">
         <Header
            type={type}
            price={price}
            bgColor={bgColor}
            outlineColor={outlineColor}
         />
         {features.map((el, idx) => (
            <FeatureDiv
               key={idx}
               feature={el.feature}
               availability={el.availability}
            />
         ))}
         <div className="mt-5">
            {current ? (
               <p className="text-center text-[#888]">
                  This Is Your Current Plan
               </p>
            ) : (
               <button
                  className={`${bgColor} text-white py-2 px-5 font-medium`}>
                  join
               </button>
            )}
         </div>
      </div>
   );
}
