import React from 'react';
import FileStatsDiv from '../Mini Components/FileStatsDiv';
import { fileUploads } from '../../../Files/FileUploads';
import { file } from '../../../../Functions/fileType';

export default function FilesStats() {
    return (
        <div className="flex flex-col gap-3">
            {fileUploads.map((el, idx) => (
                <FileStatsDiv
                    key={idx}
                    fileSize={el.fileSize.split('m')[0] + ' GB'}
                    number={(idx * 15 )+ 53}
                    icon={el.icon}
                    type={file(idx)}
                />
            ))}
        </div>
    );
}
