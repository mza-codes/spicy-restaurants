import Header from "@/components/Header";
import Head from "next/head";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Spicy | Home</title>
            </Head>
            <Header />
            <main className="min-h-screen bg-white col center">
                <div className="rounded-lg w-44 h-80 bg-rose-800">
                    <span className="text-white">Hi thrte</span>
                </div>
            </main>
        </>
    );
}
