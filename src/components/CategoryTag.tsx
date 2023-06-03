import { tags } from "@/types";
import Img from "./Img";

type Props = {
    title: tags;
};

export default function CategoryTag({ title }: Props) {
    return (
        <div className="rounded-[100px] bg-gray.200 py-2 px-3 row gap-2 cursor-pointer hover:bg-gray.400/20">
            <Img
                src={`/assets/items/${title}.png`}
                className="w-4 object-contain"
                alt="tag"
            />{" "}
            <span className="text-secondary.400 text-xs font-semibold capitalize">
                {title}
            </span>
        </div>
    );
}
