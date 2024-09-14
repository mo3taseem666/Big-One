import React, { useState } from 'react';

export default function Btn({ icon, title, id, selected, setSelected }) {
  console.log(id);
  return (
    <div
      onClick={() => setSelected(id)}
      className={`flex cursor-pointer gap-2 rounded-md p-[10px] items-center ${
        selected === id ? 'bg-gray-200' : ''
      }
      ${selected !== id ? 'hover:bg-gray-100' : ''}  
      `}
    >
      {icon}
      <p className="font-medium text-sm">{title}</p>
    </div>
  );
}
