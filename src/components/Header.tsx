import Link from "next/link";
import AppLogo from "./sub-components/AppLogo";
import SearchBox from "./sub-components/SearchBox";
import CartIcon from "./sub-components/CartIcon";
import UserAvatar from "./sub-components/UserAvatar";

const links = ["Restaurants", "Deals", "My orders"];

export default function Header() {
    return (
        <header className="bg-white px-4 h-[80px] row justify-between static w-full items-center max-w-6xl mx-auto">
            <div className="row gap-6 items-center">
                <AppLogo />
                <SearchBox />
            </div>

            <div className="row gap-4 items-center">
                {links.map((l, i) => (
                    <Link
                        href={"/"}
                        key={l}
                        className={`font-bold text-sm p-2 ${
                            i === links.length - 1
                                ? "border-l-2 border-gray.200 pl-4"
                                : ""
                        }`}
                    >
                        {l}
                    </Link>
                ))}
                <CartIcon />
                <UserAvatar />
            </div>
        </header>
    );
}
