import ImageUploader from "@/components/ImageUploader";
import { genTitle } from "@/lib/utils";
import Head from "next/head";

export default function test() {
    return (
        <>
            <Head>
                <title>{genTitle("Components Testing")}</title>
            </Head>
            <div className="py-8">
                <ImageUploader />
            </div>
        </>
    );
}
