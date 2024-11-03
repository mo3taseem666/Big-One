import React from 'react';
import Header from '../../Golbal Components/Header';
import ProfileInfo from './components/ProfileInfo';
import MySkills from './components/MySkills';
import LatestActivities from './components/LatestActivities';


export default function Profile() {
    return (
        <>
            <Header header="Profile" />
            <ProfileInfo />
            <div className="flex cus:flex-col mt-5 gap-5">
                <MySkills />
                <LatestActivities />
            </div>
        </>
    );
}
