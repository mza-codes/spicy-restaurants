import { Badge, Popover } from "antd";
import { GoPackage } from "react-icons/go";
import Img from "../Img";
import useLocalStore from "@/store/useLocalStore";
import { useRouter } from "next/router";

export default function CartIcon() {
    const cart = useLocalStore((s) => s.cart);
    const route = useRouter();

    return (
        <Popover
            trigger={"click"}
            content={
                cart.length <= 0 ? (
                    <div className="col p-2 gap-2 center text-center">
                        <GoPackage size={86} color="#ddd" />
                        <span className="text-secondary font-semibold">
                            Nothing Here!
                        </span>
                    </div>
                ) : (
                    <div className="col p-2 gap-2 center text-center">
                        {cart.map((item) => (
                            <div
                                onClick={() =>
                                    route.push(
                                        `/view-restaurants?id=${item._id}`
                                    )
                                }
                                key={item.img}
                                className="row gap-2 items-center w-full justify-start hover:bg-gray.200 p-2 rounded-md cursor-pointer"
                            >
                                <Img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-[50px] h-[50px] rounded-lg object-cover"
                                />
                                <span className="text-secondary font-semibold">
                                    {item.title}
                                </span>
                                <span className="text-[8px] bg-primary text-white rounded-lg py-[4px] px-[5px] font-semibold border-[1px] border-white ">
                                    {item.count || 1}
                                </span>
                            </div>
                        ))}
                    </div>
                )
            }
        >
            <Badge
                count={
                    <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold border-[1px] border-white">
                        {cart.length}
                    </span>
                }
                offset={[-5, 4]}
                className="btn-animate rounded-lg"
            >
                <div className="rounded-2xl bg-gray.200 p-3 relative cursor-pointer hover:bg-primary.200/40">
                    <Img src={"/assets/Bag.svg"} className="m-auto" alt="bag_icon" />
                </div>
            </Badge>
        </Popover>
    );
}
