import React from 'react';

export default function FileStatsDiv({ icon, type, number, fileSize }) {
    return (
        <div className="p-3 text-sm flex border rounded-md items-center justify-between">
            <div className="flex gap-3 items-center">
                <img className="w-6" src={icon} alt="icon" />
                <div className="flex flex-col gap-0">
                    <p className="font-medium text-sx">{type}</p>
                    <p className="text-[#888] font-semibold text-xs">
                        {number} Files
                    </p>
                </div>
            </div>
            <p className="text-xs font-medium text-[#888] ">{fileSize}</p>
        </div>
    );
}
