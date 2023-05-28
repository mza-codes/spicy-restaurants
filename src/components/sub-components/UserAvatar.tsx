import useAuth from "@/hooks/useAuth";
import { nunito } from "@/lib/fonts";
import { routes } from "@/lib/routes";
import { logOut } from "@/store/useAuthStore";
import { Popover } from "antd";
import Link from "next/link";

const style = `text-primary py-2 px-4 rounded-md hover:bg-gray.200/40`;

export default function UserAvatar() {
    const { user } = useAuth();

    return (
        <Popover
            trigger={"click"}
            content={
                <div
                    className={`text-sm capitalize font-semibold col gap-1 ${nunito.className}`}
                >
                    <Link className={style} href={"/"}>
                        Home
                    </Link>
                    {user ? (
                        <>
                            <Link className={style} href={"/profile"}>
                                Profile
                            </Link>
                            <button onClick={logOut} className={style}>
                                LogOut
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className={style} href={"/login"}>
                                Login
                            </Link>
                            <Link className={style} href={"/signup"}>
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            }
        >
            <div className="p-[2px] rounded-2xl border-[2px] border-gray.200 cursor-pointer hover:shadow-md hover:border-gray.400">
                <img
                    className="object-fill m-0 rounded-xl w-10"
                    src="/assets/avatar.png"
                    alt="user_avatar"
                />
            </div>
        </Popover>
    );
}
