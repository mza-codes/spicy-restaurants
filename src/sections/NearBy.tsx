import RestaurantCard from "@/components/RestaurantCard";
import SubHeading from "@/components/SubHeading";
import useLocalStore from "@/store/useLocalStore";

export default function NearBy() {
    const data = useLocalStore((s) => s.restaurants);
    return (
        <>
            <SubHeading title="Nearby Restaurants" />
            {data.length <= 0 && (
                <span className="font-semibold text-lg text-error p-4">
                    No Nearby Restaurants Found!
                </span>
            )}
            <section className="row gap-4 pb-12">
                {data.map((card, i) => (
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
