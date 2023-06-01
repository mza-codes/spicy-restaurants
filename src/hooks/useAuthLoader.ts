import useAuthStore from "@/store/useAuthStore";
import { shallow } from "zustand/shallow";

export default function useAuthLoader(): [boolean, (bool: boolean) => void] {
    const [loading, setLoading] = useAuthStore((s) => [s.loading, s.setLoading]);
    return [loading, setLoading];
}
