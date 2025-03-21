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
        <div className="flex">
            <AnimatePresence>
                {shouldShowSidebar && (
                    <motion.div
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        exit={{ x: -250 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                        className="z-10"
                    >
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-1 max-h-screen overflow-y-auto noScrollBar">
                <AnimatePresence mode="wait">
                    {shouldShowSidebar && (
                        <motion.div
                            key="header"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            <Header />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="p-6"
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
