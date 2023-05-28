import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import { loginSchema } from "@/lib/schema";
import useAuthStore from "@/store/useAuthStore";
import { LoginData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Spin } from "antd";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginSection() {
    const signIn = useAuthStore((s) => s.signInWithPassword);
    const [loading, setLoading] = useAuthStore((s) => [s.loading, s.setLoading]);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (formData: LoginData) => {
        setLoading(true);
        const res = await signIn(formData);
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
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="col w-full items-start gap-5"
                >
                    {formFields.map((field) => (
                        <InputBox
                            key={field.label}
                            containerClassName="flex-grow w-full"
                            {...field}
                            {...register(field.name)}
                            error={errors?.[field.name]?.message}
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

export var formFields: InputBoxProps<keyof LoginData>[] = [
    {
        label: "Email",
        placeholder: "name@example.com",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        placeholder: "min. 6 characters",
        name: "password",
        type: "text",
    },
];
