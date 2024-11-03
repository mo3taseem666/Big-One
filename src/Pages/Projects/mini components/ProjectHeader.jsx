export default function ProjectHeader({ name, date, details }) {
    return (
        <div className="flex flex-col font-medium gap-2">
            <div className="flex items-center justify-between">
                <p>{name}</p>
                <p className="text-[#888] text-sm">{date}</p>
            </div>
            <p className="text-sm text-[#888] ">{details}</p>
        </div>
    );
}
