import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function FileStatsBtn() {
    return <button className='flex text-white bg-sky-500 px-5 py-2 rounded-md self-center mt-5 items-center'>
        <DoubleArrowIcon className='-rotate-90' sx={{color:'white'}} />
        <span className='font-semibold'>Upload</span>
    </button>;

}
