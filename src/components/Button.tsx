import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    bg?: boolean;
    outline?: boolean;
    color?: string;
    hideBorder?: boolean;
};

export default function Button({
    children,
    className,
    outline,
    bg,
    disabled,
    type,
    ...props
}: Props) {
    return (
        <button
            {...props}
            className={`${className} text-sm font-bold tracking-wide rounded-lg hover:opacity-80 p-3 relative ${
                bg ? "bg-primary text-white" : "text-primary"
            } ${disabled ? "animate-pulse cursor-not-allowed" : ""}`}
            disabled={disabled}
            type={type ?? "button"}
        >
            {children}
        </button>
    );
}

export function ButtonV2({
    outline,
    children,
    className,
    hideBorder,
    color,
    bg,
    type,
    ...props
}: Props) {
    return (
        <button
            {...props}
            className={`${className} py-2 px-4 border-[1px] font-bold text-sm rounded-lg border-primary.400 ${
                bg
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "text-primary hover:bg-primary.200"
            } disabled:border-gray.200 disabled:text-gray.400 disabled:bg-transparent disabled:hover:bg-transparent disabled:cursor-not-allowed ${
                hideBorder ? "disabled:border-none" : ""
            }`}
            style={{ color: color, borderColor: color }}
            type={type ?? "button"}
        >
            {children}
        </button>
    );
}
