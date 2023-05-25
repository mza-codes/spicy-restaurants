import Banner from "@/sections/Banner";
import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Spicy | Home</title>
            </Head>
            <main>
                <Banner />
            </main>
        </>
    );
}
