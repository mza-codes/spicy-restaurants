import { atom, useAtom } from "jotai";
import { ReactNode } from "react";

type ContentProps = {
    msg: ReactNode;
    action: Function;
    bg: `${string}`;
};

const isOpenAtom = atom(false);
const contentAtom = atom<ContentProps>({
    msg: <>Uh&apos;uh Seem&apos;s Like there&apos;s an error occured!</>,
    action: () => {},
    bg: "#fff",
});

export default function useDialog() {
    const [isOpen, setIsOpen] = useAtom(isOpenAtom);
    const [content, setContent] = useAtom(contentAtom);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        openWithContent: (msg: ReactNode, bg?: `${string}`, action?: Function) => {
            setContent((c) => ({
                msg,
                action: action ?? c.action,
                bg: bg ?? c.bg,
            }));
            setIsOpen(true);
        },
        body: content.msg,
        action: content.action,
        bg: content.bg,
    };
}
