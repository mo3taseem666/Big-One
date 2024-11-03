import React from 'react';

export default function DevicesSection() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-medium">Devices</p>
                <p className="text-[#888] text-sm">
                    Check The Login Devices List
                </p>
            </div>
            <button className="xs:text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 duration-200 rounded-lg font-medium">
                Devices
            </button>
        </div>
    );
}
