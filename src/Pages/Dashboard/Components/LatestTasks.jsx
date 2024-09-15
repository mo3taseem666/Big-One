import React from 'react';
import TaskDiv from '../mini components/Latest Tasks/TaskDiv';
import { Tasks } from '../../../Files/Tasks';

export default function LatestTasks() {
  return (
    <div className="p-5 bg-white rounded-[10px] ">
      <p className="text-2xl mb-5 font-semibold">Latest Tasks</p>
      <div className="flex flex-col">
        {Tasks.map((el, idx) => (
          <TaskDiv
            key={idx}
            title={el.title}
            details={el.details}
            deleted={el.deleted}
            notLast={idx !==Tasks.length-1}
          />
        ))}
      </div>
    </div>
  );
}
