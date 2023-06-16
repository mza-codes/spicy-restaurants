import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import MainLayout from "@/layouts/MainLayout";

type Props = AppProps & {
    Component: any;
};

export default function App({ Component, pageProps: { session, ...pageProps } }: Props) {
    return (
        <SessionProvider session={session}>
            <MainLayout _uniqueLayout={Component?._uniqueLayout}>
                <Component {...pageProps} />
            </MainLayout>
        </SessionProvider>
    );
}
