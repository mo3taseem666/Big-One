import React from 'react';

export default function Email() {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[#888] font-medium" htmlFor="FName">
                Email
            </label>
            <div className="flex gap-4 items-center">
                <input
                    disabled
                    className=" text-sm p-2  w-full rounded-md font-medium focus:outline-none border"
                    placeholder="Email"
                    type="text"
                />
                <button className="shrink-0 text-blue-500 font-semibold">
                    Change
                </button>
            </div>
        </div>
    );
}
