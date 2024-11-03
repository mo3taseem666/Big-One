import LeftPart from '../mini components/Profile Info/LeftPart';
import RightPart from '../mini components/Profile Info/RightPart';

export default function ProfileInfo() {
    return (
        <div className="w-full bg-white cus:flex-col p-6 rounded-lg flex">
            <LeftPart />
            <RightPart />
        </div>
    );
}
