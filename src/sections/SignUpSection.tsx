import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import useAuthStore from "@/store/useAuthStore";
import { Spin } from "antd";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignUpSection() {
    const signUpWithPassword = useAuthStore((s) => s.signUpWithPassword);
    const [loading, setLoading] = useAuthStore((s) => [s.loading, s.setLoading]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const res = await signUpWithPassword({
            email: form.get("email") as string,
            password: form.get("password") as string,
            name: form.get("name") as string,
        });
        setLoading(false);
    };

    return (
        <div className="col gap-2 flex-[1] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] justify-between">
            <Link href={"/"}>
                <AppLogo />
            </Link>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">SignUp</h2>
                <span className="text-secondary.400 text-sm">
                    Create an account right away to access our full features.
                </span>
                <form onSubmit={handleSubmit} className="col w-full items-start gap-5">
                    {fields.map((field) => (
                        <InputBox
                            required
                            key={field.label}
                            {...field}
                            containerClassName="flex-grow w-full"
                        />
                    ))}

                    <CheckBox label="Keep me logged in" name="session" />

                    <Button disabled={loading} className="w-full" bg type="submit">
                        SignUp
                    </Button>
                    {loading && <Spin className="mx-auto py-2" />}
                    <Button className="w-full" type="button">
                        Subscribe to Newsletter
                    </Button>
                </form>
            </div>
            <span className="text-secondary.400 text-sm text-center font-normal">
                Already have an account?{" "}
                <Link
                    className="font-semibold text-primary hover:text-primary/70"
                    href={"/login"}
                >
                    <b>Login</b>
                </Link>
            </span>
        </div>
    );
}

var fields: InputBoxProps[] = [
    {
        label: "Name",
        placeholder: "Martin Harry",
        name: "name",
        type: "text",
    },
    {
        label: "Email",
        placeholder: "name@example.com",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        placeholder: "min. 8 characters",
        name: "password",
        type: "text",
    },
];
