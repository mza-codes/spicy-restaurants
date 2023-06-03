import { tags } from "@/types";
import Img from "./Img";

type Props = {
    title: tags;
    label?: string;
};

export default function CategoryTag({ title, label }: Props) {
    label = label || title;
    return (
        <div className="rounded-[100px] bg-gray.200 py-2 px-3 row gap-2 cursor-pointer hover:bg-gray.400/20 btn-animate">
            <Img
                src={`/assets/items/${title}.png`}
                className="w-4 object-contain"
                alt="tag"
            />{" "}
            <span className="text-secondary.400 text-xs font-semibold capitalize">
                {label}
            </span>
        </div>
    );
}
