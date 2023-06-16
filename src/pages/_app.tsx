import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import MainLayout, { MainLayoutProps } from "@/layouts/MainLayout";

type _AppProps = AppProps & {
    Component: MainLayoutProps;
};

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: _AppProps) {
    return (
        <SessionProvider session={session}>
            <MainLayout _uniqueLayout={Component?._uniqueLayout}>
                <Component {...pageProps} />
            </MainLayout>
        </SessionProvider>
    );
}
