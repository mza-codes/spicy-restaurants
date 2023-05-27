import { useState } from "react";
import { IconType } from "react-icons";

export type MenuItemProps = {
    selected?: boolean;
    Icon: IconType;
    title: string;
    subtitle: string;
    className?: string;
};

export default function MenuItem({
    selected,
    Icon,
    title,
    subtitle,
    className,
}: MenuItemProps) {
    const [select, setSelect] = useState(selected);

    return (
        <div
            onClick={() => setSelect((c) => !c)}
            className={`${className} rounded-2xl p-4 cursor-pointer row items-center justify-start gap-4 border-2 ${
                select
                    ? "text-primary border-primary hover:bg-primary.400/30 bg-primary.400/10"
                    : "text-secondary.400 border-gray.200 hover:border-primary.400 hover:bg-[#F8F9FF]"
            } `}
        >
            <button
                className={`p-3 rounded-xl ${
                    select ? "bg-primary text-white" : "bg-gray.200 text-gray.400"
                }`}
            >
                {<Icon size={24} />}
            </button>
            <div className="col">
                <span className="text-sm font-bold capitalize text-secondary">
                    {title}
                </span>
                <span className="text-xs text-secondary.400 ">{subtitle}</span>
            </div>
        </div>
    );
}
