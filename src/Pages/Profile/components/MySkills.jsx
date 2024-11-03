import React from 'react';
import DivHeader from '../../../Golbal Components/DivHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import GrayBtn from '../../../Golbal Components/GrayBtn';

export default function MySkills() {
    const { mainDiv } = GlobalClasses();
    return (
        <div className={`${mainDiv} w-1/3 cus:w-full shrink-0 `}>
            <DivHeader title="My Skills" details="Complete Skills List" />
            <div className="flex flex-col ">
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="HTML" />
                    <GrayBtn name="HAML" />
                    <GrayBtn name="PUGJS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="CSS" />
                    <GrayBtn name="MUI" />
                    <GrayBtn name="TAILWIND CSS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="JAVASCRIPT" />
                    <GrayBtn name="TYPESCRIPT" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="VUE JS" />
                    <GrayBtn name="REACT JS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="JEST" />
                    <GrayBtn name="JASMINE" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <GrayBtn name="FIREBASE" />
                    <GrayBtn name="SUPABASE" />
                </div>
                <div className="flex gap-1 pt-3">
                    <GrayBtn name="JAVA" />
                    <GrayBtn name="PYTHON" />
                </div>
            </div>
        </div>
    );
}


