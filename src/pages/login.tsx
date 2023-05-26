import InputBox, { InputBoxProps } from "@/components/InputBox";
import AppLogo from "@/components/sub-components/AppLogo";
import { genTitle } from "@/lib/utils";
import Head from "next/head";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>{genTitle("Login")}</title>
            </Head>
            <main className="row center min-h-[100vh]">
                <div className="col gap-2 flex-[40%] justify-between py-8 px-4 md:px-20">
                    <Link href={"/"}>
                        <AppLogo />
                    </Link>
                    <div className="col gap-8 w-full">
                        <h2 className="font-bold text-6xl text-secondary">Login</h2>
                        <span className="text-secondary.400 text-sm">
                            Sign in with your data that you entered during your
                            registration.
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

                            <button
                                type="submit"
                                className="text-sm font-bold tracking-wider rounded-lg w-full bg-primary hover:bg-primary.400 text-white p-4"
                            >
                                Login
                            </button>
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

                <section className="bg-primary.400 min-h-[100dvh] flex-[60%] hidden lg:block"></section>
            </main>
        </>
    );
}

LoginPage._uniqueLayout = true;

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
