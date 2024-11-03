import React from 'react';
import DivHeader from '../../../Golbal Components/DivHeader';
import SingleActivity from '../mini components/Latest Activities/SingleActivity';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import activity1 from '../../../assets/imgs/activity-01.png';
import activity2 from '../../../assets/imgs/activity-02.png';
import activity3 from '../../../assets/imgs/activity-03.png';

export default function LatestActivities() {
    const { mainDiv } = GlobalClasses();

    return (
        <div className={`${mainDiv} w-full`}>
            <DivHeader
                title="Latest Activities"
                details="Latest Activities Done By The User"
            />
            <div className='flex flex-col gap-4'>
                <SingleActivity
                    Label="Store"
                    details="Bought The Mastering Python Course"
                    img={activity1}
                    border={true}
                />
                <SingleActivity
                    Label="Store"
                    details="Bought The Mastering Python Course"
                    img={activity2}
                    border={true}
                />
                <SingleActivity
                    Label="Store"
                    details="Bought The Mastering Python Course"
                    img={activity3}
                    border={true}
                />
                <SingleActivity
                    Label="Store"
                    details="Bought The Mastering Python Course"
                    img={activity1}
                    border={false}
                />
            </div>
        </div>
    );
}
