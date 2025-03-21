"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./ThemeContext";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideSidebarRoutes = ["/"];
    const shouldShowSidebar = !hideSidebarRoutes.includes(pathname);

    return (
        <div className=" flex h-screen">
            {shouldShowSidebar && <Sidebar />}

            <main className="flex-1 flex flex-col overflow-y-auto h-full w-full">
                {shouldShowSidebar && <Header />}

                <div className="pt-4">{children}</div>
            </main>
        </div>
    );
}
