import AuthRoute from "@/components/AuthRoute";
import { genTitle } from "@/lib/utils";
import Head from "next/head";

export default function ProfilePage() {
    return (
        <>
            <AuthRoute protect path="/login">
                <Head>
                    <title>{genTitle("Profile")}</title>
                </Head>
                <main className="row center min-h-[inherit] bg-secondary/40">
                    <span>Hi there</span>
                </main>
            </AuthRoute>
        </>
    );
}
