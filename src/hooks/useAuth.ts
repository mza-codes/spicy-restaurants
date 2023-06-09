import { DBUser } from "@/models/User";
import { atom, useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Nullable<T> = T | null;

const userAtom = atom<Nullable<DBUser>>(null);

export default function useAuth() {
    const [user, setUser] = useAtom(userAtom);
    const { data, status, update } = useSession();

    useEffect(() => {
        if (status === "authenticated") setUser(data?.user);
        else if (status === "unauthenticated") setUser(null);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, data]);

    return { user, setUser, update };
}
