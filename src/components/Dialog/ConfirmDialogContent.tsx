import useDialog from "@/hooks/useDialog";

export default function DeleteDialog() {
    const dialog = useDialog();

    return (
        <>
            <span className="font-semibold">This item will be deleted, Continue ?</span>
            <div className="inline-flex gap-2 flex-wrap">
                <button
                    onClick={() => {
                        dialog.action();
                        dialog.onClose();
                    }}
                    className="p-1 text-sm bg-red-600 hover:bg-red-700/80 text-white rounded-md"
                >
                    Confirm
                </button>
                <button
                    onClick={dialog.onClose}
                    className="p-1 text-sm bg-emerald-600 hover:bg-emerald-700/80 text-white rounded-md"
                >
                    Cancel
                </button>
            </div>
        </>
    );
}
