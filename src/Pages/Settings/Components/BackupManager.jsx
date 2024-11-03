import React, { useState } from 'react';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import DivHeader from '../../../Golbal Components/DivHeader';
import CustomRadio from '../Mini Components/Backup Manager/CustomRadio';
import StorageDiv from '../Mini Components/Backup Manager/StorageDiv';

export default function BackupManager() {
    const { mainDiv } = GlobalClasses();
    const [selected, setSelected] = useState('1');
    const [selected2, setSelected2] = useState('2');

    console.log(selected);

    return (
        <div className={mainDiv}>
            <DivHeader
                title="Backup Manager"
                details="Control Backup Time And Location"
            />
            <div className="flex flex-col pb-5 border-b gap-4">
                <CustomRadio
                    selected={selected}
                    setSelected={setSelected}
                    id="1"
                    label="Daily"
                />
                <CustomRadio
                    selected={selected}
                    setSelected={setSelected}
                    id="2"
                    label="Weekly"
                />
                <CustomRadio
                    selected={selected}
                    setSelected={setSelected}
                    id="3"
                    label="Monthly"
                />
            </div>
            <div className="flex items-center justify-between gap-3">
                <StorageDiv
                    selected2={selected2}
                    setSelected2={setSelected2}
                    id="1"
                    name="Storage 1"
                />
                <StorageDiv
                    selected2={selected2}
                    setSelected2={setSelected2}
                    id="2"
                    name="Storage 2"
                />
                <StorageDiv
                    selected2={selected2}
                    setSelected2={setSelected2}
                    id="3"
                    name="Storage 3"
                />
            </div>
        </div>
    );
}
