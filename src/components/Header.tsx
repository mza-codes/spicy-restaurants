import Link from "next/link";
import AppLogo from "./sub-components/AppLogo";
import SearchBox from "./sub-components/SearchBox";
import CartIcon from "./sub-components/CartIcon";
import UserAvatar from "./sub-components/UserAvatar";
import MenuButton from "./sub-components/MenuButton";
import { routes } from "@/lib/routes";
import { BiSearchAlt } from "react-icons/bi";
import { Popover } from "antd";

const navLinks = ["Restaurants", "Deals", "My orders"];

export default function Header() {
    return (
        <header className="bg-white px-4 h-[80px] row justify-between static w-full items-center max-w-6xl mx-auto">
            <div className="row gap-6 items-center">
                <Link href={"/"}>
                    <AppLogo />
                </Link>
                <div className="lg-only">
                    <SearchBox />
                </div>
            </div>

            <div className="row gap-4 items-center">
                <div className="lg-only">
                    {navLinks.map((l, i) => (
                        <Link
                            href={routes[i]}
                            key={l}
                            className={`font-bold text-sm p-2 hover:text-secondary.400 ${
                                i === navLinks.length - 1
                                    ? "border-l-2 border-gray.200"
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

                    <Popover
                        trigger={"click"}
                        content={
                            <div
                                className={`text-sm capitalize font-semibold col gap-1 ${"fg"}`}
                            >
                                <SearchBox />
                            </div>
                        }
                    >
                        <button className="bg-gray.200 text-gray.400 rounded-2xl p-3">
                            <BiSearchAlt size={22} />
                        </button>
                    </Popover>
                    <MenuButton />
                </div>
            </div>
        </header>
    );
}
