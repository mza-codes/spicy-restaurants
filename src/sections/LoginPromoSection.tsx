import Img from "@/components/Img";

export default function LoginPromoSection() {
    return (
        <section className="bg-primary.400 min-h-[inherit] flex-[2] hidden lg:flex flex-col flex-wrap justify-evenly items-center px-4">
            <div className="relative">
                <Img
                    src="/assets/login-promo-2.png"
                    alt="login promo"
                    bgClassName="bg-primary.400"
                    svgColor="#fff"
                />
            </div>
            <article className="text-white text-center max-w-md col gap-4 items-center">
                <h6 className="text-[32px] font-bold ">Leave reviews for all meals</h6>
                <span className="text-sm">
                    Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo
                    probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
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
    );
}
