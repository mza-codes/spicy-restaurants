import AuthRoute from "@/components/AuthRoute";
import Backdrop from "@/components/Backdrop";
import AppLogo from "@/components/sub-components/AppLogo";
import useAuthLoader from "@/hooks/useAuthLoader";
import { genTitle } from "@/lib/utils";
import LoginForm from "@/sections/LoginForm";
import LoginPromoSection from "@/sections/LoginPromoSection";
import SignUpForm from "@/sections/SignUpForm";
import VeriyForm from "@/sections/VerifyForm";
import { Spin } from "antd";
import Head from "next/head";
import Link from "next/link";

type AuthLayoutProps = {
    type: "login" | "signup" | "verify";
    title: string;
};

export default function AuthLayout({ type, title }: AuthLayoutProps) {
    const loading = useAuthLoader()[0];

    return (
        <AuthRoute fullscreen protect={false} path="/">
            <Head>
                <title>{genTitle(title)}</title>
            </Head>
            <main className="row center min-h-[100dvh] relative">
                <section className="col gap-2 flex-[1] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] justify-between relative">
                    <Link href={"/"}>
                        <AppLogo />
                    </Link>
                    {type === "login" && <LoginForm />}
                    {type === "signup" && <SignUpForm />}
                    {type === "verify" && <VeriyForm />}
                    {loading && (
                        <Backdrop className="hidden lg:flex">
                            <Spin size="large" />
                        </Backdrop>
                    )}
                </section>
                {/* LOADER ON SMALLER SCREENS */}
                {loading && (
                    <Backdrop className="flex lg:hidden">
                        <Spin size="large" />
                    </Backdrop>
                )}
                <LoginPromoSection />
            </main>
        </AuthRoute>
    );
}
