import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="bg-[#EDEEF2] rounded-xl py-2 pl-3 pr-8 outline-none focus:outline-primary max-w-[224px] h-[40px] placeholder:text-sm placeholder:font-normal"
            />
            <button className="absolute right-2 top-1 bottom-1 ">
                <BiSearch size={18} color="#83859C" />
            </button>
        </div>
    );
}
