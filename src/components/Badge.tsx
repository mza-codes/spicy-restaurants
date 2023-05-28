import { Badge as BadgeWrapper } from "antd";
import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    count: number;
};

export default function Badge({ children, count }: Props) {
    return (
        <BadgeWrapper
            count={
                <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold">
                    {count}
                </span>
            }
            color="#4E60FF"
            offset={[-5, 4]}
            className="btn-animate rounded-lg"
        >
            {children}
        </BadgeWrapper>
    );
}
