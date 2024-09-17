import React from 'react';
import Header from '../mini components/Top Search Items/Header';
import TopSearcDiv from '../mini components/Top Search Items/TopSearcDiv';

export default function TopSearchItems() {
  return (
    <div className="p-5 rounded-[10px] bg-white ">
      <Header />
      <div className='flex flex-col gap-8 mt-6'>
        <TopSearcDiv text={'Programming'} number={220} />
        <TopSearcDiv text={'JavaScript'} number={180} />
        <TopSearcDiv text={'PHP'} number={160} />
        <TopSearcDiv text={'Code'} number={145} />
        <TopSearcDiv text={'Design'} number={110} />
        <TopSearcDiv text={'Logic'} number={95} />
      </div>
    </div>
  );
}
