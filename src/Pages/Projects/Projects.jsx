import React from 'react';
import Header from '../../Golbal Components/Header';
import ProjectDiv from './components/ProjectDiv';
import { projects } from '../../Files/TableData';

export default function Projects() {
    return (
        <div>
            <Header header="Projects" />
            <div className="mt-10 grid grid-cols-3  gap-5 cus:grid-cols-1 cus2:grid-cols-2 ">
                {projects.map((el, idx) => (
                    <ProjectDiv key={idx} el={el} />
                ))}
            </div>
        </div>
    );
}
