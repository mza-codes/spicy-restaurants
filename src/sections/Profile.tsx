import { ButtonV2 } from "@/components/Button";
import CheckBox, { CheckBoxProps } from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import SubHeading from "@/components/SubHeading";
import useAuth from "@/hooks/useAuth";
import { signOut } from "next-auth/react";

export default function Profile() {
    const { user } = useAuth();

    console.log("USER", user);

    return (
        <section className="flex-[3]">
            <SubHeading title="Account" />
            <div className="w-full border-[1px] border-gray.200 rounded-2xl">
                <div className="col gap-4 p-4 w-full">
                    <h2 className="font-bold text-secondary text-lg">
                        Personal Information
                    </h2>
                    <div className="row gap-6 relative pt-6 items-center">
                        <span className="absolute text-secondary.400 text-xs font-semibold top-0 left-1">
                            Avatar
                        </span>
                        <img
                            className="rounded-xl w-24 h-w-24 object-cover"
                            src="/assets/avatar.png"
                            alt="user-avatar"
                        />
                        <ButtonV2>Change</ButtonV2>
                        <ButtonV2 disabled hideBorder>
                            Remove
                        </ButtonV2>
                    </div>

                    <div className="row gap-4 w-full">
                        {fields.map((field, i) => (
                            <InputBox
                                containerClassName="flex-[46%] font-semibold min-w-[230px]"
                                key={i}
                                {...field}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full pt-12 pb-6">
                        <h2 className="font-bold text-secondary text-lg w-full">
                            Email notifications
                        </h2>

                        {checkboxes.map((check, i) => (
                            <CheckBox key={i} {...check} className="flex-[46%] w-full" />
                        ))}
                    </div>
                </div>
                <hr className="w-[full] bg-gray.200" />
                <div className="row gap-4 justify-between items-center w-full p-4">
                    <ButtonV2
                        onClick={() => signOut({ redirect: false })}
                        color="#FF5C60"
                        className="w-full sm:w-fit"
                    >
                        Log out
                    </ButtonV2>
                    <div className="row items-center gap-4 w-full sm:w-fit">
                        <ButtonV2 disabled className="flex-grow">
                            Discard Changes
                        </ButtonV2>
                        <ButtonV2 className="flex-grow" bg>
                            Save changes
                        </ButtonV2>
                    </div>
                </div>
            </div>
        </section>
    );
}

var checkboxes: CheckBoxProps[] = [
    {
        name: "deals",
        label: "New deals",
        defaultChecked: true,
    },
    {
        name: "password-changes",
        label: "Password changes",
        defaultChecked: true,
    },
    {
        name: "restaurants",
        label: "New restaurants",
        defaultChecked: true,
    },
    {
        name: "offers",
        label: "Special offers",
        defaultChecked: false,
    },
    {
        name: "status",
        label: "Order statuses",
        defaultChecked: true,
    },
    {
        name: "newsletter",
        label: "Newsletter",
        defaultChecked: false,
    },
];

var fields: InputBoxProps[] = [
    {
        label: "First name",
        placeholder: "John",
        name: "fname",
        type: "text",
        defaultValue: "Jane",
    },
    {
        label: "Last name",
        placeholder: "Luther B",
        name: "lname",
        type: "text",
        defaultValue: "Robertson",
    },
    {
        label: "Email",
        placeholder: "name@example.com",
        name: "email",
        type: "email",
        defaultValue: "jane.robertson@example.com",
    },
    {
        label: "Phone number",
        placeholder: "Enter Phone",
        name: "phone",
        type: "tel",
        inputMode: "numeric",
        defaultValue: "(217) 555-0113",
    },
];
