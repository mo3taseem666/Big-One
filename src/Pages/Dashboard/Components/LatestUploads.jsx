import React from 'react';
import LateseUploadDiv from '../mini components/Latest Uploads/LateseUploadDiv';
import { fileUploads } from '../../../Files/FileUploads';

export default function LatestUploads() {
  return (
    <div className="bg-white p-5 rounded-[10px] ">
      <p className="text-2xl mb-2 font-semibold">Latest Uploads</p>
      {fileUploads.map((el, idx) => (
        <LateseUploadDiv
          isLast={idx === fileUploads.length-1}
          key={idx}
          fileName={el.fileName}
          icon={el.icon}
          fileSize={el.fileSize}
          name={el.name}
        />
      ))}
    </div>
  );
}
