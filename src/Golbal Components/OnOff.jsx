import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function OnOff({ enabled }) {
    const [on, setOn] = useState(enabled || false);
    return (
        <div
            onClick={() => setOn(!on)}
            className={`${on ? 'bg-[#0075ff]' : 'bg-[#ccc]'} rounded-full shrink-0 cursor-pointer relative p-1 h-8 duration-200 w-[65px]`}
        >
            <div
                style={{ left: on ? `${4}px` : `${37}px` }}
                className={`size-6 bg-white rounded-full absolute transition-all flex items-center justify-center `}
            >
                {on ? <CheckIcon /> : <CloseIcon />}
            </div>
        </div>
    );
}
