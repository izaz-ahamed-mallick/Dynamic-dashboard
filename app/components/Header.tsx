"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";
import { extractNameFromEmail } from "@/utils/extracNameFromEmail";

const Header = () => {
    const router = useRouter();
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [userInfo, setuserInfo] = useState({ name: "", email: "" });
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        const userName = extractNameFromEmail(userEmail);
        setuserInfo({ name: userName, email: userEmail });
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleLogout = () => {
        localStorage.removeItem("mockjwtToken");
        router.push("/");
    };

    const user = {
        name: userInfo.name,
        email: userInfo.email,
        avatar: "./user.png",
    };

    const isDarkMode = theme === "dark" || systemTheme === "dark";

    return (
        <div
            className={`flex items-center justify-between p-6 rounded-xl transition-all 
                        ${
                            isDarkMode
                                ? "shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
                                : "shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                        }`}
        >
            {/* User Info */}
            <div className="flex items-center gap-6">
                <motion.img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md 
                               hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                />
                <div>
                    <p className="text-2xl font-bold">{user.name}</p>
                    <p className="text-sm opacity-80">{user.email}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <ThemeSwitch />

                <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-5 py-2.5 rounded-lg shadow-md 
                               bg-red-500 text-white hover:bg-red-600 transition-all"
                >
                    <FiLogOut size={20} />
                    <span>Logout</span>
                </motion.button>
            </div>
        </div>
    );
};

export default Header;
