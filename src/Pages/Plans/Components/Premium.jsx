import React from 'react';
import PlanDiv from './PlanDiv';
import { PremiumArr } from '../../../Files/Features';

export default function Premium() {
   return (
      <PlanDiv
         type={'Premium'}
         price={'19.99'}
         bgColor={'bg-[#f59e0b]'}
         outlineColor={'outline-[#f59e0b]'}
         features={PremiumArr}
         current={true}
      />
   );
}
