import { DetailedHTMLProps, InputHTMLAttributes, forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export type InputBoxProps = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    containerClassName?: string;
    error?: string;
    name: string;
};

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(function InputBoxV1(
    { label, containerClassName, type, error, ...props },
    ref
) {
    const [show, setShow] = useState(false);
    const isPassword = props?.name?.includes("password") ?? false;
    return (
        <div className={`relative col gap-2 ${containerClassName ?? ""}`}>
            <label
                className="font-semibold text-xs text-secondary.400 "
                htmlFor={props.name}
            >
                {label}
            </label>
            <input
                ref={ref}
                className={`rounded-lg border-gray.200 p-3 border-[1px] outline-primary.400 placeholder:text-gray.400 text-sm ${
                    isPassword ? "pr-12" : ""
                }`}
                type={isPassword ? (show ? "text" : "password") : type}
                {...props}
            />
            {isPassword && (
                <button
                    type="button"
                    className="absolute right-1 bottom-1 p-2 text-gray.200 hover:text-gray-400/80 text-2xl"
                    onClick={() => setShow((c) => !c)}
                >
                    {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
            )}
            <span className="text-red-400 capitalize text-xs ml-1">{error || " "}</span>
        </div>
    );
});

export default InputBox;
