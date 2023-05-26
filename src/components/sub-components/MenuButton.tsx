import { nunito } from "@/lib/fonts";
import { routes } from "@/lib/routes";
import { Popover } from "antd";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

export default function MenuButton() {
    return (
        <Popover
            trigger={"click"}
            content={
                <div
                    className={`text-sm capitalize font-semibold col gap-1 ${nunito.className}`}
                >
                    {routes.map((route) => (
                        <Link
                            key={route}
                            className="text-primary py-2 px-4 rounded-md hover:bg-gray.200/40"
                            href={route}
                        >
                            {route.split("/").join("") || "Home"}
                        </Link>
                    ))}
                </div>
            }
        >
            <button className="bg-gray.200 text-gray.400 rounded-2xl p-3">
                <IoIosMenu size={22} />
            </button>
        </Popover>
    );

    var daisyuiPopover = (
        <div className="dropdown dropdown-end">
            <label
                tabIndex={0}
                className="bg-gray.200 text-gray.400 rounded-box p-3 cursor-pointer"
            >
                <IoIosMenu size={22} />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content menu p-1 bg-gray.400/20 rounded-box w-48 text-sm"
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    );
}
