import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode, useId } from "react";
import { BsImage } from "react-icons/bs";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    custom?: boolean;
    bgClassName?: string;
    svgColor?: string;
    bgColor?: string;
    loader?: ReactNode;
};

export default function Img({
    bgClassName,
    svgColor,
    className = "",
    alt,
    bgColor,
    loader,
    ...props
}: Props) {
    const id = useId();

    return (
        <div className={`relative z-10`}>
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
                style={{ backgroundColor: bgColor }}
                id={id}
                className={`${
                    bgClassName ? bgClassName : "bg-white"
                } col absolute inset-0 z-20 justify-center min-w-[inherit] overflow-hidden`}
            >
                {loader ? (
                    loader
                ) : (
                    <BsImage
                        className="animate-pulse p-2"
                        size={"auto"}
                        color={svgColor ?? "#ccc"}
                    />
                )}
            </div>
        </div>
    );
}
