import React from 'react';

export default function SingleActivity({img,Label,details,border}) {
    return (
        <div className={`flex items-center font-medium justify-between ${border ? 'border-b pb-4' : ''} `}>
            <div className="flex items-center gap-3">
                <img className='w-16 xs:w-12' src={img} alt="Activity" />
                <div> 
                    <p>{Label}</p>
                    <p className="text-[#888] xs:text-xs">{details}</p>
                </div>
            </div>
            <div className="flex xs:text-xs flex-col items-end justify-between">
                <p>05:07</p>
                <p className="text-[#888] ">Yesterday</p>
            </div>
        </div>
    );
}
