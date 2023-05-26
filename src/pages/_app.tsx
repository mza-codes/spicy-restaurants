import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ConfirmDialog from "@/components/Dialog/ConfirmDialog";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { nunito } from "@/lib/fonts";

type LayoutProps = AppProps & {
    Component: {
        _uniqueLayout?: boolean;
    };
};

export default function App({ Component, pageProps }: LayoutProps) {
    return (
        <main className={`${nunito.className}`}>
            {Component?._uniqueLayout ? null : (
                <>
                    <Header />
                    <hr className="w-full" />
                </>
            )}
            <main
                className={`${
                    Component?._uniqueLayout
                        ? ""
                        : "min-h-[100dvh] max-w-6xl mx-auto px-4"
                }`}
            >
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
