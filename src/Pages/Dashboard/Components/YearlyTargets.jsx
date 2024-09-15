import React from 'react';
import Header from '../mini components/Yearly Targets/Header';
import DivWithIcon from '../mini components/Yearly Targets/DivWithIcon';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';

export default function YearlyTargets() {
  return (
    <div className="p-5 bg-white rounded-[10px] ">
      <Header />
      <div className="flex flex-col mt-2 gap-5">
        <DivWithIcon
          icon={<AttachMoneyIcon className="text-blue-600" />}
          text={'Money'}
          value={'$20.000'}
          percentage={80}
          color={'bg-blue-200'}
          colorDark={'bg-blue-600'}
        />
        <DivWithIcon
          icon={<CodeIcon className="text-orange-400" />}
          text={'Projects'}
          value={24}
          percentage={55}
          color={'bg-orange-100'}
          colorDark={'bg-orange-400'}
        />
        <DivWithIcon
          icon={<PersonIcon className="text-green-500" />}
          text={'Team'}
          value={12}
          percentage={75}
          color={'bg-green-100'}
          colorDark={'bg-green-500'}
        />
      </div>
    </div>
  );
}
