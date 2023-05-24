import useDialog from "@/hooks/useDialog";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";

export default function ConfirmDialog() {
    const dialog = useDialog();

    return (
        <AnimatePresence key={"confirm-dialog"}>
            {dialog.isOpen ? (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`fixed bg-gray-800/50 inset-0 col items-center justify-center z-10`}
                >
                    <motion.main
                        style={{ backgroundColor: dialog.bg }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4, easings: ["linear"] }}
                        className="py-10 px-4 rounded-md shadow-md z-20 flex flex-col gap-4 relative items-center justify-center text-center max-w-sm"
                    >
                        <button
                            onClick={dialog.onClose}
                            className="icon-button p-2 absolute right-0 top-0"
                        >
                            <IoCloseCircle size={24} color="red" />
                        </button>
                        {dialog.body}
                    </motion.main>
                </motion.section>
            ) : null}
        </AnimatePresence>
    );
}
