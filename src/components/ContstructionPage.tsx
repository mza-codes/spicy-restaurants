import { genTitle } from "@/lib/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { BsBuildingFillGear } from "react-icons/bs";
import { ButtonV2 } from "./Button";
import Link from "next/link";

type Props = {
    pageTitle?: string;
};

export default function ContstructionPage({ pageTitle }: Props) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{genTitle(pageTitle ?? "404")}</title>
            </Head>
            <section className="min-h-[inherit] col center">
                <div className="text-[260px] md:text-[360px]">
                    <BsBuildingFillGear color="#ddd" />
                </div>
                <span className="font-bold text-2xl py-6">Under Construction!</span>
                <div className="row gap-4">
                    <ButtonV2 onClick={router.back} color="#333">
                        Back
                    </ButtonV2>

                    <Link href={"/"}>
                        <ButtonV2 bg>Go To HomePage</ButtonV2>
                    </Link>
                </div>
            </section>
        </>
    );
}
