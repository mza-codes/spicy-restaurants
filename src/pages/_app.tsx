import "@/styles/globals.css";
import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";
import ConfirmDialog from "@/components/Dialog/ConfirmDialog";
import { Toaster } from "react-hot-toast";

const inter = Nunito({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className={`min-h-[100dvh] bg-white/80 ${inter.className}`}>
                <Component {...pageProps} />
                <ConfirmDialog />
                <Toaster
                    containerClassName={`${inter.className} capitalize font-semibold`}
                    position="top-center"
                    gutter={4}
                    reverseOrder
                />
            </main>
        </>
    );
}
