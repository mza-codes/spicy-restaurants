import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import Link from "next/link";

export default function LoginSection() {
    return (
        <div className="col gap-2 flex-[40%] py-8 px-4 md:px-20 max-w-[480px] min-h-[inherit] justify-between">
            <Link href={"/"}>
                <AppLogo />
            </Link>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">Login</h2>
                <span className="text-secondary.400 text-sm">
                    Sign in with your data that you entered during your registration.
                </span>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="col w-full items-start gap-8"
                >
                    {fields.map((field) => (
                        <InputBox
                            key={field.label}
                            {...field}
                            containerClassName="flex-grow w-full"
                        />
                    ))}

                    <CheckBox label="Keep me logged in" name="session" />

                    <Button className="w-full" bg type="submit">
                        Login
                    </Button>
                    <Button className="w-full" type="button">
                        Forgot password
                    </Button>
                </form>
            </div>
            <span className="text-secondary.400 text-sm text-center font-normal">
                Don't have an account?{" "}
                <Link
                    className="font-semibold text-primary hover:text-primary/70"
                    href={"/"}
                >
                    <b>Sign up</b>
                </Link>
            </span>
        </div>
    );
}

var fields: InputBoxProps[] = [
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
