import CategoryTag from "@/components/CategoryTag";
import RestaurantCard from "@/components/RestaurantCard";
import { Restaurant } from "@/types";

type NearByProps = {
    restaurants: Restaurant[];
};

export default function NearBy({ restaurants }: NearByProps) {
    return (
        <>
            <h1 className="font-semibold text-xl py-2">Nearby Restaurants</h1>
            <section className="row gap-4">
                {restaurants.map((card, i) => (
                    <RestaurantCard
                        key={i}
                        card={{
                            ...card,
                            img: `/assets/restaurants/${i + 1}.png`,
                            tags: (
                                <>
                                    {card.tags.map((tag, i) => (
                                        <CategoryTag title={tag} key={`${i}-${tag}`} />
                                    ))}
                                </>
                            ),
                        }}
                    />
                ))}
            </section>
        </>
    );
}
