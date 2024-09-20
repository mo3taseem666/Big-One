import { repeatedFiles } from '../../Files/Files';
import Header from '../../Golbal Components/Header';
import FileCard from './Components/FileCard';
import FilesStatistics from './Mini Components/FilesStatistics';

export default function Files() {
    return (
        <div>
            <Header header={'Files'} />
            <div className="flex 960:flex-col-reverse gap-5">
                <div className="grid w-full gap-5 532:grid-cols-1 1188:grid-cols-2 1414:grid-cols-3 1636:grid-cols-4 1859:grid-cols-5 grid-cols-6">
                    {repeatedFiles.map((el, idx) => (
                        <FileCard
                            key={idx}
                            icon={el.icon}
                            userName={el.name}
                            fileName={el.fileName}
                            fileSize={el.fileSize}
                            date={el.date}
                        />
                    ))}
                </div>
                <FilesStatistics />
            </div>
        </div>
    );
}
