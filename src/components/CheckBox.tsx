import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";

export type CheckBoxProps<T = string> = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    name: T;
    label: string;
    className?: string;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(function CheckBox(
    { label, className, ...props },
    ref
) {
    return (
        <label className={`cursor-pointer ${className} row gap-2 items-center`}>
            <input
                ref={ref}
                {...props}
                type="checkbox"
                className="checkbox checkbox-sm accent-primary checkbox-primary"
            />
            <label htmlFor={props?.name} className="text-base text-secondary">
                {label}
            </label>
        </label>
    );
});

export default CheckBox;
