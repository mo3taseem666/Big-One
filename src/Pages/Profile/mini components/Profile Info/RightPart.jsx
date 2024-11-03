import React from 'react';
import SingleRowInfo from './SingleRowInfo';

export default function RightPart() {
    return (
        <div className="w-full flex items-center flex-col gap-5 ">
            <SingleRowInfo
                value1="Moataseem Shaaban"
                value2="Male"
                value3="Egypt"
                label="General Information"
                key1="Full Name"
                key2="Gender"
                key3="Country"
                border={true}
            />
            <SingleRowInfo
                value1="mo3data@gmail.com"
                value2="01150998560"
                value3="2002-04-29"
                label="Personal Information"
                key1="Email"
                key2="Phone"
                key3="Date Of Birth"
                border={true}
            />
            <SingleRowInfo
                value1="Frontend Developer"
                value2="Javascript"
                value3="99"
                label="Job Information"
                key1="Title"
                key2="Programming Language"
                key3="Years Of Experience"
                border={true}
            />
            <SingleRowInfo
                value1="Paypal"
                value2="mo3data@gmail.com"
                value3="Monthly"
                label="Billing Information"
                key1="Payment Method"
                key2="Email"
                key3="Subscription"
                border={false}
            />
        </div>
    );
}
