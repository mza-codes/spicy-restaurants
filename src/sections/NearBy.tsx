import CategoryTag from "@/components/CategoryTag";
import RestaurantCard from "@/components/RestaurantCard";

export default function NearBy() {
    return (
        <>
            <h1 className="font-semibold text-xl py-2">Nearby Restaurants</h1>
            <section className="row gap-4">
                {data.map((card, i) => (
                    <RestaurantCard
                        key={i}
                        card={{ ...card, img: `/assets/restaurants/${i + 1}.png` }}
                    />
                ))}
            </section>
        </>
    );
}

var data = [
    {
        title: "Royal Sushi House",
        time: "30-40",
        price: "32",
        tags: (
            <>
                <CategoryTag title={"sushi"} />
            </>
        ),
        featured: true,
    },
    {
        title: "Burgers & Pizza",
        time: "40-60",
        price: "24",
        tags: (
            <>
                <CategoryTag title={"burger"} />
                <CategoryTag title={"pizza"} />
            </>
        ),
        featured: true,
    },
    {
        title: "Ninja Sushi",
        time: "20-40",
        price: "40",
        tags: (
            <>
                <CategoryTag title={"sushi"} />
            </>
        ),
        featured: false,
    },
    {
        title: "Sushi Master",
        time: "60-70",
        price: "49",
        tags: (
            <>
                <CategoryTag title={"sushi"} />
                <CategoryTag title={"vegan"} />
            </>
        ),
        featured: false,
    },
    {
        title: "Japanese Sushi",
        time: "30-50",
        price: "104",
        tags: (
            <>
                <CategoryTag title={"sushi"} />
                <CategoryTag title={"pizza"} />
            </>
        ),
        featured: false,
    },
    {
        title: "Kobe",
        time: "20-30",
        price: "57",
        tags: (
            <>
                <CategoryTag title={"sushi"} />
            </>
        ),
        featured: false,
    },
];
