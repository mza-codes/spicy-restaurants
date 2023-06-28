import { Restaurant } from "@/types";
import { FiClock, FiShoppingBag } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { Badge } from "antd";
import CategoryTag from "./CategoryTag";
import { useState } from "react";
import Img from "./Img";

type RestaurantCardProps = {
    card: Restaurant;
};

export default function RestaurantCard({ card }: RestaurantCardProps) {
    const [count, setCount] = useState(card.count);

    return (
        <div className="rounded-2xl border-gray.200 border-[1px] col min-w-[260px] sm:min-w-[350px] flex-[30%] h-auto shadow-lg">
            <div className="relative">
                <Img
                    src={card.img}
                    alt={card.title}
                    className="overflow-hidden rounded-t-2xl w-full h-[220px] max-h-[300px] object-cover"
                />
                {card.featured && (
                    <span
                        style={{ borderRadius: "0 16px", letterSpacing: "0.8px" }}
                        className="bg-primary text-xs font-bold py-2 px-3 text-white absolute right-0 top-0"
                    >
                        FEATURED
                    </span>
                )}
            </div>
            <div className="p-4 col gap-4">
                <div>
                    <span className="text-lg font-bold">{card.title}</span>
                    <div className="float-right">
                        <Badge
                            count={
                                count > 0 ? (
                                    <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold border-[1px] border-white">
                                        {count}
                                    </span>
                                ) : null
                            }
                        >
                            <button
                                className={`hover:text-primary.400 btn-animate cursor-pointer ${
                                    count > 0 ? "text-primary" : "text-primary.200"
                                }`}
                            >
                                <FiShoppingBag color="inherit" size={22} />
                            </button>
                        </Badge>
                    </div>
                </div>
                <div className="text-gray.400 row gap-1 items-center font-semibold">
                    <FiClock size={12} color="#C7C8D2" />
                    <span>{card.time} min</span>
                    <span className="text-primary font-black">
                        <BsDot size={20} />
                    </span>
                    <span>${card.price} min sum</span>
                </div>
                <div className="row gap-2">
                    {card.tags.map((tag, i) =>
                        i <= 1 ? (
                            <CategoryTag title={tag} key={`${i}-${tag}`} />
                        ) : i === 2 ? (
                            <details key={`${i}-${tag}`} className="dropdown">
                                <summary className="rounded-[100px] bg-gray.200 py-2 px-3 row items-center gap-2 cursor-pointer hover:bg-gray.400/20 text-secondary.400 text-xs font-semibold capitalize">
                                    +{card.tags.length - 2} more
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md col gap-2 capitalize">
                                    {card.tags.map(
                                        (t, n) =>
                                            n >= 2 && (
                                                <li
                                                    key={t + n}
                                                    className="font-semibold text-xs p-1"
                                                    v-show="n >= 2"
                                                    v-for="(tag, n) in card.tags"
                                                >
                                                    {t}
                                                </li>
                                            )
                                    )}
                                </ul>
                            </details>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
}
