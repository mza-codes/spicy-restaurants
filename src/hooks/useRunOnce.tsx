import { useEffect, useRef } from "react";

export default function useRunOnce(action: Function, orCase?: any) {
    const ran = useRef(false);

    useEffect(() => {
        if (!ran.current || orCase) {
            action();
        }

        return () => {
            ran.current = true;
        };
    }, []);

    return;
}
