import Link from "next/link";
import AppLogo from "./sub-components/AppLogo";
import SeatchBox from "./sub-components/SeatchBox";

export default function Header() {
    return (
        <header className="bg-black/20 p-2 h-[70px] row justify-between sticky w-full top-0 items-center">
            <div className="row gap-4">
                <AppLogo />
                <SeatchBox />
            </div>

            <div className="row gap-4">
                {["Restaurants", "Deals", "My orders"].map((l) => (
                    <Link href={"/"} key={l} className="font-semibold">
                        {l}
                    </Link>
                ))}
            </div>
        </header>
    );
}
