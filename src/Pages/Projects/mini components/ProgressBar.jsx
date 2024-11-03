import React from 'react';

export default function ProgressBar({ percentage }) {
    return (
        <div title='Progress' className="h-2 w-[50%] rounded-full bg-gray-300">
            <div
                style={{ width: `${percentage}%` }}
                className={`${percentage > 50 ? (percentage > 75 ? 'bg-blue-500' : 'bg-green-500') : 'bg-red-500'} h-full rounded-full `}
            ></div>
        </div>
    );
}
