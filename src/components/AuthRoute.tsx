import { useRouter } from "next/router";
import ScreenLoader from "./ScreenLoader";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
    protect: boolean;
    path: `/${string}`;
    children: ReactNode;
    fullscreen?: boolean;
};

export default function AuthRoute({ path, protect, children, fullscreen }: Props) {
    const router = useRouter();
    const data = useSession({
        required: protect,
        onUnauthenticated() {
            router.push(path);
        },
    });

    if (data.status === "loading")
        return (
            <section className={`${fullscreen ? "min-h-screen" : "min-h-[inherit]"}`}>
                <ScreenLoader />
            </section>
        );
    if (data.status === "authenticated" && !protect) {
        router.push("/");
        return null;
    }
    return <>{children}</>;
}
