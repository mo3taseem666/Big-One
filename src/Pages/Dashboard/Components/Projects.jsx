import React from 'react';
import ProjectsTable from '../mini components/Projects/ProjectsTable';

export default function Projects() {
   return (
      <div className="bg-white col-span-full p-5 rounded-[10px]">
         <p className="mb-5 text-2xl font-semibold ">Projects</p>
         <div className="cusT:overflow-x-scroll">
            <ProjectsTable />
         </div>
      </div>
   );
}
