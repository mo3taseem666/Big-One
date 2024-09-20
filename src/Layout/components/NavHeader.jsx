import React, { useEffect, useState } from 'react';

export default function NavHeader() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className="flex-col flex items-center gap-3">
         <p className="font-bold xs:text-[15px] text-xl">
            {windowWidth <= '1000' ? 'Mo3' : 'Moataseem'}
         </p>
         <div className="flex xs:hidden items-center gap-1">
            <div className="bg-black h-[2px] w-8"></div>
            <div className="rounded-full size-3 bg-black"></div>
            <div className="bg-black h-[2px] w-8"></div>
         </div>
      </div>
   );
}
