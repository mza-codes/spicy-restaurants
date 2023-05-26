import AuthRoute from "@/components/AuthRoute";
import { genTitle } from "@/lib/utils";
import LoginPromoSection from "@/sections/LoginPromoSection";
import LoginSection from "@/sections/LoginSection";
import Head from "next/head";

export default function LoginPage() {
    return (
        <>
            <AuthRoute protect={false} path="/">
                <Head>
                    <title>{genTitle("Login")}</title>
                </Head>
                <main className="row center min-h-[100dvh]">
                    <LoginSection />
                    <LoginPromoSection />
                </main>
            </AuthRoute>
        </>
    );
}

LoginPage._uniqueLayout = true;
