import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    bg?: boolean;
};

export default function Button({ children, className, bg, ...props }: Props) {
    return (
        <button
            {...props}
            className={`${className} text-sm font-bold tracking-wide rounded-lg hover:opacity-80 p-4 ${
                bg ? "bg-primary text-white" : "text-primary"
            } `}
        >
            {children}
        </button>
    );
}
