import { Badge, Spin } from "antd";
import Img from "@/components/Img";
import { genTitle } from "@/lib/utils";
import useLocalStore from "@/store/useLocalStore";
import Head from "next/head";
import { FiClock, FiShoppingBag } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import CategoryTag from "@/components/CategoryTag";
import { useEffect, useState } from "react";
import { ButtonV2 } from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Restaurant } from "@/types";
import ScreenLoader from "@/components/ScreenLoader";

export default function ViewRestaurantPage() {
    const restaurants = useLocalStore((s) => s.restaurants);
    const [res, setRes] = useState<Restaurant | null>(null);
    const [count, setCount] = useState(res?.count ?? 0);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const { name, id } = router.query;
        if (name || id) {
            const value =
                restaurants.filter((r) => {
                    if (name) return r.title === name;
                    else return r._id == id;
                })[0] ?? null;
            // change to id
            console.log({ name, value, q: router.query });
            setRes(value);
        }
    }, [router.query]);

    useEffect(() => {
        setLoading(false);
    }, [setRes]);

    if (loading) return <ScreenLoader />;

    if (!res)
        return (
            <section className="p-4">
                <span className="p-2 font-semibold text-secondary">
                    Restaurant Not found!
                </span>
            </section>
        );
    return (
        <>
            <Head>
                <title>{genTitle("View Restaurant")}</title>
            </Head>
            <main className="min-h-[inherit] col items-start justify-start">
                <section className="m-3 max-h-[80vh] w-full">
                    <Img
                        src={res.img}
                        alt={res.title}
                        className="rounded-lg shadow-lg max-h-[80vh] w-full object-cover"
                    />
                </section>
                <section className="m-4 col gap-4 relative w-full">
                    <div className="row items-center gap-2 justify-between">
                        <h2 className="text-4xl font-bold my-2">{res.title}</h2>
                        <div className="row items-center gap-6">
                            <Badge
                                count={
                                    count > 0 ? (
                                        <span className="text-[10px] bg-primary text-white rounded-lg py-[5px] px-[7px] font-semibold border-[1px] border-white">
                                            {count}
                                        </span>
                                    ) : null
                                }
                            >
                                <button
                                    onClick={() => setCount((c) => c + 1)}
                                    className={`hover:text-primary.400 btn-animate cursor-pointer ${
                                        count > 0 ? "text-primary" : "text-primary.200"
                                    }`}
                                >
                                    <FiShoppingBag color="inherit" size={22} />
                                </button>
                            </Badge>
                            {res.featured && (
                                <span
                                    style={{
                                        borderRadius: "0 16px",
                                        letterSpacing: "0.8px",
                                    }}
                                    className="bg-primary text-xs font-bold py-2 px-3 text-white"
                                >
                                    FEATURED
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="text-gray.400 row gap-1 items-center font-semibold text-lg">
                        <FiClock size={26} color="#C7C8D2" />
                        &nbsp;
                        <span className="text-xl font-bold">{res.time} min</span>
                        <span className="text-primary font-black">
                            <BsDot size={30} />
                        </span>
                        <span className="text-xl font-bold">${res.price} min sum</span>
                        <div className="row gap-2 ml-auto">
                            {res.tags.map((tag, i) => (
                                <Link href={`/?tag=${tag}`} key={`${i}-${tag}`}>
                                    <CategoryTag title={tag} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr className="my-2" />
                    <main className="row justify-between items-start">
                        <div className="col gap-3 items-start justify-start flex-1 m-2 ml-1">
                            <label className="font-semibold text-lg ">
                                Enter a Review
                            </label>
                            <textarea
                                className="p-2 border-2 rounded-lg text-secondary border-gray.200 outline-none focus:border-primary.400 resize-none min-w-[180px] sm:min-w-[220px] min-h-[200px] w-full"
                                name="feedback"
                                id="feedback"
                                // cols={50}
                                // rows={5}
                                placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id eum dignissimos minima temporibus amet dolorum voluptatibus ipsum aliquid nisi repellat."
                            ></textarea>
                            <div className="rating gap-1">
                                {[1, 2, 3, 4, 5].map((star, i) => (
                                    <input
                                        key={i}
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                ))}
                            </div>
                            <ButtonV2>Submit</ButtonV2>
                        </div>
                        <div className="flex flex-col-reverse flex-1 m-2 gap-3">
                            <span className="text-xl font-semibold text-center">
                                No Reviews Found!
                            </span>

                            <span className="font-semibold text-center">
                                <Spin className="p-3" size="large" />
                                <br />
                                LOADING REVIEWS
                            </span>

                            {[1, 2, 3].map((rev, i) => (
                                <div
                                    className="review bg-gray.200 p-4 rounded-lg text-secondary min-w-[180px] sm:min-w-[220px]"
                                    key={i}
                                >
                                    <div className="avatar online placeholder m-1">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                            <span className="text-xl">JO</span>
                                        </div>
                                    </div>
                                    &nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Exercitationem animi et, nobis vitae
                                    earum error praesentium accusantium soluta quod
                                    aliquid ducimus neque enim, repudiandae explicabo
                                    maiores, ratione quae incidunt doloremque.
                                </div>
                            ))}
                        </div>
                    </main>
                </section>
            </main>
        </>
    );
}
