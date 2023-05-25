export type BannerCardProps = {
    title: string;
    discount: string;
    category: string;
    color: string;
    bg: string;
    image: string;
    small?: boolean;
};

export default function BannerCard({
    category,
    discount,
    image,
    title,
    color,
    bg,
    small = false,
}: BannerCardProps) {
    if (small)
        return (
            <div
                style={{ backgroundColor: bg }}
                className={`col gap-2 w-full rounded-2xl m-2 relative`}
            >
                <div className="row justify-between gap-2 flex-1 p-6">
                    <div className="col gap-2">
                        <span className="text-xl font-semibold text-secondary">
                            {title}
                        </span>
                        <span
                            style={{ color: color }}
                            className="text-[40px] font-extrabold"
                        >
                            {discount}% OFF
                        </span>
                    </div>
                    <span className="text-gray.400 text-sm mt-4">{category}</span>
                </div>
                <div className="relative flex-1">
                    <img src={image} alt={title} />
                </div>
            </div>
        );
    else
        return (
            <div
                style={{ backgroundColor: bg }}
                className={`row gap-2 justify-between flex-1 rounded-2xl m-2 relative`}
            >
                <div className="relative flex-1">
                    <img src={image} alt={title} />
                </div>
                <div className="col gap-2 justify-between flex-1 py-4">
                    <div className="col">
                        <span className="text-xl font-semibold text-secondary">
                            {title}
                        </span>
                        <span
                            style={{ color: color }}
                            className="text-[40px] font-extrabold"
                        >
                            {discount}% OFF
                        </span>
                    </div>
                    <span className="text-gray.400 text-sm">{category}</span>
                </div>
            </div>
        );
}
