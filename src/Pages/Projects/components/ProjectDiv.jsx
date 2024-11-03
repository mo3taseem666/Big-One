import React from 'react';
import ProjectHeader from '../mini components/ProjectHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import PicturesPart from '../mini components/PicturesPart';
import GrayBtn from '../../../Golbal Components/GrayBtn';
import ProgressBar from '../mini components/ProgressBar';

export default function ProjectDiv({ el }) {
    const { mainDiv } = GlobalClasses();
    console.log(el.services);

    return (
        <div className={mainDiv}>
            <ProjectHeader
                name={el.name}
                date={el.data}
                details={el.description}
            />
            <PicturesPart el={el} />
            <div className="py-3 overflow-auto flex gap-1 flex-row-reverse border-y">
                {el.services.map((el, idx) => (
                    <GrayBtn key={idx} name={el} />
                ))}
            </div>
            <div className='flex items-center justify-between'>
                <ProgressBar percentage={el.level} />
                <p className='text-sm font-medium text-[#888] '>$ {el.cost}</p>
            </div>
        </div>
    );
}
