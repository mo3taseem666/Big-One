import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CustomCheckbox({ isChecked, label }) {
    const [checked, setChecked] = useState(isChecked && true);
    return (
        <div
            className="flex w-fit cursor-pointer items-center gap-3"
            onClick={() => setChecked(!checked)}
        >
            <div
                className={`size-[20px] ${!checked ? 'border-gray-500' : 'border-blue-600'} rounded-sm border-2`}
            >
                <div
                    className={`${!checked ? 'scale-0 rotate-180' : ''} rotate-0 duration-200 scale-1 size-full bg-blue-600 flex justify-center items-center`}
                >
                    <CheckIcon className="text-white" fontSize="5px" />
                </div>
            </div>
            <p className="font-medium">{label}</p>
        </div>
    );
}
