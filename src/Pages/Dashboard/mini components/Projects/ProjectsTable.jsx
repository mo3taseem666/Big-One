import React from 'react';
import { tableData } from '../../../../Files/TableData';

export default function ProjectsTable() {
   function color(Status) {
      return Status === 'Pending'
         ? 'bg-[#f59e0b]'
         : Status === 'In Progress'
           ? 'bg-[#0075ff]'
           : Status === 'Completed'
             ? 'bg-[#22c55e]'
             : 'bg-[#f44336]';
   }
   return (
      <table className="w-full mb-2 cusT:w-[1000px] text-left">
         <thead>
            <tr className="border bg-gray-200">
               <th className="p-4">Name</th>
               <th className="p-4">Finish Date</th>
               <th className="p-4">Client</th>
               <th className="p-4">Price</th>
               <th className="p-4">Team</th>
               <th className="p-4">Status</th>
            </tr>
         </thead>
         <tbody>
            {tableData.map((el) => (
               <tr
                  className="font-medium hover:bg-gray-100 duration-200"
                  key={el.Name}>
                  <td className="border px-4 py-4 border-gray-200">
                     {el.Name}
                  </td>
                  <td className="border px-4 py-4 border-gray-200">
                     {el.FinishDate}
                  </td>
                  <td className="border px-4 py-4 border-gray-200">
                     {el.Client}
                  </td>
                  <td className="border px-4 py-4 border-gray-200">
                     {el.Price}
                  </td>
                  <td className="border px-4 py-4 border-gray-200">
                     <div className="flex relative min-w-[128px]">
                        {el.Team.map((el, idx) => (
                           <img
                              key={idx}
                              src={el}
                              alt="team"
                              className={`w-9 h-9 hover:z-[99] cursor-pointer rounded-full border-2 border-white`}
                              style={{
                                 position: !idx ? 'static' : 'absolute',
                                 left: `${idx * 20}px`,
                              }}
                           />
                        ))}
                     </div>
                  </td>
                  <td className="border px-4 py-4 border-gray-200 text-center">
                     <button
                        className={`${color(el.Status)} text-sm px-2 min-w-[100px] py-1 rounded-md text-white`}>
                        {el.Status}
                     </button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}
