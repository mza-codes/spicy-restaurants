import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckBoxProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    name: string;
    label: string;
    className?: string;
};

export default function CheckBox({ label, name, className, ...props }: CheckBoxProps) {
    return (
        <label className={`cursor-pointer ${className} row gap-2 items-center`}>
            <input
                {...props}
                name={name}
                type="checkbox"
                className="checkbox checkbox-sm accent-primary checkbox-primary"
            />
            <label htmlFor={name} className="text-base text-secondary">
                {label}
            </label>
        </label>
    );
}
