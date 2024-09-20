import React from 'react'
import SocialMediaDiv from '../mini components/Social Media Stats/SocialMediaDiv'
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FaceBookLogo from '../../../Files/FaceBookLogo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialMediaStats() {
    
  return (
    <div className='p-5 rounded-[10px] bg-white '>
        <p className='text-2xl mb-5 font-semibold'>Social Media Stats</p>
        <div className='flex flex-col gap-3'>
            <SocialMediaDiv icon={<XIcon sx={{color:'white'}} />} bgColor={'bg-slate-700'} lightColor={'bg-slate-300'} number={'90K Followers'} btnText={'Follow'} textColor={'text-slate-600'} />
            <SocialMediaDiv icon={<FaceBookLogo />} bgColor={'bg-[#1877f2]'} lightColor={'bg-[#1da1f233]'} number={'2M Like'} btnText={'Like'} textColor={'text-[#1da1f2]'} />
            <SocialMediaDiv icon={<YouTubeIcon sx={{color:'white',fontSize:'35px'}} />} bgColor={'bg-[#ff0000]'} lightColor={'bg-[#f003]'} number={'1M Subs'} btnText={'Subscribe'} textColor={'text-[#ff0000]'} />
            <SocialMediaDiv icon={<LinkedInIcon sx={{color:'white',fontSize:'35px'}} />} bgColor={'bg-[#0077b5]'} lightColor={'bg-[#0077b533]'} number={'70K Followers'} btnText={'Follow'} textColor={'text-[#0077b5]'} />
        </div>
    </div>
  )
}
