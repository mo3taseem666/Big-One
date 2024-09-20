import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskDiv({ title, details, deleted, notLast }) {
  const taskClasses = `${deleted ? 'opacity-30 line-through' : ''}`;
  const borderClasses = `${notLast ? 'border-b py-3' : ''}`;

  return (
    <div
      className={`flex justify-between items-center ${taskClasses} ${borderClasses}`}
    >
      <div>
        <p className={`font-semibold ${deleted ? 'line-through' : ''}`}>
          {title}
        </p>
        <p
          className={`text-gray-500 xs:text-sm font-medium ${
            deleted ? 'line-through' : ''
          }`}
        >
          {details}
        </p>
      </div>
      <DeleteIcon
        className={`cursor-pointer ${deleted ? '' : 'hover:text-red-500'}`}
        style={{ transition: 'color 0.2s ease' }}
      />
    </div>
  );
}
