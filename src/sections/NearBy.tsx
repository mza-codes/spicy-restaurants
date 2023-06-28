import RestaurantCard from "@/components/RestaurantCard";
import SubHeading from "@/components/SubHeading";
import useLocalStore from "@/store/useLocalStore";
import { Spin } from "antd";
import { useEffect } from "react";

export default function NearBy() {
    const data = useLocalStore((s) => s.restaurants);
    const loading = useLocalStore((s) => s.isFetching);

    useEffect(() => {
        let ref = setTimeout(() => {
            useLocalStore.setState({ isFetching: false });
        }, 6000);

        return () => {
            clearTimeout(ref);
        };
    }, []);

    return (
        <>
            <SubHeading title="Nearby Restaurants" />
            {loading && <Spin className="p-4" size="large" />}
            {data.length <= 0 && !loading && (
                <span className="font-semibold text-lg text-error p-4">
                    No Nearby Restaurants Found, Please try selecting at least one tag!
                </span>
            )}
            <section className="row gap-4 pb-12">
                {data.map((card, i) => (
                    <RestaurantCard
                        key={i}
                        card={{
                            ...card,
                            img: card.img || `/assets/restaurants/${i + 1}.png`,
                        }}
                    />
                ))}
            </section>
        </>
    );
}
