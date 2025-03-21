"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    FiHome,
    FiSettings,
    FiUser,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Sidebar = () => {
    const pathname = usePathname();
    const { theme, systemTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: <FiHome /> },
        { name: "Settings", href: "/settings", icon: <FiSettings /> },
        { name: "Profile", href: "/profile", icon: <FiUser /> },
    ];

    const isDarkMode = theme === "dark" || systemTheme === "dark";

    return (
        <motion.div
            initial={false}
            animate={{ width: isOpen ? 256 : 80 }}
            transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94], // Smooth cubic bezier curve
            }}
            className={`h-screen overflow-hidden transition-all 
                ${
                    isDarkMode
                        ? "shadow-[8px_0_20px_rgba(0,0,0,0.7)]"
                        : "shadow-[8px_0_20px_rgba(0,0,0,0.1)]"
                }`}
        >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-4 transition-all">
                <AnimatePresence>
                    {isOpen && (
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="font-bold text-xl"
                        >
                            My App
                        </motion.h1>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={toggleSidebar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full border cursor-pointer transition-all hover:opacity-80"
                >
                    {isOpen ? (
                        <FiChevronLeft className="text-lg" />
                    ) : (
                        <FiChevronRight className="text-lg" />
                    )}
                </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 p-4">
                {links.map((link) => (
                    <Link href={link.href} key={link.name}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer
                                ${
                                    pathname === link.href
                                        ? "bg-blue-500 text-white shadow-md"
                                        : "hover:shadow-md hover:opacity-80"
                                }
                                ${isOpen ? "justify-start" : "justify-center"}`}
                        >
                            <motion.span
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-xl"
                            >
                                {link.icon}
                            </motion.span>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeOut",
                                        }}
                                        className="text-md font-medium"
                                    >
                                        {link.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </Link>
                ))}
            </nav>
        </motion.div>
    );
};

export default Sidebar;
