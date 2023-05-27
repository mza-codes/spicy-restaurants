type Props = {
    title: string;
};

export default function SubHeading({ title }: Props) {
    return <h1 className="font-semibold text-xl py-2 text-secondary">{title}</h1>;
}
