import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ConfirmDialog from "@/components/Dialog/ConfirmDialog";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import { nunito } from "@/lib/fonts";
import { SessionProvider } from "next-auth/react";

type LayoutProps = AppProps & {
    Component: {
        _uniqueLayout?: boolean;
    };
};

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: LayoutProps) {
    return (
        <SessionProvider session={session}>
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
                            : "min-h-[calc(100dvh-81px)] max-w-6xl mx-auto px-4"
                    }`}
                >
                    <Component {...pageProps} />
                    <ConfirmDialog />
                    <Toaster
                        containerClassName={`${nunito.className} capitalize font-semibold`}
                        position="top-center"
                        gutter={4}
                        toastOptions={{ duration: 2400 }}
                        reverseOrder
                    />
                </main>
            </main>
        </SessionProvider>
    );
}
