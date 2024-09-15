import React from 'react';
import Header from '../mini components/Tickets Statistics/Header';
import OneDiv from '../mini components/Tickets Statistics/OneDiv';
import AppsIcon from '@mui/icons-material/Apps';
import PauseIcon from '@mui/icons-material/Pause';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function TicketsStatistics() {
  return (
    <div className="p-5 pb-10 bg-white rounded-[10px]">
      <Header />
      <div className="flex gap-5 mt-5 flex-col">
        <div className="flex gap-5">
          <OneDiv
            icon={<AppsIcon sx={{ fontSize: '35px', color: 'orange' }} />}
            number={2500}
            text={'Total'}
          />
          <OneDiv
            icon={<PauseIcon sx={{ fontSize: '35px', color: 'blue' }} />}
            number={500}
            text={'Pending'}
          />
        </div>
        <div className="flex gap-5">
          <OneDiv
            icon={<DoneAllIcon sx={{ fontSize: '35px', color: 'green' }} />}
            number={1900}
            text={'Colsed'}
          />
          <OneDiv
            icon={
              <DisabledByDefaultIcon sx={{ fontSize: '35px', color: 'red' }} />
            }
            number={100}
            text={'Deleted'}
          />
        </div>
      </div>
    </div>
  );
}
