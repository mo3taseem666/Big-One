import React from 'react';
import DivHeader from '../../../Golbal Components/DivHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';

export default function MySkills() {
    const { mainDiv } = GlobalClasses();
    return (
        <div className={`${mainDiv} w-1/3 cus:w-full shrink-0 `}>
            <DivHeader title="My Skills" details="Complete Skills List" />
            <div className="flex flex-col ">
                <div className="flex gap-1 border-b py-3">
                    <Skill name="HTML" />
                    <Skill name="HAML" />
                    <Skill name="PUGJS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <Skill name="CSS" />
                    <Skill name="MUI" />
                    <Skill name="TAILWIND CSS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <Skill name="JAVASCRIPT" />
                    <Skill name="TYPESCRIPT" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <Skill name="VUE JS" />
                    <Skill name="REACT JS" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <Skill name="JEST" />
                    <Skill name="JASMINE" />
                </div>
                <div className="flex gap-1 border-b py-3">
                    <Skill name="FIREBASE" />
                    <Skill name="SUPABASE" />
                </div>
                <div className="flex gap-1 pt-3">
                    <Skill name="JAVA" />
                    <Skill name="PYTHON" />
                </div>
            </div>
        </div>
    );
}

function Skill({ name }) {
    return (
        <p className="px-2 cursor-default font-medium hover:bg-gray-300 duration-200 text-sm py-1 rounded-md bg-gray-200">
            {name}
        </p>
    );
}
