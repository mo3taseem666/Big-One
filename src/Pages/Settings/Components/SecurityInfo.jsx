import React from 'react';
import DivHeader from '../../../Golbal Components/DivHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import PasswordSection from '../Mini Components/Security info/PasswordSection';
import AuthSection from '../Mini Components/Security info/AuthSection';
import DevicesSection from '../Mini Components/Security info/DevicesSection';

export default function SecurityInfo() {
    const { mainDiv } = GlobalClasses();

    return (
        <div className={`${mainDiv}`}>
            <DivHeader
                title="Security Info"
                details="Security Information About Your Account"
            />
            <PasswordSection />
            <AuthSection />
            <DevicesSection />

        </div>
    );
}
