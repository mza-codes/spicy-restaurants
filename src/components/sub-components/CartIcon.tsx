import { Badge } from "antd";

export default function CartIcon() {
    return (
        <Badge
            count={
                <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold border-[1px] border-white">
                    4
                </span>
            }
            color="#4E60FF"
            offset={[-5, 4]}
            className="btn-animate rounded-lg"
        >
            <div className="rounded-2xl bg-gray.200 p-3 relative cursor-pointer hover:bg-primary.200">
                <img src={"/assets/Bag.svg"} className="m-auto" alt="bag_icon" />
            </div>
        </Badge>
    );
}
