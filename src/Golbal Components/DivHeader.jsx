import React from 'react';

export default function DivHeader({title,details}) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-[#888] font-medium">{details}</p>
        </div>
    );
}
