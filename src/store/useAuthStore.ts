import axios from "axios";
import { create } from "zustand";
import { signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { LoginData, SignupData } from "@/types";

const useAuthStore = create<AuthStore>((set, get) => ({
    loading: false,
    setLoading(bool) {
        set({ loading: bool });
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
            const { data } = await axios.post(`/api/register`, formData);
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
}));

export const logOut = useAuthStore.getState().signOut;
export default useAuthStore;

interface AuthStore {
    loading: boolean;
    setLoading: (bool: boolean) => void;
    signInWithPassword: (formData: LoginData) => Promise<boolean>;
    signUpWithPassword: (formData: SignupData) => Promise<boolean>;
    signOut: () => void;
}
