import React, { useState } from 'react';

export default function SocialDiv({ icon, name }) {
    const [focused, setFocused] = useState(false);
    return (
        <div
            className={`flex ${focused ? 'text-black' : 'text-[#888]'} rounded-md bg-gray-200 duration-200 text-sm border`}
        >
            <div className="size-10  shrink-0 flex items-center justify-center rounded-l-md">
                {icon}
            </div>
            <input
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className=" border-l rounded-md rounded-l-none duration-200 px-2 w-full focus:outline-none"
                placeholder={`${name} Username`}
                type="text"
            />
        </div>
    );
}
