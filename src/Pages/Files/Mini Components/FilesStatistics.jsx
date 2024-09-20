import FilesStats from '../Components/FilesStats';
import FileStatsBtn from './FileStatsBtn';

export default function FilesStatistics() {
    return (
        <div className="p-5 shrink-0 flex flex-col self-start bg-white w-[260px] 960:w-full rounded-lg">
            <p className="text-2xl font-semibold mb-5">Files Statistics</p>
            <FilesStats />
            <FileStatsBtn />
        </div>
    );
}
