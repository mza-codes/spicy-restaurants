type Props = {
    name: string;
    label: string;
};

export default function CheckBox({ label, name }: Props) {
    return (
        <label className="label cursor-pointer">
            <input
                name={name}
                type="checkbox"
                className="checkbox checkbox-sm accent-primary checkbox-primary"
            />
            <label htmlFor={name} className="ml-4 text-base text-secondary">
                {label}
            </label>
        </label>
    );
}
