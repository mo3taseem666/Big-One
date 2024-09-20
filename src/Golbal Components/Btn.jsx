import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Btn({ icon, title, id, selected, setSelected }) {
    return (
        <Link
            to={title === 'Dashboard' ? '/' : title}
            onClick={() => setSelected(id)}
            className={`flex cursor-pointer gap-2 rounded-md p-[10px] xs:p-2 items-center
               ${selected === id ? 'bg-gray-200' : ''}
               ${selected !== id ? 'hover:bg-gray-100' : ''}  
      `}
        >
            {icon}
            <p className="font-medium xs:hidden text-sm">{title}</p>
        </Link>
    );
}
