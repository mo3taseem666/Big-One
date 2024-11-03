import React from 'react';

export default function CustomRadio({ selected, id, label, setSelected }) {
    return (
        <div
            className="flex w-fit cursor-pointer items-center gap-3"
            onClick={() => setSelected(id)}
        >
            <div
                className={`size-[20px] ${selected !== id ? 'border-gray-500' : 'border-blue-600'} flex justify-center items-center rounded-full border-2`}
            >
                <div
                    className={`${selected !== id ? 'scale-0' : 'bg-blue-600'} rounded-full rotate-0 duration-200 scale-1 size-3 `}
                ></div>
            </div>
            <p className="font-medium">{label}</p>
        </div>
    );
}
