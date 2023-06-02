import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Spin } from "antd";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

import { ButtonV2 } from "@/components/Button";
import CheckBox, { CheckBoxProps } from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import useAuth from "@/hooks/useAuth";
import ImageUploader from "@/components/ImageUploader";
import { logOut } from "@/store/useAuthStore";

import { DBUser } from "@/models/User";
import { NotificationsKey } from "@/types";

import { updateResponse } from "@/pages/api/update-user";

type Props = {
    user: DBUser;
};

type InputFields = {
    name: string;
    lname: string;
    email: string;
    phone: string;
};

type FormData = InputFields & { [Key in NotificationsKey]: boolean };

const formSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(26),
    email: Yup.string().required().email("Invalid Email!"),
    phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, "Invalid Phone Number!"),
    lname: Yup.string()
        .required("Lastname is required")
        .min(3, "Lastname too short!")
        .max(20, "Lastname too long!"),
    notifications: Yup.array().of(Yup.string()),
});

export default function ProfileForm({ user }: Props) {
    const [loading, setLoading] = useState(false);
    const { setUser, update } = useAuth();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isDirty },
    } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (formData: FormData) => {
        console.log("VALID DATA => ", formData);
        setLoading(true);
        try {
            const {
                deals,
                newsletter,
                offers,
                password_changes,
                restaurants,
                status,
                email,
                ...other
            } = formData;

            const payload: Partial<DBUser> = {
                ...other,
                _id: user._id,
                notifications: {
                    deals,
                    newsletter,
                    offers,
                    password_changes,
                    restaurants,
                    status,
                },
                change_count: {
                    email:
                        user.email === formData.email
                            ? user.change_count.email
                            : user.change_count.email + 1,
                    name:
                        user.name === formData.name
                            ? user.change_count.name
                            : user.change_count.name + 1,
                    password: user.change_count.password,
                },
            };

            const { data } = await axios.patch<updateResponse>(
                `/api/update-user`,
                payload
            );
            console.log("update req complete", data);
            // setUser(data?.user);
            const sess = await update();
            console.log("Session", sess);
            sess?.user && setUser(sess.user);
            toast.success("User updated Successfully!");
        } catch (err: any) {
            console.log("error update-user", err);
            toast.error("Error while updating user!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full border-[1px] border-gray.200 rounded-2xl"
        >
            <div className="col gap-4 p-4 w-full">
                <h2 className="font-bold text-secondary text-lg">Personal Information</h2>
                <ImageUploader />
                <div className="row gap-4 w-full">
                    {fields.map((field, i) => {
                        const fieldProps = { ...field, ...register(field.name) };
                        return (
                            <InputBox
                                required
                                containerClassName="flex-[46%] font-semibold min-w-[230px]"
                                key={i}
                                {...fieldProps}
                                error={errors?.[field.name!]?.message}
                                defaultValue={user?.[field?.name] || field.defaultValue}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full pt-12 pb-6">
                    <h2 className="font-bold text-secondary text-lg w-full">
                        Email notifications
                    </h2>

                    {checkboxes.map((check, i) => (
                        <CheckBox
                            key={i}
                            {...check}
                            className="flex-[46%] w-full"
                            {...register(check.name)}
                            defaultChecked={user.notifications?.[check.name]}
                        />
                    ))}
                </div>
            </div>
            <hr className="w-[full] bg-gray.200" />
            <div className="row gap-4 justify-between items-center w-full p-4">
                <ButtonV2
                    disabled={loading}
                    onClick={logOut}
                    color="#FF5C60"
                    className="w-full sm:w-fit"
                >
                    Log out
                </ButtonV2>
                {loading && <Spin className="mx-auto py-2" />}
                <div className="row items-center gap-4 w-full sm:w-fit">
                    <ButtonV2
                        onClick={() => reset()}
                        disabled={!isDirty}
                        className="flex-grow"
                    >
                        Discard Changes
                    </ButtonV2>
                    <ButtonV2
                        disabled={loading || !!!isDirty}
                        type="submit"
                        className="flex-grow"
                        bg
                    >
                        Save changes
                    </ButtonV2>
                </div>
            </div>
        </form>
    );
}

var fields: InputBoxProps<keyof InputFields>[] = [
    {
        label: "First name",
        placeholder: "John",
        name: "name",
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
        readOnly: true,
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

var checkboxes: CheckBoxProps<NotificationsKey>[] = [
    {
        name: "deals",
        label: "New deals",
        defaultChecked: true,
    },
    {
        name: "password_changes",
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
