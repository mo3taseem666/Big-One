export default function GrayBtn({name}) {
    return (
        <p className="px-2 cursor-default font-medium hover:bg-gray-300 duration-200 text-sm py-1 rounded-md bg-gray-200">
            {name}
        </p>
    );
}
