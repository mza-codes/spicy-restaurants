import AuthRoute from "@/components/AuthRoute";
import { genTitle } from "@/lib/utils";
import Profile from "@/sections/Profile";
import ProfileSideBar from "@/sections/ProfileSideBar";
import Head from "next/head";

export default function ProfilePage() {
    return (
        <AuthRoute protect path="/login">
            <Head>
                <title>{genTitle("Profile")}</title>
            </Head>
            <main className="row gap-6 min-h-[inherit] py-4">
                <ProfileSideBar />
                <Profile />
            </main>
        </AuthRoute>
    );
}
