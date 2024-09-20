import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function PostFooter() {
    return (
        <div className="mt-5 flex justify-between items-center">
            <div className="flex items-center gap-1">
                <FavoriteIcon sx={{ color: 'red', fontSize: '22px' }} />
                <p className="text-[#888] font-medium">7.5K</p>
            </div>
            <div className="flex items-center gap-1">
                <QuestionAnswerIcon sx={{ color: '#2196f3', fontSize: '22px' }} />
                <p className="text-[#888] font-medium">924</p>
            </div>
        </div>
    );
}
