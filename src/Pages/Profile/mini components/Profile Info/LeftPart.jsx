import avatar from '../../../../assets/imgs/avatar.png';
import StarIcon from '@mui/icons-material/Star';

export default function LeftPart() {
    return (
        <div className="flex shrink-0 items-center cus:pl-0 cus:border-r-0 cus:pb-10 border-r pl-5 pr-10 cus:pr-0 gap-3 flex-col">
            <img className="size-28 cursor-pointer" src={avatar} alt="avatar" />
            <p className="font-semibold text-lg">Moataseem Shaaban</p>
            <p className="font-medium text-[#888]">Level 99</p>
            <div className="h-2 p-[2px] bg-slate-200 w-40 rounded-full ">
                <div className="bg-blue-600 w-[80%] rounded-full h-full"></div>
            </div>
            <div className="flex text-orange-400">
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
            </div>
            <p className="text-xs text-[#888] font-medium ">999 Rating</p>
        </div>
    );
}
