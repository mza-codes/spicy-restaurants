import { useRouter } from "next/router";
import ScreenLoader from "./ScreenLoader";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
    protect: boolean;
    path: `/${string}`;
    children: ReactNode;
};

export default function AuthRoute({ path, protect, children }: Props) {
    const router = useRouter();
    const data = useSession({
        required: protect,
        onUnauthenticated() {
            router.push(path);
        },
    });

    if (data.status === "loading") return <ScreenLoader />;
    if (data.status === "authenticated" && !protect) {
        router.push("/");
        return null;
    }
    return <>{children}</>;
}
