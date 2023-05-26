import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import { genTitle } from "@/lib/utils";
import LoginPromoSection from "@/sections/LoginPromoSection";
import LoginSection from "@/sections/LoginSection";
import Head from "next/head";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>{genTitle("Login")}</title>
            </Head>
            <main className="row center min-h-[100dvh]">
                <LoginSection />
                <LoginPromoSection />
            </main>
        </>
    );
}

LoginPage._uniqueLayout = true;

var fields: InputBoxProps[] = [
    {
        label: "Email",
        placeholder: "name@example.com",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        placeholder: "min. 8 characters",
        name: "password",
        type: "text",
    },
];
