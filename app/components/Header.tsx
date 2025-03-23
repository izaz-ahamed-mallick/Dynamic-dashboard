"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";
import { extractNameFromEmail } from "@/utils/extracNameFromEmail";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
    const router = useRouter();
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: "", email: "" });

    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail");
        if (userEmail) {
            const userName = extractNameFromEmail(userEmail);
            setUserInfo({ name: userName, email: userEmail });
        }
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleLogout = () => {
        localStorage.removeItem("mockjwtToken");
        localStorage.removeItem("userEmail");
        document.cookie = "mockjwtToken=; path=/; max-age=0;";
        router.push("/");
    };

    const user = {
        name: userInfo.name || "Guest",
        email: userInfo.email || "guest@example.com",
        avatar: "./user.png",
    };

    const isDarkMode =
        theme === "dark" || (theme === "system" && systemTheme === "dark");

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`sticky top-0 z-50 w-full 
                ${
                    isDarkMode
                        ? "bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700"
                        : "bg-gradient-to-r from-white to-gray-100 border-gray-300"
                } 
                border-b shadow-md px-4 md:px-8 py-4 lg:py-5 flex flex-col md:flex-row 
                items-center justify-between gap-6 transition-all`}
        >
            <div className="flex items-center gap-4">
                <motion.div
                    className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-blue-500 shadow-lg 
                        hover:rotate-12 transition-all cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {user.avatar ? (
                        <img
                            src={user.avatar}
                            alt="User Avatar"
                            className="w-full h-full rounded-full"
                        />
                    ) : (
                        <BsFillPersonFill className="w-full h-full text-gray-400" />
                    )}
                </motion.div>

                <div className="text-left">
                    <p className="text-lg md:text-2xl font-semibold text-blue-400 truncate">
                        {user.name}
                    </p>
                    <p className="text-sm md:text-base text-gray-400 truncate">
                        {user.email}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <ThemeSwitch />

                <motion.button
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg shadow-md 
                        bg-red-500 text-white font-medium 
                        hover:bg-red-600 transition-all"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 12px #ff4d4d" }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FiLogOut size={20} />
                    <span>Logout</span>
                </motion.button>
            </div>
        </motion.header>
    );
};

export default Header;
