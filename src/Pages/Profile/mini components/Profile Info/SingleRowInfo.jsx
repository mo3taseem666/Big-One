import React from 'react';
import OnOff from '../../../../Golbal Components/OnOff';

export default function SingleRowInfo({
    label,
    key1,
    key2,
    key3,
    value1,
    value2,
    value3,
    border,
}) {
    return (
        <div
            className={`w-full pl-5 flex gap-1 flex-col ${border ? 'border-b pb-2 cus:pb-5' : ''}`}
        >
            <p className="text-[#888] font-medium name ">{label}</p>
            <div className="flex w-full gap-2 cus:flex-col cus:items-start items-center font-medium text-sm">
                <p className="w-1/3 cus:w-full">
                    <span className="text-[#888] ">{key1} : </span> {value1}
                </p>
                <p className="w-1/3 cus:w-full">
                    <span className="text-[#888] ">{key2} : </span> {value2}
                </p>
                <p className="w-1/3 cus:mb-5 cus:w-full">
                    <span className="text-[#888] ">{key3} : </span> {value3}
                </p>
                <OnOff />
            </div>
        </div>
    );
}
