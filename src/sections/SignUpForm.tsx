import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import { signupSchema } from "@/lib/schema";
import { signUpWithPassword } from "@/store/useAuthStore";
import { SignupData } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { formFields } from "./LoginForm";
import useAuthLoader from "@/hooks/useAuthLoader";

export default function SignUpForm() {
    const [loading, setLoading] = useAuthLoader();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignupData>({
        resolver: yupResolver(signupSchema),
    });

    const onSubmit = async (formData: SignupData) => {
        setLoading(true);
        const res = await signUpWithPassword(formData);
        setLoading(false);
    };

    return (
        <>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">SignUp</h2>
                <span className="text-secondary.400 text-sm">
                    Create an account right away to access our full features.
                </span>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="col w-full items-start gap-5"
                >
                    {fields.map((field) => (
                        <InputBox
                            key={field.label}
                            containerClassName="flex-grow w-full"
                            {...field}
                            {...register(field.name)}
                            error={errors[field.name]?.message}
                        />
                    ))}

                    <CheckBox label="Keep me logged in" name="session" />

                    <Button disabled={loading} className="w-full" bg type="submit">
                        SignUp
                    </Button>
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
        </>
    );
}

var fields: InputBoxProps<keyof SignupData>[] = [
    {
        label: "Name",
        placeholder: "Martin Harry",
        name: "name",
        type: "text",
    },
    ...formFields,
];
