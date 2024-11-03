import React from 'react';
import OnOff from '../../../../Golbal Components/OnOff';

export default function AuthSection() {
    return (
        <div className="flex items-center py-5 border-y justify-between">
            <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-[#888] text-sm">
                    Enable/Disable The Feature
                </p>
            </div>
            <OnOff enabled={true} />
        </div>
    );
}
