import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
import InputBox, { InputBoxProps } from "@/components/InputBox";
import Secret from "@/components/Secret";
import useAuthLoader from "@/hooks/useAuthLoader";
import useAuthStore from "@/store/useAuthStore";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

type VerifyData = {
    code: string;
};

const verifySchema = Yup.object().shape({
    code: Yup.string()
        .min(4)
        .max(8)
        .required()
        .test("isNumber", (v) => /^\d+\.?\d*$/.test(v)),
});

export default function VeriyForm() {
    const [loading, setLoading] = useAuthLoader();
    const code = useAuthStore((s) => s.code);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<VerifyData>({
        resolver: yupResolver(verifySchema),
    });

    const onSubmit = async (formData: VerifyData) => {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1500));
        if (formData.code === code) {
            toast.success("Verification Success!");
            toast.loading("Please Wait While Signing you In!");
        } else toast.error("Invalid Verification code!");
        console.log("res () => ");
        setLoading(false);
    };

    return (
        <>
            <div className="col gap-8 w-full">
                <h2 className="font-bold text-6xl text-secondary">Verify</h2>
                <span className="text-secondary.400 text-sm">
                    Enter the Verification Code to proceed to SignUp.
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
                            className="tracking-[1rem] font-extrabold text-3xl text-center"
                        />
                    ))}

                    <CheckBox label="Keep me logged in" name="session" />

                    <Button disabled={loading} className="w-full" bg type="submit">
                        Submit
                    </Button>
                    <Button className="w-full" type="button">
                        Subscribe to NewsLetter
                    </Button>
                    <Secret className="w-full text-center">{code}</Secret>
                </form>
            </div>
            <span className="text-secondary.400 text-sm text-center font-normal">
                Don&apos;t have Verification Code?{" "}
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

export var formFields: InputBoxProps<keyof VerifyData>[] = [
    {
        label: "Verification Code",
        placeholder: "045200",
        name: "code",
        type: "text",
        inputMode: "numeric",
        required: true,
    },
];
