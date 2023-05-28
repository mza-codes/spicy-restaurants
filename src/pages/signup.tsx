import AuthRoute from "@/components/AuthRoute";
import { genTitle } from "@/lib/utils";
import LoginPromoSection from "@/sections/LoginPromoSection";
import SignUpSection from "@/sections/SignUpSection";
import Head from "next/head";

export default function LoginPage() {
    return (
        <>
            <AuthRoute protect={false} fullscreen path="/">
                <Head>
                    <title>{genTitle("SignUp")}</title>
                </Head>
                <main className="row center min-h-[100dvh]">
                    <SignUpSection />
                    <LoginPromoSection />
                </main>
            </AuthRoute>
        </>
    );
}

LoginPage._uniqueLayout = true;
