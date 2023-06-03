import { Spin } from "antd";
import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from "react";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    custom?: boolean;
};

export default function Img({ custom, className, alt, ...props }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    if (!isLoaded)
        return (
            <div
                className={`${className} flex items-center justify-center min-h-[inherit] min-w-[inherit]`}
            >
                <Spin size="small" className="m-auto" />
            </div>
        );

    return (
        <img
            alt={alt ?? "_image"}
            {...props}
            className={`load-placeholder ${className}`}
            onLoad={({ currentTarget: el }) => {
                el.classList.remove("load-placeholder");
            }}
        />
    );
}
