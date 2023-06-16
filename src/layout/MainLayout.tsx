import ConfirmDialog from "@/components/Dialog/ConfirmDialog";
import Header from "@/components/Header";
import { nunito } from "@/lib/fonts";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export type MainLayoutProps = {
    _uniqueLayout?: boolean;
    children: ReactNode;
};

export default function MainLayout({ _uniqueLayout, children }: MainLayoutProps) {
    return (
        <main className={`${nunito.className}`}>
            {_uniqueLayout ? null : (
                <>
                    <Header />
                    <hr className="w-full" />
                </>
            )}
            <main
                className={`${
                    _uniqueLayout
                        ? ""
                        : "min-h-[calc(100dvh-81px)] max-w-6xl mx-auto px-4"
                }`}
            >
                {children}
                <ConfirmDialog />
                <Toaster
                    containerClassName={`${nunito.className} capitalize font-semibold`}
                    position="top-center"
                    gutter={4}
                    toastOptions={{ duration: 2400 }}
                    reverseOrder
                />
            </main>
        </main>
    );
}
