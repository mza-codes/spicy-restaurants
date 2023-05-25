import CategoryTag from "@/components/CategoryTag";
import RestaurantCard from "@/components/RestaurantCard";

export default function NearBy() {
    return (
        <main>
            <h1 className="font-semibold text-xl my-4">Nearby Restaurants</h1>
            <section className="row gap-4">
                {data.map((card, i) => (
                    <RestaurantCard
                        card={{ ...card, img: `/assets/restaurants/${i + 1}.png` }}
                    />
                ))}
            </section>
        </main>
    );
}

var data = [
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
    {
        featured: true,
        price: "32",
        title: "Royal Sushi House",
        tags: <CategoryTag title={"bbq"} />,
        time: "30-40",
    },
];
