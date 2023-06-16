import BannerCard, { BannerCardProps } from "@/components/BannerCard";
import BannerItem from "@/components/BannerItem";
import useLocalStore, {
    categories,
    filterRestaurants,
    selectTag,
} from "@/store/useLocalStore";
import { useEffect } from "react";

export default function Banner() {
    const selectedTags = useLocalStore((s) => s.selectedTags);
    const res = useLocalStore((s) => s.restaurants);
    console.log("TAS=>", { res, selectedTags });

    useEffect(() => {
        filterRestaurants();
    }, [selectedTags]);

    return (
        <>
            <section className="py-2 row center gap-4">
                {items.map((card, i) => (
                    <BannerCard key={i} {...card} />
                ))}
            </section>

            <section className="row gap-4 center px-1 py-2">
                {categories.map((cat, i) => (
                    <BannerItem
                        image={`/assets/items/${cat}.png`}
                        title={cat}
                        key={cat}
                        selected={selectedTags.includes(cat)}
                        onClick={(isSelected) => {
                            selectTag(cat, isSelected);
                        }}
                    />
                ))}
            </section>
        </>
    );
}

var items: BannerCardProps[] = [
    {
        category: "Deserty",
        discount: "20",
        image: "/assets/cream-cake.png",
        title: "All deserts",
        bg: "rgb(243 244 255 / 1)",
        color: "#4E60FF",
    },
    {
        category: "Fooddies",
        discount: "50",
        image: "/assets/burger.png",
        title: "Big Burgers",
        bg: "rgb(255 243 237 / 1)",
        color: "#FD6D22",
    },
];
