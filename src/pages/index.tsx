import { genTitle } from "@/lib/utils";
import Banner from "@/sections/Banner";
import NearBy from "@/sections/NearBy";
import Head from "next/head";

export default function HomePage() {
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
