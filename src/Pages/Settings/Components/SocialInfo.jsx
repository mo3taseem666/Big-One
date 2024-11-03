import DivHeader from '../../../Golbal Components/DivHeader';
import SocialDiv from '../Mini Components/Social Info/SocialDiv';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SocialInfo() {
    const { mainDiv } = GlobalClasses();
    return (
        <div className={mainDiv}>
            <DivHeader title="Social Info" details="Social Media Information" />
            <div className="flex flex-col pb-5 gap-4">
                <SocialDiv name="Twitter" icon={<XIcon fontSize="small" />} />
                <SocialDiv
                    name="Facebook"
                    icon={<FacebookIcon fontSize="medium" />}
                />
                <SocialDiv
                    name="LinkedIn"
                    icon={<LinkedInIcon fontSize="medium" />}
                />
                <SocialDiv
                    name="Youtube"
                    icon={<YouTubeIcon fontSize="medium" />}
                />
            </div>
        </div>
    );
}
