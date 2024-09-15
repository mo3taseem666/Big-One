import React from 'react';

export default function QuickDraft() {
  return (
    <div className="bg-white rounded-[10px] p-5 flex flex-col gap-[19px] ">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold">Quick Draft</p>
        <p className="text-[#888] font-medium">Write A Draft For Your Ideas</p>
      </div>
      <input
        placeholder="Title"
        type="text"
        className="bg-gray-200 focus:outline-none px-3 py-1 rounded-md "
      />
      <textarea
        placeholder="Your Thoughts"
        className="resize-none bg-gray-200 focus:outline-none h-40 p-3 text-sm"
        name="thought"
        id="thought"
      />
      <button className="px-5 self-end py-2 text-white bg-sky-500 hover:bg-sky-600 duration-200 ">
        Save
      </button>
    </div>
  );
}
