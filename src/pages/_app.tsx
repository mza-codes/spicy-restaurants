import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import MainLayout, { type MainLayoutProps } from "../layouts/MainLayout";

type Props = AppProps & {
    Component: MainLayoutProps;
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
