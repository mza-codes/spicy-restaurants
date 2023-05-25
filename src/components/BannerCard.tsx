export type BannerCardProps = {
    title: string;
    discount: string;
    category: string;
    color: string;
    bg: string;
    image: string;
};

export default function BannerCard({
    category,
    discount,
    image,
    title,
    color,
    bg,
}: BannerCardProps) {
    return (
        <div
            style={{ backgroundColor: bg }}
            className={`flex flex-col-reverse md:flex-row gap-2 justify-between flex-[90%] md:flex-[46%] rounded-2xl m-2 relative items-end text-start min-h-[180px]`}
        >
            <div className="relative flex-1">
                <img src={image} alt={title} />
            </div>
            <div className="col gap-2 justify-between flex-1 p-4 w-full">
                <div className="col">
                    <span className="text-xl font-semibold text-secondary inline-flex flex-row gap-2 justify-between flex-wrap">
                        {title}
                        <span className="text-gray.400 text-sm p-2 block md:hidden">
                            {category}
                        </span>
                    </span>
                    <span style={{ color: color }} className="text-[40px] font-extrabold">
                        {discount}% OFF
                    </span>
                </div>
                <span className="text-gray.400 text-sm hidden md:block">{category}</span>
            </div>
        </div>
    );
}
