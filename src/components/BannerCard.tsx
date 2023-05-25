type Props = {
    title: string;
    discount: string;
    category: string;
    color?: string;
    image: string;
    className?: string;
};

export default function BannerCard({
    category,
    discount,
    image,
    title,
    className = "",
    color = "#fc5692",
}: Props) {
    return (
        <div className={`${className} row gap-4 justify-between`}>
            <div className="relative">
                <img src={image} alt={title} />
            </div>
            <div className="col gap-2 justify-between">
                <div className="col">
                    <span>{title}</span>
                    <span>{discount}</span>
                </div>
                <span>{category}</span>
            </div>
        </div>
    );
}
