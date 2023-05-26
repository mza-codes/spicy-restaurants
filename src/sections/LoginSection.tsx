import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import Link from "next/link";

export default function LoginSection() {
    return (
        <div className="col gap-2 flex-[40%] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] center relative">
            <Link className="absolute left-2 top-6" href={"/"}>
                <AppLogo />
            </Link>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">Login</h2>
                <span className="text-secondary.400 text-sm">
                    Sign in with your data that you entered during your registration.
                </span>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="col w-full items-start gap-6"
                >
                    {fields.map((field) => (
                        <InputBox
                            key={field.label}
                            {...field}
                            required
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
            <span className="text-secondary.400 text-sm text-center font-normal absolute bottom-8 right-1 left-1">
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
