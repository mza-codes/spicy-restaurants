import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import useAuthLoader from "@/hooks/useAuthLoader";
import { loginSchema } from "@/lib/schema";
import { signInWithPassword } from "@/store/useAuthStore";
import { LoginData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const [loading, setLoading] = useAuthLoader();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (formData: LoginData) => {
        setLoading(true);
        const res = await signInWithPassword(formData);
        console.log("res () => ", res);
        setLoading(false);
    };

    return (
        <>
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
        </>
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
