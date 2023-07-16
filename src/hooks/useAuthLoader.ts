import useAuthStore from "@/store/useAuthStore";
import { SetFunction } from "@/types";
import { shallow } from "zustand/shallow";

export default function useAuthLoader(): [boolean, SetFunction<boolean>] {
    const [loading, setLoading] = useAuthStore((s) => [s.loading, s.setLoading], shallow);
    return [loading, setLoading];
}
