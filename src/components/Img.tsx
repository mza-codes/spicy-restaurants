import { DetailedHTMLProps, ImgHTMLAttributes, useId } from "react";
import { BsImage } from "react-icons/bs";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    custom?: boolean;
    bgClassName?: string;
};

export default function Img({ bgClassName, className, alt, ...props }: Props) {
    const id = useId();

    return (
        <div className="relative">
            <img
                loading="lazy"
                {...props}
                className={`${className}`}
                onLoad={({ currentTarget: el }) => {
                    const overlay = document.getElementById(id);
                    overlay && overlay.remove();
                }}
                alt={alt ?? "_image"}
            />
            <div
                id={id}
                className={`${
                    bgClassName ? bgClassName : "bg-white"
                } rounded-sm col absolute inset-0 z-10 p-2 justify-center gap-2 min-w-[inherit] overflow-hidden`}
            >
                <BsImage className="animate-pulse" size={"auto"} color="#ddd" />
            </div>
        </div>
    );
}
