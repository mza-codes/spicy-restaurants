import { ReactNode } from "react";

type Props = {
    className?: string;
    children: ReactNode;
};

export default function Backdrop({ className, children }: Props) {
    return (
        <div
            className={`absolute inset-0 bg-black/30 flex-col center gap-4 backdrop-blur-md z-10 ${className}`}
        >
            {children}
        </div>
    );
}
