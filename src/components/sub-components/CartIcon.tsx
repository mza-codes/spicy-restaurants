import { Badge, Popover } from "antd";
import { GoPackage } from "react-icons/go";

export default function CartIcon() {
    return (
        <Popover
            trigger={"click"}
            content={
                <div className="col p-2 gap-2 center text-center">
                    <GoPackage size={86} color="#ddd" />
                    <span className="text-secondary font-semibold">Nothing Here!</span>
                </div>
            }
        >
            <Badge
                count={
                    <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold border-[1px] border-white">
                        4
                    </span>
                }
                offset={[-5, 4]}
                className="btn-animate rounded-lg"
            >
                <div className="rounded-2xl bg-gray.200 p-3 relative cursor-pointer hover:bg-primary.200/40">
                    <img src={"/assets/Bag.svg"} className="m-auto" alt="bag_icon" />
                </div>
            </Badge>
        </Popover>
    );
}
