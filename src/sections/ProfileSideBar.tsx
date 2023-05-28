import MenuItem, { MenuItemProps } from "@/components/MenuItem";
import SubHeading from "@/components/SubHeading";
import { BiShield } from "react-icons/bi";
import { FiCreditCard, FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function ProfileSideBar() {
    return (
        <section className="flex-[1]">
            <SubHeading title="Settings" />
            <div className="col gap-4">
                {menu.map((mn, i) => (
                    <MenuItem
                        className="min-w-[230px]"
                        key={i}
                        {...mn}
                        selected={i === 0 ? true : false}
                    />
                ))}
            </div>
        </section>
    );
}

var menu: MenuItemProps[] = [
    {
        Icon: FiUser,
        title: "Account",
        subtitle: "Personal information",
    },
    {
        Icon: IoLocationOutline,
        title: "Address",
        subtitle: "Shipping addresses",
    },
    {
        Icon: FiCreditCard,
        title: "Payment method",
        subtitle: "Connected credit cards",
    },
    {
        Icon: BiShield,
        title: "Security",
        subtitle: "Password, 2FA",
    },
];
