import { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function Secret({ children, className = "" }: Props) {
    const [show, setShow] = useState(false);
    return (
        <span
            onClick={() => setShow(!show)}
            className={`${className} cursor-pointer p-2 min-h-12 bg-gray.400 text-2xl font-semibold rounded-lg ${
                show ? "text-white" : "text-gray.400"
            }`}
        >
            {show ? children : null}
        </span>
    );
}
