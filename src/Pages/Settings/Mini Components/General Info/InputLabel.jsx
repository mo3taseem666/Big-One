import React from 'react';

export default function InputLabel({ label }) {
    return (
        <div className="flex flex-col gap-1">
            <label className='text-[#888] font-medium' htmlFor="FName">{label}</label>
            <input
                className=" text-sm p-2 rounded-md font-medium focus:outline-none border"
                placeholder={label}
                type="text"
            />
        </div>
    );
}
