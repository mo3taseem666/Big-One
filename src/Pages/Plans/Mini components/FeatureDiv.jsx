import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function FeatureDiv({ feature, availability }) {
   return (
      <div className="justify-between items-center py-3 flex border-b">
         <div className="flex items-center gap-2">
            {availability ? (
               <CheckIcon sx={{ color: '#22c55e' }} />
            ) : (
               <CloseIcon sx={{ color: '#f44336' }} />
            )}
            <p className="font-medium cusT:text-sm">{feature}</p>
         </div>
         <InfoIcon sx={{ fontSize: '18px', color: '#888' }} />
      </div>
   );
}
