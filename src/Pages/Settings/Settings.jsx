import React from 'react';
import Header from '../../Golbal Components/Header';
import SiteControl from './Components/SiteControl';
import GeneralInfo from './Components/GeneralInfo';
import SecurityInfo from './Components/SecurityInfo';
import SocialInfo from './Components/SocialInfo';

export default function Settings() {
    return (
        <>
            <Header header="Settings" />
            <div className="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 grid-cols-3 ">
                <SiteControl />
                <GeneralInfo />
                <SecurityInfo />
                <SocialInfo />
            </div>
        </>
    );
}
