import React from 'react';
import PlanDiv from './PlanDiv';
import { FreeArr } from '../../../Files/Features';

export default function Free() {
   return (
      <PlanDiv
         type={'Free'}
         price={'0.00'}
         bgColor={'bg-[#22c55e]'}
         outlineColor={'outline-[#22c55e]'}
         features={FreeArr}
      />
   );
}
