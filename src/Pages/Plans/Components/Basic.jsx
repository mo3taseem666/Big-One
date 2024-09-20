import React from 'react';
import PlanDiv from './PlanDiv';
import { BasicArr } from '../../../Files/Features';

export default function Basic() {
   return (
      <PlanDiv
         type={'Basic'}
         price={'7.99'}
         bgColor={'bg-[#0075ff]'}
         outlineColor={'outline-[#0075ff]'}
         features={BasicArr}
      />
   );
}
