import React from 'react';
import avatar from '../../../../assets/imgs/avatar.png';

export default function UserInfo() {
    return (
        <div className="flex gap-4 items-center">
            <img className="w-12 rounded-full" src={avatar} alt="avatar" />
            <div className="flex flex-col gap-1 ">
                <p className="font-semibold">Moataseem Shaaban</p>
                <p className="text-[#888] font-medium text-sm">About 3 Hours Ago</p>
            </div>
        </div>
    );
}
