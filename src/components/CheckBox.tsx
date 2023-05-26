type Props = {
    name: string;
    label: string;
};

export default function CheckBox({ label, name }: Props) {
    return (
        <div className="flex items-center mb-4">
            <input
                id={name}
                type="checkbox"
                className="w-4 h-4 text-primary bg-gray.200 border-gray.200 border-2 rounded focus:ring-primary.400"
            />
            <label htmlFor={name} className="ml-2 text-base text-secondary">
                {label}
            </label>
        </div>
    );
}
