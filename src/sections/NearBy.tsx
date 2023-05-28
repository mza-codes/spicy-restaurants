import CategoryTag from "@/components/CategoryTag";
import RestaurantCard from "@/components/RestaurantCard";
import SubHeading from "@/components/SubHeading";
import { Restaurant } from "@/types";

type NearByProps = {
    restaurants: Restaurant[];
};

export default function NearBy({ restaurants }: NearByProps) {
    return (
        <>
            <SubHeading title="Nearby Restaurants" />
            <section className="row gap-4">
                {restaurants.map((card, i) => (
                    <RestaurantCard
                        key={i}
                        card={{
                            ...card,
                            img: `/assets/restaurants/${i + 1}.png`,
                        }}
                    />
                ))}
            </section>
        </>
    );
}
