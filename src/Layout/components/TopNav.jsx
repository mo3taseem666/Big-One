import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import avatar from '../../assets/imgs/avatar.png';

export default function TopNav() {
  return (
    <div className="w-full px-6 py-3 flex justify-between items-center bg-white">
      <div className="border border-gray-300 flex gap-2 items-center rounded-lg p-2">
        <SearchIcon className='text-purple-700' />
        <input
          placeholder="type something ..."
          className="focus:outline-none focus:placeholder:text-transparent focus:border-none outline-none w-48 focus:w-72 ease-in-out duration-300 "
          type="text"
        />
      </div>
      <div className="flex gap-3 items-center">
        <NotificationsIcon className="cursor-pointer" />
        <img className="size-8 cursor-pointer" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
