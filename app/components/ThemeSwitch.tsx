"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    const isDarkMode =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

    if (!mounted)
        return (
            <div className="w-10 h-10 flex justify-center items-center">
                <div className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );

    return (
        <motion.div
            className="cursor-pointer p-2 bg-gray-800 dark:bg-gray-100 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
        >
            {isDarkMode ? (
                <FiSun className="text-yellow-400" size={28} />
            ) : (
                <FiMoon className="text-blue-500" size={28} />
            )}
        </motion.div>
    );
}
