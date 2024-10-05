import React from 'react';
import Header from '../../Golbal Components/Header';
import SiteControl from './Components/SiteControl';

export default function Settings() {
    return (
        <>
            <Header header="Settings" />
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 grid-cols-3 ">
              <SiteControl />
            </div>
        </>
    );
}
