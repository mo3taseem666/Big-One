import React from 'react';
import StorageIcon from '@mui/icons-material/Storage';

export default function StorageDiv({ name, id, selected2, setSelected2 }) {
    return (
        <div
            onClick={() => setSelected2(id)}
            className={`border-2 ${selected2 === id ? 'border-blue-600' : ''} rounded-lg w-full py-4`}
        >
            <div
                className={`flex flex-col ${selected2 === id ? 'text-blue-600' : ''} font-medium gap-1 items-center`}
            >
                <StorageIcon />
                <p className='xs:text-xs'>{name}</p>
            </div>
        </div>
    );
}
