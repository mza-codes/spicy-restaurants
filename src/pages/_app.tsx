import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";
import ConfirmDialog from "@/components/Dialog/ConfirmDialog";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${nunito.className}`}>
            <Header />
            <hr className="w-full" />
            <main className={`min-h-[100dvh] max-w-6xl mx-auto lg:px-1 px-4`}>
                <Component {...pageProps} />
                <ConfirmDialog />
                <Toaster
                    containerClassName={`${nunito.className} capitalize font-semibold`}
                    position="top-center"
                    gutter={4}
                    reverseOrder
                />
            </main>
        </main>
    );
}
