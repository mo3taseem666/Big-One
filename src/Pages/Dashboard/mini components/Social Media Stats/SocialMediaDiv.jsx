import React, { useState } from 'react';

export default function SocialMediaDiv({ icon, bgColor, lightColor, number, btnText, textColor }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div className={`flex justify-between ${lightColor} `}>
            <div className="flex items-center gap-4">
                <div className={`size-14 shrink-0 flex items-center justify-center ${bgColor} `}>
                    {icon}
                </div>
                <p className={`${textColor} ${hovered ? 'hidden' : ''} font-semibold xs:text-sm shrink-0 `}>
                    {number}
                </p>
            </div>
            <button
                onMouseLeave={() => setHovered(false)}
                onMouseEnter={() => setHovered(true)}
                className={`${bgColor}  ${hovered ? 'w-[87%] text-xl tracking-wider' : 'w-[85px] leading-7 text-xs tracking-wide'} duration-300  font-medium text-center text-white`}>
                {btnText}
            </button>
        </div>
    );
}
