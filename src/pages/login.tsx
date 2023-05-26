import Button from "@/components/Button";
import CheckBox from "@/components/CheckBox";
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
            <main className="row center min-h-[100dvh]">
                <div className="col gap-2 flex-[40%] py-8 px-4 lg:px-28 lg:max-w-xl max-w-md min-h-[inherit] justify-between">
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

                <section className="bg-primary.400 min-h-[inherit] flex-[60%] hidden lg:flex flex-col flex-wrap justify-evenly items-center px-4">
                    <div className="relative">
                        <img src="/assets/login-promo-2.png" alt="login promo" />
                    </div>
                    <article className="text-white text-center max-w-md col gap-4 items-center">
                        <h6 className="text-[32px] font-bold ">
                            Leave reviews for all meals
                        </h6>
                        <span className="text-sm">
                            Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te
                            paulo probatus molestiae, eirmod assentior eum ne, et omnis
                            antiopam mel.
                        </span>
                        <div className="row gap-2 pt-6">
                            {[1, 2, 3, 4].map((n, i) => (
                                <button
                                    key={n}
                                    className={`rounded-full w-2 h-2 ${
                                        i === 1 ? "bg-white" : "bg-white/60"
                                    } hover:bg-white/80`}
                                />
                            ))}
                        </div>
                    </article>
                </section>
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
