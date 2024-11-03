import React from 'react';

export default function PasswordSection() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-medium">Password</p>
                <p className="text-[#888] text-sm">Last Change On 25/10/2024</p>
            </div>
            <button className=" px-2 py-1 xs:text-xs bg-blue-500 hover:bg-blue-600 duration-200 rounded-lg text-white font-medium">
                Change
            </button>
        </div>
    );
}
