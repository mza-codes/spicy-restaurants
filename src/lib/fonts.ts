import { Nunito } from "next/font/google";

export const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    preload: true,
});
