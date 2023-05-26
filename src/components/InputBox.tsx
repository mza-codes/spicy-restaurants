import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputBoxProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    containerClassName?: string;
};

export default function InputBox({ label, containerClassName, ...props }: InputBoxProps) {
    return (
        <div className={`relative col gap-2 ${containerClassName ?? ""}`}>
            <label
                className="font-semibold text-xs text-secondary.400 "
                htmlFor={props.name}
            >
                {label}
            </label>
            <input
                className="rounded-lg border-gray.200 p-3 border-[1px] outline-primary.400"
                {...props}
            />
        </div>
    );
}
