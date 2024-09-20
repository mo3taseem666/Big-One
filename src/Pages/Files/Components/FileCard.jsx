import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

export default function FileCard({ icon, fileName, userName, date, fileSize }) {
    return (
        <div className="bg-white p-3 rounded-lg">
            <DownloadIcon className="cursor-pointer" sx={{ color: '#888' }} />
            <div className="pb-3 flex gap-3 flex-col border-b">
                <img src={icon} className="w-16 self-center" />
                <p className="self-center text-sm font-medium">{fileName}</p>
                <p className="font-medium text-[#888] text-sm ">{userName}</p>
            </div>
            <div className="flex pt-3 text-[#888] text-sm font-medium justify-between items-center">
                <p>{date}</p>
                <p>{fileSize}</p>
            </div>
        </div>
    );
}
