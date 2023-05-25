import Banner from "@/sections/Banner";
import NearBy from "@/sections/NearBy";
import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Spicy | Home</title>
            </Head>
            <Banner />
            <NearBy />
        </>
    );
}
