import { BiSearch } from "react-icons/bi";

export default function SeatchBox() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="bg-[#EDEEF2] rounded-xl py-2 px-3"
            />
            <button className="absolute right-2 top-0 bottom-0 -translate-y-[10%]">
                <BiSearch size={16} color="#83859C" />
            </button>
        </div>
    );
}
