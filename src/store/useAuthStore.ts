import axios from "axios";
import { create } from "zustand";
import { signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { registerRes } from "@/pages/api/register";
import type { LoginData, SetFunction, SignupData } from "@/types";

const useAuthStore = create<AuthStore>((set, get) => ({
    loading: false,
    code: "",
    userData: null,

    setLoading(bool) {
        if (bool instanceof Function) {
            set({ loading: bool(get().loading) });
        } else set({ loading: bool });
    },
    async signInWithPassword({ email, password }) {
        const res = await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password,
        });

        console.log("@handleResponse => ", res);
        if (res?.error || !res?.ok || res.status !== 200) {
            toast.error(res?.error ?? "Authentication Failed!");
            return false;
        }
        return true;
    },
    async signUpWithPassword(formData) {
        try {
            const { data } = await axios.post<registerRes>(`/api/register`, formData);
            console.log("SIGNUP () => ", data);
            const status = await get().signInWithPassword(formData);
            return status;
        } catch (err: any) {
            console.log("SERR () => ", err);
            toast.error("Error while signing up");
            return false;
        }
    },
    async signOut() {
        get().setLoading(true);
        await signOut({ redirect: false });
        get().setLoading(false);
    },
    async storeUserData(formData) {
        set({
            userData: formData,
            code: "4444",
        });
        const status = await new Promise<boolean>((res, rej) =>
            setTimeout(() => res(false), 4000)
        );
        return status;
    },
}));

export const {
    signOut: logOut,
    signInWithPassword,
    signUpWithPassword,
    storeUserData,
} = useAuthStore.getState();

export default useAuthStore;

interface AuthStore {
    loading: boolean;
    code: string;
    userData: SignupData | null;

    setLoading: SetFunction<boolean>;
    signInWithPassword: (formData: LoginData) => Promise<boolean>;
    signUpWithPassword: (formData: SignupData) => Promise<boolean>;
    signOut: () => void;
    storeUserData: (formData: SignupData) => Promise<boolean>;
}
