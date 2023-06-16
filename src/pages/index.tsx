import { genTitle } from "@/lib/utils";
import Banner from "@/sections/Banner";
import NearBy from "@/sections/NearBy";
import { populateData } from "@/store/useLocalStore";
import { Restaurant } from "@/types";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

type HomePageProps = {
    nearby: Restaurant[];
};

export default function HomePage(props: HomePageProps) {

    useEffect(() => {
        populateData(props.nearby);
    }, [props.nearby]);

    return (
        <>
            <Head>
                <title>{genTitle("Home")}</title>
            </Head>
            <main className="col py-3 gap-5">
                <Banner />
                <NearBy />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {

    return {
        props: {
            nearby: [
                {
                    title: "Royal Sushi House",
                    time: "30-40",
                    price: "32",
                    tags: ["sushi"],
                    featured: true,
                    img: "",
                    count: 0,
                },
                {
                    title: "Burgers & Pizza",
                    time: "40-60",
                    price: "24",
                    tags: ["pizza", "burger"],
                    featured: true,
                    img: "",
                    count: 2,
                },
                {
                    title: "Ninja Sushi",
                    time: "20-40",
                    price: "40",
                    tags: ["sushi"],
                    featured: false,
                    img: "",
                    count: 0,
                },
                {
                    title: "Sushi Master",
                    time: "60-70",
                    price: "49",
                    tags: ["vegan", "sushi"],
                    featured: false,
                    img: "",
                    count: 0,
                },
                {
                    title: "Japanese Sushi",
                    time: "30-50",
                    price: "104",
                    tags: ["pizza", "bbq", "sushi"],
                    featured: false,
                    img: "",
                    count: 0,
                },
                {
                    title: "Kobe",
                    time: "20-30",
                    price: "57",
                    tags: ["sushi", "desserts", "bbq"],
                    featured: false,
                    img: "",
                    count: 0,
                },
            ],
        },
        // Optional: Set the revalidation period in seconds
        // revalidate: 1,
    };
};
