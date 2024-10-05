import React from 'react';
import DivHeader from '../../../Golbal Components/DivHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import WebsiteControl from '../Mini Components/WebsiteControl';

export default function SiteControl() {
    const { mainDiv } = GlobalClasses();
    return (
        <div className={`${mainDiv}`}>
            <DivHeader
                title="Site Control"
                details="Control The Website If There Is Maintenance"
            />
            <WebsiteControl />
            <textarea
                placeholder="Close Message Content"
                className="resize-none p-2 text-xs font-medium h-40 focus:outline-none border rounded-md"
                name="wc"
                id="wc"
            />
        </div>
    );
}
