import React from 'react';
import { lastProjectProgressSteps } from '../../../Files/LastProject';
import LastProjectDiv from '../mini components/Last Project Progress/LastProjectDiv';
import rocket from '../../../assets/imgs/project.png'

export default function LastProjectProgress() {
  return (
    <div className="bg-white relative p-5 rounded-[10px] ">
      <p className="text-2xl font-semibold mb-5">Last Project Progress</p>
      <div className="flex flex-col gap-5">
        {lastProjectProgressSteps.map((el, idx) => (
          <LastProjectDiv
            key={idx}
            text={el}
            isLast={idx === lastProjectProgressSteps.length - 1}
            pulse={idx === lastProjectProgressSteps.length - 2}
          />
        ))}
      </div>
      <img className='absolute xs:hidden bottom-0 w-[160px] right-0 opacity-10 ' src={rocket} alt="rocket" />
    </div>
  );
}
