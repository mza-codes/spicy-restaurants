import { ReactNode } from "react";
import { FiClock } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

export type RestaurantCardProps = {
    card: {
        featured: boolean;
        img: string;
        title: string;
        time: string;
        price: string;
        tags: ReactNode;
    };
};

export default function RestaurantCard({ card }: RestaurantCardProps) {
    return (
        <div className="rounded-2xl border-gray.200 border-[1px] col min-w-[200px] flex-[30%]">
            <div className="relative">
                <img
                    src={card.img}
                    alt={card.title}
                    className="overflow-hidden rounded-t-2xl max-w-full"
                />
            </div>
            <div className="p-4 col gap-4">
                <div>
                    <span className="text-lg font-bold">{card.title}</span>
                    <button className="float-right">
                        <img src={"/assets/Bag.svg"} alt="bag_icon" />
                    </button>
                </div>
                <div className="text-gray.400 row gap-1 items-center">
                    <FiClock size={12} color="#C7C8D2" />
                    <span>{card.time} min</span>
                    <span className="text-primary font-black">
                        <BsDot size={20} />
                    </span>
                    <span>${card.price} min sum</span>
                </div>
                <div className="row gap-2">{card.tags}</div>
            </div>
        </div>
    );
}
