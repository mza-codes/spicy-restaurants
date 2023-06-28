import useLocalStore, { categories } from "@/store/useLocalStore";
import { Popover } from "antd";
import { BiSearch } from "react-icons/bi";
import CategoryTag from "../CategoryTag";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function SearchBox() {
    const router = useRouter();
    const [text, setText] = useState("");
    const data = useLocalStore((s) => s.data);
    const timeout = useRef<NodeJS.Timeout>();

    const fetchSuggestions = (q: string) => {
        const key = q.toLowerCase();
        const tags = categories.filter((tag) => tag.includes(key)).map((tag) => tag);
        const restaurants = data.filter((res) => {
            return (
                res.title.toLowerCase().includes(key) ||
                res.price.includes(key) ||
                res.time.includes(key)
            );
        });

        const result = [
            ...restaurants.map((res) => ({
                title: res.tags[0],
                label: res.title,
            })),
            ...tags.map((tag) => ({
                title: tag,
                label: tag,
            })),
        ];

        return result;
    };

    return (
        <Popover
            className="w-full"
            trigger={"click"}
            content={
                <div className="col gap-2">
                    {text?.length > 0 ? (
                        fetchSuggestions(text).length <= 0 ? (
                            <span className="text-error font-semibold text-xs">
                                Nothing found!
                            </span>
                        ) : (
                            fetchSuggestions(text).map((tag, i) => (
                                <div
                                    key={`${tag.title}-${i}`}
                                    className="cursor-pointer"
                                    onClick={() => {
                                        router.push(`/view-restaurants`);
                                    }}
                                >
                                    <CategoryTag title={tag.title} label={tag.label} />
                                </div>
                            ))
                        )
                    ) : (
                        <span className="text-primary font-semibold text-sm">
                            Search...
                        </span>
                    )}
                </div>
            }
        >
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray.200 rounded-xl py-2 pl-3 pr-8 outline-none focus:outline-primary max-w-[224px] h-[40px] placeholder:text-sm placeholder:font-normal"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button className="absolute right-2 top-1 bottom-1 ">
                    <BiSearch size={18} color="#83859C" />
                </button>
            </div>
        </Popover>
    );
}
