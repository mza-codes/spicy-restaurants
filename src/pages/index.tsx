import { genTitle } from "@/lib/utils";
import Banner from "@/sections/Banner";
import NearBy from "@/sections/NearBy";
import { Restaurant } from "@/types";
import { GetStaticProps } from "next";
import Head from "next/head";

type HomepageProps = {
    nearby: Restaurant[];
};

export default function HomePage(props: HomepageProps) {
    return (
        <>
            <Head>
                <title>{genTitle("Home")}</title>
            </Head>
            <main className="col py-3 gap-5">
                <Banner />
                <NearBy restaurants={props.nearby} />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
    // Fetch data or perform any other necessary operations
    // Return the props object
    return {
        props: {
            nearby: [
                {
                    title: "Royal Sushi House",
                    time: "30-40",
                    price: "32",
                    tags: ["sushi"],
                    featured: true,
                },
                {
                    title: "Burgers & Pizza",
                    time: "40-60",
                    price: "24",
                    tags: ["pizza", "burger"],
                    featured: true,
                },
                {
                    title: "Ninja Sushi",
                    time: "20-40",
                    price: "40",
                    tags: ["sushi"],
                    featured: false,
                },
                {
                    title: "Sushi Master",
                    time: "60-70",
                    price: "49",
                    tags: ["vegan", "sushi"],
                    featured: true,
                },
                {
                    title: "Japanese Sushi",
                    time: "30-50",
                    price: "104",
                    tags: ["pizza", "bbq", "sushi"],
                    featured: false,
                },
                {
                    title: "Kobe",
                    time: "20-30",
                    price: "57",
                    tags: ["sushi", "desserts", "bbq"],
                    featured: false,
                },
            ],
        },
        // Optional: Set the revalidation period in seconds
        // revalidate: 1,
    };
};
