import Link from "next/link";
import AppLogo from "./sub-components/AppLogo";
import SearchBox from "./sub-components/SearchBox";
import CartIcon from "./sub-components/CartIcon";
import UserAvatar from "./sub-components/UserAvatar";
import MenuButton from "./sub-components/MenuButton";

const links = ["Restaurants", "Deals", "My orders"];

export default function Header() {
    return (
        <header className="bg-white px-4 h-[80px] row justify-between static w-full items-center max-w-6xl mx-auto">
            <div className="row gap-6 items-center">
                <AppLogo />
                <div className="lg-only">
                    <SearchBox />
                </div>
            </div>

            <div className="row gap-4 items-center">
                <div className="lg-only">
                    {links.map((l, i) => (
                        <Link
                            href={"/login"}
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
                </div>
                <CartIcon />
                <UserAvatar />
                <div className="flex flex-row center gap-4 md:hidden">
                    <div className="w-[2px] bg-gray.200 h-full min-h-[30px]"></div>
                    <MenuButton />
                </div>
            </div>
        </header>
    );
}
