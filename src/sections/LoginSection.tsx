import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps, InputBoxV1 } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import useAuthStore from "@/store/useAuthStore";
import { Spin } from "antd";
import Link from "next/link";
import { FormEvent, useRef } from "react";

export default function LoginSection() {
    const signIn = useAuthStore((s) => s.signInWithPassword);
    const [loading, setLoading] = useAuthStore((s) => [s.loading, s.setLoading]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const res = await signIn({
            email: form.get("email") as string,
            password: form.get("password") as string,
        });

        console.log("res () => ", res);
        setLoading(false);
    };

    return (
        <div className="col gap-2 flex-[1] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] justify-between">
            <Link href={"/"}>
                <AppLogo />
            </Link>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">Login</h2>
                <span className="text-secondary.400 text-sm">
                    Sign in with your data that you entered during your registration.
                </span>
                <form onSubmit={handleSubmit} className="col w-full items-start gap-5">
                    {formFields.map((field) => (
                        <InputBoxV1
                            required
                            key={field.label}
                            {...field}
                            containerClassName="flex-grow w-full"
                        />
                    ))}

                    <CheckBox label="Keep me logged in" name="session" />

                    <Button disabled={loading} className="w-full" bg type="submit">
                        Login
                    </Button>
                    {loading && <Spin className="mx-auto py-2" />}
                    <Button className="w-full" type="button">
                        Forgot password
                    </Button>
                </form>
            </div>
            <span className="text-secondary.400 text-sm text-center font-normal">
                Don&apos;t have an account?{" "}
                <Link
                    className="font-semibold text-primary hover:text-primary/70"
                    href={"/signup"}
                >
                    <b>Sign up</b>
                </Link>
            </span>
        </div>
    );
}

export var formFields: InputBoxProps[] = [
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
