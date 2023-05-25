import { useState } from "react";

type Props = {
    title: string;
    image: string;
    selected?: boolean;
};

export default function BannerItem({ image, title, selected = false }: Props) {
    const [select, setSelect] = useState(selected);

    return (
        <div
            onClick={() => setSelect((c) => !c)}
            className={`flex-grow rounded-2xl p-4 cursor-pointer m-2 col center gap-4 border-2 ${
                select
                    ? "text-primary border-primary hover:bg-primary.400/30 bg-primary.400/10"
                    : "text-secondary.400 border-gray.200 hover:border-primary.400 hover:bg-[#F8F9FF]"
            } `}
        >
            <img className="w-6" src={image} alt={title} />
            <span className="text-sm font-extrabold capitalize">{title}</span>
        </div>
    );
}

export function BannerItemV1({ image, title, selected = false }: Props) {
    const [select, setSelect] = useState(selected);

    return (
        <div
            onClick={() => setSelect((c) => !c)}
            className={`flex-grow rounded-2xl p-4 cursor-pointer m-2 col center gap-4 ${
                select
                    ? "text-primary border-primary border-2 hover:bg-primary.400/10 bg-primary.400/10"
                    : "text-secondary.400 border-[1px] border-gray.200 hover:border-primary.400 hover:bg-[#F8F9FF]"
            } `}
        >
            <img className="w-6" src={image} alt={title} />
            <span className="text-sm font-extrabold capitalize">{title}</span>
        </div>
    );
}
